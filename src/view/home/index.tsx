import { Col, Row } from 'antd'
import Banner from './banner'
import CountDown from './countDown'
import Footer from 'view/footer'
import Header from 'view/header'
import MediaPartners from './mediaPartner'
import Organizers from './organizers'
import SocialFixed from '../socialFixed'
import Speakers from './speakers'
import TimeLine from './timeLine'
import Tracks from './tracks'

import useWidth from 'hooks/useWidth'

const Home = () => {
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
        <CountDown />
      </Col>
      <Col span={24}>
        <TimeLine />
      </Col>
      <Col span={24}>
        <Organizers />
      </Col>
      <Col span={24}>
        <Tracks />
      </Col>
      <Col span={24}>
        <Speakers />
      </Col>
      <Col span={24}>
        <MediaPartners />
      </Col>
      <Col span={24}>
        <Footer />
      </Col>
    </Row>
  )
}

export default Home
