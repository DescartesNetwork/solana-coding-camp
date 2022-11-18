import { MouseEvent, useCallback, useMemo } from 'react'
import { useHistory } from 'react-router-dom'

import { Avatar, Card, Col, Row, Space, Tag, Typography } from 'antd'
import IonIcon from '@sentre/antd-ionicon'
import ProjectSocial from './projectSocial'
import Upvote from './upvote'
import Chip from 'components/chip'

import { useWidth } from 'hooks/useUI'
import { ProjectData, Social } from 'store/projects.reducer'
import useLanguages from 'hooks/useLanguages'

export type ProjectCardProps = {
  data: ProjectData
}

const DEMO_PROJECTS = ['Sentre', 'Ancient8', 'Saros']

const ProjectCard = ({
  data: { name, logo, description, author, category, metadata },
}: ProjectCardProps) => {
  const width = useWidth()
  const history = useHistory()
  const { project } = useLanguages()

  const isMobile = useMemo(() => width < 576, [width])
  const socials = useMemo(
    () => Object.keys(metadata).filter((key) => key !== 'others') as Social[],
    [metadata],
  )

  const onDetails = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      e.stopPropagation()
      return history.push(`/project/${name}`)
    },
    [history, name],
  )

  return (
    <Card style={{ cursor: 'pointer' }} bordered={false} onClick={onDetails}>
      <Row gutter={[24, 24]} wrap={isMobile}>
        <Col flex="auto">
          <Row gutter={[24, 24]} wrap={false}>
            <Col>
              <Avatar shape="square" src={logo} size={isMobile ? 64 : 128}>
                <IonIcon name="image-outline" />
              </Avatar>
            </Col>
            <Col flex="auto">
              <Row gutter={[8, 8]}>
                <Col span={24}>
                  <Space size={12}>
                    <Typography.Title level={4}>{name}</Typography.Title>
                    {DEMO_PROJECTS.includes(name) && (
                      <Tag color="#14f195">Demo</Tag>
                    )}
                    <Chip title={category} />
                  </Space>
                </Col>
                <Col span={24}>
                  <Space>
                    <Typography.Text type="secondary">
                      {project.by}
                    </Typography.Text>
                    <Typography.Text type="success">{author}</Typography.Text>
                  </Space>
                </Col>
                <Col span={24}>
                  <Space style={{ marginLeft: -8 }} size={2}>
                    {socials.map((social) => (
                      <ProjectSocial
                        key={social}
                        type={social}
                        url={metadata[social] || ''}
                      />
                    ))}
                  </Space>
                </Col>
                <Col span={24}>
                  <Typography.Paragraph
                    type="secondary"
                    ellipsis={{ rows: isMobile ? 2 : 1 }}
                  >
                    {description}
                  </Typography.Paragraph>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs={isMobile ? 24 : undefined}>
          <Upvote name={name} />
        </Col>
      </Row>
    </Card>
  )
}

export default ProjectCard
