import { useCallback, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { encode } from 'bs58'
import { uid } from '@sentre/codingcamp'

import { Avatar, Col, Row, Space, Tag, Typography } from 'antd'
import IonIcon from '@sentre/antd-ionicon'

import { useProjects } from 'hooks/useProjects'
import { AppState } from 'store'
import useLanguages from 'hooks/useLanguages'

type SectionProps = {
  title: string
  projectIds: string[]
  onClick?: (name: string) => void
}

const Section = ({ title, projectIds, onClick = () => {} }: SectionProps) => {
  const projects = useSelector((state: AppState) => state.projects)

  return (
    <Row gutter={[24, 12]}>
      <Col span={24}>
        <Space>
          <Typography.Text>{title}</Typography.Text>
          <Tag color="#80ECFF" style={{ color: '#000000' }}>
            {projectIds.length}
          </Tag>
        </Space>
      </Col>
      {projectIds.map((id) => (
        <Col
          key={id}
          style={{ cursor: 'pointer' }}
          onClick={() => onClick(projects[id].name)}
        >
          <Space direction="vertical" align="center">
            <Avatar size={48} shape="square" src={projects[id].logo}>
              <IonIcon name="image-outline" />
            </Avatar>
            <Typography.Paragraph
              type="secondary"
              style={{ width: 48, textAlign: 'center' }}
              ellipsis
            >
              {projects[id].name}
            </Typography.Paragraph>
          </Space>
        </Col>
      ))}
    </Row>
  )
}

const Category = () => {
  const projects = useProjects()
  const history = useHistory()
  const { project } = useLanguages()

  const list = useMemo(() => {
    const temp: Record<string, string[]> = {}
    projects.forEach(({ category, name }) => {
      if (!temp[category]) temp[category] = []
      temp[category].push(encode(uid(name)))
    })
    return temp
  }, [projects])

  const onDetails = useCallback(
    (id) => {
      return history.push(`/project/${id}`)
    },
    [history],
  )

  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <Typography.Title level={4}>{project.allProjects}</Typography.Title>
      </Col>
      {Object.keys(list).map((title) => (
        <Col key={title} span={24}>
          <Section title={title} projectIds={list[title]} onClick={onDetails} />
        </Col>
      ))}
    </Row>
  )
}

export default Category
