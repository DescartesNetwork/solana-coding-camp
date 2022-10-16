import { Button, Col, Row, Typography } from 'antd'
import ProjectCard from './projectCard'

import { ProjectData } from 'store/projects.reducer'

export type ProjectsProps = {
  title: string
  projects?: ProjectData[]
}

const Projects = ({ title, projects = [] }: ProjectsProps) => {
  return (
    <Row gutter={[24, 24]} justify="center">
      <Col span={24}>
        <Typography.Title level={2}>{title}</Typography.Title>
      </Col>
      {projects.map((project) => (
        <Col span={24} key={project.name}>
          <ProjectCard data={project} />
        </Col>
      ))}
      <Col>
        <Button>Show More</Button>
      </Col>
    </Row>
  )
}

export default Projects
