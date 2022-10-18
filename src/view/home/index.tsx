import { Col, Row } from 'antd'
import Banner from './banner'
import CountDown from './countDown'
import MediaPartners from './mediaPartner'
import Organizers from './organizers'
import Speakers from './speakers'
import TimeLine from './timeLine'
import Tracks from './tracks'
import Sponsor from './sponsor'

import { useGap } from 'hooks/useUI'

const Home = () => {
  const gap = useGap()

  return (
    <Row gutter={[0, gap]}>
      <Col span={24}>
        <Row>
          <Col span={24}>
            <Banner />
          </Col>
          <Col span={24}>
            <CountDown />
          </Col>
        </Row>
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
        <Sponsor />
      </Col>
      <Col span={24}>
        <Speakers />
      </Col>
      <Col span={24}>
        <MediaPartners />
      </Col>
    </Row>
  )
}

export default Home
