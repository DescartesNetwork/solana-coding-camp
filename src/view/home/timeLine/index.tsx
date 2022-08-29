import { Col, Image, Row, Typography } from 'antd'
import WheelTimeLine from './wheelTimeLine'

import bgTimeline from 'static/images/extra/bg-timeline.png'

const TimeLine = () => {
  return (
    <Row
      gutter={[24, 24]}
      justify="center"
      style={{ paddingTop: 256, paddingBottom: 256 }}
      className="bg-timeline-gradient"
    >
      <Col>
        <Typography.Title level={2} className="text-title">
          Timeline
        </Typography.Title>
      </Col>
      <Col span={24}>
        <WheelTimeLine />
      </Col>
      <div className="img-timeline">
        <Image src={bgTimeline} preview={false} />
      </div>
    </Row>
  )
}

export default TimeLine
