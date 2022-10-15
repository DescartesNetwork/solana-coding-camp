import { useCallback, useMemo } from 'react'

import { Avatar, Card, Col, Row, Space, Typography } from 'antd'
import ProjectSocial from './projectSocial'
import Upvote from './upvote'
import { useWidth } from 'hooks/useUI'
import { Social } from 'store/projects.reducer'

export type ProjectMetadata = Partial<
  Record<Social, string> & Record<'others', string[]>
>

export type ProjectData = {
  name: string
  logo: string
  cover: string
  description: string
  author: string
  metadata: ProjectMetadata
}

export type ProjectCardProps = {
  data: ProjectData
}

const ProjectCard = ({
  data: { name, logo, description, author, metadata },
}: ProjectCardProps) => {
  const width = useWidth()

  const isMobile = useMemo(() => width < 576, [width])
  const socials = useMemo(
    () => Object.keys(metadata).filter((key) => key !== 'others') as Social[],
    [metadata],
  )

  const onDetails = useCallback(() => {
    console.log(name)
  }, [name])

  return (
    <Card style={{ cursor: 'pointer' }} bordered={false} onClick={onDetails}>
      <Row gutter={[24, 24]} wrap={isMobile}>
        <Col flex="auto">
          <Row gutter={[24, 24]} wrap={false}>
            <Col>
              <Avatar shape="square" src={logo} size={isMobile ? 64 : 128} />
            </Col>
            <Col flex="auto">
              <Row gutter={[8, 8]}>
                <Col span={24}>
                  <Typography.Title level={4}>{name}</Typography.Title>
                </Col>
                <Col span={24}>
                  <Space>
                    <Typography.Text type="secondary">By</Typography.Text>
                    <Typography.Text type="success">{author}</Typography.Text>
                  </Space>
                </Col>
                <Col span={24}>
                  <Space style={{ marginLeft: -8 }}>
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
