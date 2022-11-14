import { Col, Row, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import Container from './container'

import useLanguages from 'hooks/useLanguages'

const TimeLine = () => {
  const system = useLanguages()

  return (
    <MaxWidthLayout>
      <Row gutter={[0, 72]} justify="center">
        <Col>
          <Typography.Title level={2} className="text-title">
            {system.timeline.title}
          </Typography.Title>
        </Col>
        <Col span={24}>
          {' '}
          <Container />
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}

export default TimeLine
