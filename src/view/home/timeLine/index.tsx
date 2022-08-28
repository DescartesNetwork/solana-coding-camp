import { Col, Row, Typography } from 'antd'
import WheelTimeLine from './wheelTimeLine'

const TimeLine = () => {
  return (
    <Row
      gutter={[24, 24]}
      justify="center"
      style={{ paddingTop: 256, paddingBottom: 256 }}
    >
      <Col>
        <Typography.Title level={2} className="text-title">
          Timeline
        </Typography.Title>
      </Col>
      <Col span={24}>
        <WheelTimeLine />
      </Col>
    </Row>
  )
}

export default TimeLine
