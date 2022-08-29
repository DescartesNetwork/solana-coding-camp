import { Button, Col, Image, Row, Space, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'

import solMap from 'static/images/extra/map.svg'

const Banner = () => {
  return (
    <MaxWidthLayout className="banner-gradient-bg">
      <Row gutter={[24, 24]}>
        <Col xs={24} lg={13} style={{ paddingTop: 120, paddingBottom: 120 }}>
          <Space direction="vertical" size={32}>
            <Typography.Title
              className="text-gradient"
              level={1}
              style={{ fontSize: 96 }}
            >
              Vietnam Web3 Coding Camp
            </Typography.Title>
            <Space>
              <Button size="large" type="primary">
                REGISTER NOW
              </Button>
              <Button size="large">CURRICULUM</Button>
            </Space>
          </Space>
        </Col>
        <Col xs={24} lg={11} style={{ textAlign: 'center' }}>
          <Image src={solMap} alt="map" preview={false} />
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}

export default Banner
