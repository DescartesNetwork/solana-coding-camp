import { useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { uid } from '@sentre/codingcamp'
import { encode } from 'bs58'

import { Card, Col, Row } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import { useGap } from 'hooks/useUI'
import { useSelector } from 'react-redux'
import { AppState } from 'store'

const ProjectDetails = () => {
  const { projectName } = useParams<{ projectName: string }>()
  const projects = useSelector((state: AppState) => state.projects)
  const gap = useGap()

  const projectId = useMemo(() => encode(uid(projectName)), [projectName])
  const data = useMemo(() => projects[projectId], [projectId, projects])

  console.log(data)

  return (
    <MaxWidthLayout className="banner-gradient-bg">
      <Row gutter={[24, 24]}>
        <Col span={24} style={{ height: gap / 2 }} />
        <Col span={24}>
          <Card bordered={false}>
            <Row gutter={[24, 24]}>
              <Col span={24}>
                {projectName}
                {projectId}
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}

export default ProjectDetails
