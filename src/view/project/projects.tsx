import { useCallback, useMemo, useState } from 'react'

import { Button, Col, Empty, Row, Typography } from 'antd'
import ProjectCard from './projectCard'

import { ProjectData } from 'store/projects.reducer'

const LIMIT = 5

export type ProjectsProps = {
  title: string
  projects?: ProjectData[]
}

const Projects = ({ title, projects = [] }: ProjectsProps) => {
  const [limit, setLimit] = useState(LIMIT)

  const onMore = useCallback(() => {
    setLimit(limit + LIMIT)
  }, [limit])

  const limitedProjects = useMemo(
    () => projects.slice(0, limit),
    [projects, limit],
  )

  return (
    <Row gutter={[24, 24]} justify="center">
      <Col span={24}>
        <Typography.Title level={2}>{title}</Typography.Title>
      </Col>
      {!projects.length && (
        <Col span={24}>
          <Row gutter={[24, 24]} justify="center">
            <Col>
              <Empty />
            </Col>
          </Row>
        </Col>
      )}
      {limitedProjects.map((project) => (
        <Col span={24} key={project.name}>
          <ProjectCard data={project} />
        </Col>
      ))}
      <Col>
        {limit < projects.length && <Button onClick={onMore}>Show More</Button>}
      </Col>
    </Row>
  )
}

export default Projects
