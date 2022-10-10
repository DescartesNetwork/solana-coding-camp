import { Col, Row, Typography } from 'antd'
import MobileView from './mobileView'
import MaxWidthLayout from 'components/maxWidthLayout'
import Container from './container'

import useWidth from 'hooks/useWidth'
import useLanguages from 'hooks/useLanguages'

const TimeLine = () => {
  const system = useLanguages()
  const width = useWidth()
  const isMobile = width < 992

  return (
    <MaxWidthLayout>
      <Row gutter={[0, 72]} justify="center">
        <Col>
          <Typography.Title level={2} className="text-title">
            {system.timeline.title}
          </Typography.Title>
        </Col>
        <Col span={24}>{isMobile ? <MobileView /> : <Container />}</Col>
      </Row>
    </MaxWidthLayout>
  )
}

export default TimeLine
