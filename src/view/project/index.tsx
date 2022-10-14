import { Col, Row } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import Banner from './banner'
import Projects from './projects'

import { useGap } from 'hooks/useUI'
import { useProjects } from 'hooks/useProjects'
import Leaderboard from './leaderboard'

const Project = () => {
  const gap = useGap()
  const projects = useProjects()

  return (
    <MaxWidthLayout>
      <Row gutter={[36, 24]}>
        <Col span={24} style={{ height: gap }} />
        <Col span={24}>
          <Banner />
        </Col>
        <Col
          xs={{ order: 2, span: 24 }}
          lg={{ order: 1, span: 16 }}
          xl={{ order: 1, span: 18 }}
        >
          <Row gutter={[24, 24]}>
            <Col span={24}>
              <Projects title="Defi" projects={projects} />
            </Col>
            <Col span={24}>
              <Projects title="Gamefi" projects={projects} />
            </Col>
          </Row>
        </Col>
        <Col
          xs={{ order: 1, span: 24 }}
          lg={{ order: 2, span: 8 }}
          xl={{ order: 1, span: 6 }}
        >
          <Leaderboard />
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}

export default Project
