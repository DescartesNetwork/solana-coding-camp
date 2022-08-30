import { Col, Row, Typography } from 'antd'
import WheelTimeLine from './wheelTimeLine'

import useWidth from 'hooks/useWidth'
import MobileView from './mobileView'

const TimeLine = () => {
  const width = useWidth()
  const spacing = width < 1200 ? 126 : 256
  const isMobile = width < 992

  return (
    <Row
      gutter={[24, 24]}
      justify="center"
      style={{ paddingTop: 256, paddingBottom: spacing }}
    >
      <Col>
        <Typography.Title level={2} className="text-title">
          Timeline
        </Typography.Title>
      </Col>
      <Col span={24}>{isMobile ? <MobileView /> : <WheelTimeLine />}</Col>
    </Row>
  )
}

export default TimeLine
