import { Col, Row } from 'antd'
import Footer from 'view/footer'
import Header from 'view/header'
import SocialFixed from 'view/socialFixed'
import Banner from './banner'
import Partner from './partner'
import FAQ from './FAQ'
import Agenda from './agenda'

import useWidth from 'hooks/useWidth'

import './index.less'

const About = () => {
  const width = useWidth()
  const isDesktop = width > 1200
  const gap = isDesktop ? 256 : 128

  return (
    <Row gutter={[0, gap]}>
      <Col span={24}>
        <Row>
          <Col span={24}>
            <Header />
          </Col>
          <SocialFixed />
          <Col span={24}>
            <Banner />
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Partner />
      </Col>
      <Col span={24}>
        <Agenda />
      </Col>
      <Col span={24}>
        <FAQ />
      </Col>
      <Col span={24}>
        <Footer />
      </Col>
    </Row>
  )
}

export default About
