import { Fragment, useMemo } from 'react'
import { useSelector } from 'react-redux'

import { Avatar, Card, Col, Divider, Empty, Row, Space, Typography } from 'antd'
import IonIcon from '@sentre/antd-ionicon'

import { ProjectCardProps } from './projectCard'
import { useRankingProjects } from 'hooks/useProjects'
import { useUpvote, useUpvoters } from 'hooks/useUpvote'
import useLanguages from 'hooks/useLanguages'
import { AppState } from 'store'

const LeaderCard = ({
  data: { name, logo, description },
}: ProjectCardProps) => {
  const { voters } = useUpvoters(name)
  const upvote = useUpvote(name)

  return (
    <Row gutter={[12, 12]} wrap={false} align="middle">
      <Col>
        <Avatar size={48} shape="square" src={logo} />
      </Col>
      <Col flex="auto">
        <Row gutter={[4, 4]}>
          <Col span={24}>
            <Typography.Text>{name}</Typography.Text>
          </Col>
          <Col span={24}>
            <Typography.Paragraph type="secondary" ellipsis={{ rows: 2 }}>
              {description}
            </Typography.Paragraph>
          </Col>
        </Row>
      </Col>
      <Col>
        <Divider
          type="vertical"
          style={{
            height: 32,
            borderColor: '#303035',
          }}
        />
      </Col>
      <Col>
        <Space
          direction="vertical"
          align="center"
          size={4}
          style={{ cursor: 'pointer' }}
          onClick={upvote}
        >
          <IonIcon name="caret-up-outline" />
          <Typography.Title level={5}>{voters}</Typography.Title>
        </Space>
      </Col>
    </Row>
  )
}

const Leaderboard = () => {
  const allProjects = useSelector((state: AppState) => state.projects)
  const { project } = useLanguages()
  const { ranking } = useRankingProjects(5)

  const projects = useMemo(
    () => ranking.map((id) => allProjects[id]).filter((project) => project),
    [ranking, allProjects],
  )

  return (
    <Row gutter={[24, 24]}>
      <Col span={24} style={{ marginTop: 18 }}>
        <Typography.Text>{project.leaderboard}</Typography.Text>
      </Col>
      <Col span={24}>
        <Card bordered={false}>
          <Row gutter={[24, 24]} justify="center">
            {!projects.length && (
              <Col>
                <Empty />
              </Col>
            )}
            {projects.map((data, i) => (
              <Fragment key={data.name}>
                <Col span={24}>
                  <LeaderCard data={data} />
                </Col>
                {i !== projects.length - 1 && (
                  <Col span={24}>
                    <Divider
                      style={{
                        margin: `0px -24px`,
                        width: 'calc(100% + 48px)',
                        borderColor: '#303035',
                      }}
                    />
                  </Col>
                )}
              </Fragment>
            ))}
          </Row>
        </Card>
      </Col>
    </Row>
  )
}

export default Leaderboard
