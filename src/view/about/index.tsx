import { Col, Row } from 'antd'
import Footer from 'view/footer'
import Header from 'view/header'
import SocialFixed from 'view/socialFixed'
import Banner from './banner'

import './index.less'

const About = () => {
  return (
    <Row>
      <Col span={24}>
        <Header />
      </Col>
      <SocialFixed />
      <Col span={24}>
        <Banner />
      </Col>

      <Col span={24}>
        <Footer />
      </Col>
    </Row>
  )
}

export default About
