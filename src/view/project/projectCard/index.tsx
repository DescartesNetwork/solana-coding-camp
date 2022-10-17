import { MouseEvent, useCallback, useMemo } from 'react'
import { useHistory } from 'react-router-dom'

import { Avatar, Card, Col, Row, Space, Typography } from 'antd'
import IonIcon from '@sentre/antd-ionicon'
import ProjectSocial from './projectSocial'
import Upvote from './upvote'
import Chip from 'components/chip'

import { useWidth } from 'hooks/useUI'
import { ProjectData, Social } from 'store/projects.reducer'

export type ProjectCardProps = {
  data: ProjectData
}

const ProjectCard = ({
  data: { name, logo, description, author, category, metadata },
}: ProjectCardProps) => {
  const width = useWidth()
  const history = useHistory()

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
                    <Chip title={category} />
                  </Space>
                </Col>
                <Col span={24}>
                  <Space>
                    <Typography.Text type="secondary">By</Typography.Text>
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
