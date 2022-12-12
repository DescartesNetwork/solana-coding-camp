import { Col, Row } from 'antd'
import Banner from './banner'
import AwardNightContainer from './container'

import './index.less'

const AwardNight = () => {
  return (
    <Row>
      <Col span={24}>
        <Banner />
      </Col>
      <Col span={24}>
        <AwardNightContainer />
      </Col>
    </Row>
  )
}

export default AwardNight
