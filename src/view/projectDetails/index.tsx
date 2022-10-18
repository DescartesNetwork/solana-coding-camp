import { useCallback, useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useLocation, useParams } from 'react-router-dom'
import { uid } from '@sentre/codingcamp'
import { encode } from 'bs58'
import moment from 'moment'
import copy from 'copy-to-clipboard'

import {
  Avatar,
  Button,
  Card,
  Col,
  Row,
  Space,
  Spin,
  Tooltip,
  Typography,
} from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import IonIcon from '@sentre/antd-ionicon'
import Upvote from 'view/project/projectCard/upvote'
import ProjectSocial from 'view/project/projectCard/projectSocial'
import Chip from 'components/chip'

import { useGap } from 'hooks/useUI'
import { AppState } from 'store'
import { asyncWait } from 'helpers/util'
import { Social } from 'store/projects.reducer'
import useLanguages from 'hooks/useLanguages'

const ProjectDetails = () => {
  const [copied, setCopied] = useState(false)
  const { projectName } = useParams<{ projectName: string }>()
  const history = useHistory()
  const location = useLocation()
  const projects = useSelector((state: AppState) => state.projects)
  const gap = useGap()
  const { project } = useLanguages()

  const projectId = useMemo(() => encode(uid(projectName)), [projectName])
  const data = useMemo(() => projects[projectId], [projectId, projects])
  const socials = useMemo(() => {
    if (!data?.metadata) return []
    return Object.keys(data.metadata || {}).filter(
      (key) => key !== 'others',
    ) as Social[]
  }, [data?.metadata])

  const onCopy = useCallback(async () => {
    copy(window.location.href)
    setCopied(true)
    await asyncWait(1500)
    return setCopied(false)
  }, [])

  const onBack = useCallback(async () => {
    if (!location.key) return history.push('/project')
    return history.goBack()
  }, [history, location])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!data)
    return (
      <Row gutter={[24, 24]} justify="center">
        <Col span={24} style={{ height: gap / 2 }} />
        <Col>
          <Spin />
        </Col>
      </Row>
    )
  return (
    <MaxWidthLayout className="banner-gradient-bg">
      <Row gutter={[24, 24]} justify="center">
        <Col span={24}>
          <Row gutter={[12, 12]}>
            <Col span={24}>
              <Button
                type="text"
                size="large"
                onClick={onBack}
                icon={<IonIcon name="arrow-back-outline" />}
              >
                {project.back}
              </Button>
            </Col>
            <Col span={24}>
              <Card
                bordered={false}
                style={{
                  backgroundImage: `url("${data.cover}")`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: 375,
                }}
              />
            </Col>
          </Row>
        </Col>
        <Col span={20} style={{ marginTop: -72 }}>
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <Row gutter={[12, 12]} wrap={false} align="bottom">
                <Col flex="auto">
                  <Avatar
                    shape="square"
                    src={data.logo}
                    size={128}
                    style={{
                      borderRadius: 24,
                      border: '4px solid #000000',
                    }}
                  >
                    <IonIcon name="image-outline" />
                  </Avatar>
                </Col>
                <Col>
                  <Upvote name={projectName} />
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Row gutter={[12, 12]}>
                <Col span={24}>
                  <Row gutter={[12, 12]} align="middle">
                    <Col flex="auto">
                      <Typography.Title level={1}>
                        {projectName}
                      </Typography.Title>
                    </Col>
                    <Col>
                      <Space>
                        <IonIcon name="calendar" />
                        <Typography.Text type="secondary">
                          {moment(data.submittedAt).format('MMM DD, YYYY')}
                        </Typography.Text>
                        <Tooltip title="Copied" visible={copied}>
                          <Button
                            icon={<IonIcon name="share-social" />}
                            style={{ color: '#14f195' }}
                            type="text"
                            onClick={onCopy}
                          >
                            Share
                          </Button>
                        </Tooltip>
                      </Space>
                    </Col>
                  </Row>
                </Col>
                <Col span={24}>
                  <Chip title={data.category} />
                </Col>
                <Col span={24}>
                  <Space>
                    <Typography.Text type="secondary">By</Typography.Text>
                    <Typography.Text type="success">
                      {data.author}
                    </Typography.Text>
                  </Space>
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Space style={{ marginLeft: -8 }} size={2} wrap={true}>
                {socials.map((social) => (
                  <ProjectSocial
                    key={social}
                    type={social}
                    url={data.metadata[social] || ''}
                    lengthy
                  />
                ))}
              </Space>
            </Col>
            <Col span={24}>
              <Row gutter={[12, 12]}>
                <Col span={24}>
                  <Typography.Title level={4}>Description</Typography.Title>
                </Col>
                <Col span={24}>
                  <Typography.Paragraph>
                    {data.description}
                  </Typography.Paragraph>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}

export default ProjectDetails
