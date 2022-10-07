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

const Home = () => {
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
