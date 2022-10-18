import { Col, Row } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import Banner from './banner'
import Projects from './projects'
import Leaderboard from './leaderboard'
import Category from './category'

import { useGap } from 'hooks/useUI'
import { useProjects, useShuffledProjects } from 'hooks/useProjects'
import useLanguages from 'hooks/useLanguages'

const Project = () => {
  const gap = useGap()
  const projects = useProjects()
  const shuffledProjects = useShuffledProjects()
  const { project } = useLanguages()

  return (
    <MaxWidthLayout className="banner-gradient-bg">
      <Row gutter={[24, 24]}>
        <Col span={24} style={{ height: gap / 2 }} />
        <Col span={24}>
          <Banner />
        </Col>
        <Col span={24} />
        <Col
          xs={{ order: 2, span: 24 }}
          lg={{ order: 1, span: 16 }}
          xl={{ order: 1, span: 18 }}
        >
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <Projects title={project.latestProjects} projects={projects} />
            </Col>
            <Col span={24}>
              <Projects title={project.explorer} projects={shuffledProjects} />
            </Col>
          </Row>
        </Col>
        <Col
          xs={{ order: 1, span: 24 }}
          lg={{ order: 2, span: 8 }}
          xl={{ order: 1, span: 6 }}
        >
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <Leaderboard />
            </Col>
            <Col span={24}>
              <Category />
            </Col>
          </Row>
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}

export default Project
