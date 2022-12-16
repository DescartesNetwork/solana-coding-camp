import { Fragment, MouseEvent, useCallback, useMemo } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import {
  Avatar,
  Card,
  Col,
  Divider,
  Empty,
  Row,
  Space,
  Tag,
  Typography,
} from 'antd'
import IonIcon from '@sentre/antd-ionicon'

import { ProjectCardProps } from './projectCard'
import { useRankingProjects } from 'hooks/useProjects'
import { useUpvoters } from 'hooks/useUpvote'
import useLanguages from 'hooks/useLanguages'
import { AppState } from 'store'

const LeaderCard = ({
  data: { name, logo, description },
}: ProjectCardProps) => {
  const history = useHistory()
  const voters = useUpvoters(name)

  const onDetails = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      e.stopPropagation()
      return history.push(`/project/${name}`)
    },
    [history, name],
  )

  return (
    <Row
      gutter={[12, 12]}
      wrap={false}
      align="middle"
      style={{ cursor: 'pointer' }}
      onClick={onDetails}
    >
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
        <Space direction="vertical" align="center" size={4}>
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
      <Col span={24} style={{ marginTop: 12 }}>
        <Space>
          <Typography.Title level={4}>{project.leaderboard}</Typography.Title>
          <Tag color="#80ECFF" style={{ color: '#000000' }}>
            {Object.keys(allProjects).length}
          </Tag>
        </Space>
      </Col>
      <Col span={24}>
        <Card bordered={false}>
          <Row gutter={[24, 24]}>
            {!projects.length && (
              <Col span={24}>
                <Row gutter={[24, 24]} justify="center">
                  <Col>
                    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
                  </Col>
                </Row>
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
