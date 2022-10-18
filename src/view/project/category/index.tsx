import { useMemo } from 'react'

import { Col, Row, Space, Tag, Typography } from 'antd'
import ProjectLogo from 'components/projectLogo'

import { useProjects } from 'hooks/useProjects'
import useLanguages from 'hooks/useLanguages'

type SectionProps = {
  title: string
  projectIds: string[]
}

const Section = ({ title, projectIds }: SectionProps) => {
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
      {projectIds.map((name) => (
        <Col key={name}>
          <ProjectLogo name={name} />
        </Col>
      ))}
    </Row>
  )
}

const Category = () => {
  const projects = useProjects()
  const { project } = useLanguages()

  const list = useMemo(() => {
    const temp: Record<string, string[]> = {}
    projects.forEach(({ category, name }) => {
      if (!temp[category]) temp[category] = []
      temp[category].push(name)
    })
    return temp
  }, [projects])

  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <Typography.Title level={4}>{project.allProjects}</Typography.Title>
      </Col>
      {Object.keys(list).map((title) => (
        <Col key={title} span={24}>
          <Section title={title} projectIds={list[title]} />
        </Col>
      ))}
    </Row>
  )
}

export default Category
