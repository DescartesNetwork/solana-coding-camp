import { Col, Row } from 'antd'
import Banner from './banner'
import Containers from './containers'

import './index.less'

const Blogs = () => {
  return (
    <Row>
      <Col span={24}>
        <Banner />
      </Col>
      <Col span={24}>
        <Containers />
      </Col>
    </Row>
  )
}

export default Blogs
