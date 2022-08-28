import { Col, Row, Typography } from 'antd'
import InfiniteSwiper from 'components/infinteSwiper'
import MaxWidthLayout from 'components/maxWidthLayout'
import { GALLERYS } from 'constant'
import Partner from './partner'
import Ranking from './ranking'
import Register from './register'

const Organizers = () => {
  return (
    <Row gutter={[0, 256]} style={{ paddingBottom: 256 }}>
      <Col span={24}>
        <MaxWidthLayout style={{ overflow: 'hidden' }}>
          <Row gutter={[24, 72]} justify="center">
            <Col>
              <Typography.Title level={2} className="text-title">
                Organizers
              </Typography.Title>
            </Col>
            <Col span={24}>
              <Partner />
            </Col>
            <Col span={24} style={{ height: 112 }} />
            <Col span={24}>
              <Register />
            </Col>
          </Row>
        </MaxWidthLayout>
      </Col>
      <Col span={24} />
      <Col span={24}>
        <InfiniteSwiper data={GALLERYS} />
      </Col>
      <Col span={24}>
        <MaxWidthLayout>
          <Ranking />
        </MaxWidthLayout>
      </Col>
    </Row>
  )
}

export default Organizers
