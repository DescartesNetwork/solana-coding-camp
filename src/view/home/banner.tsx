import { Button, Col, Image, Row, Space, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import useWidth from 'hooks/useWidth'

import solMap from 'static/images/extra/map.svg'

const Banner = () => {
  const width = useWidth()
  const unDesktop = width < 1200
  const marginTop = unDesktop ? -280 : undefined
  console.log(width, unDesktop)

  return (
    <MaxWidthLayout className="banner-gradient-bg">
      <Row gutter={[24, 24]}>
        <Col
          xs={{ order: 2, span: 24 }}
          xl={{ order: 2, span: 13 }}
          style={{ paddingTop: 202, paddingBottom: 120, marginTop }}
        >
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
        <Col
          xs={{ order: 1, span: 24 }}
          xl={{ order: 2, span: 11 }}
          style={{ textAlign: 'center' }}
        >
          <Image src={solMap} alt="map" preview={false} />
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}

export default Banner
