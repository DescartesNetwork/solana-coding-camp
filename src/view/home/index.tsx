import { Col, Row } from 'antd'
import Banner from './banner'
import CountDown from './countDown'
import Footer from './footer'
import Header from './header'
import MediaPartners from './mediaPartner'
import Organizers from './organizers'
import Speakers from './speakers'
import TimeLine from './timeLine'

const Home = () => {
  return (
    <Row>
      <Col span={24}>
        <Header
          style={{ position: 'absolute', width: '100%', left: 0, zIndex: 9999 }}
        />
      </Col>
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
