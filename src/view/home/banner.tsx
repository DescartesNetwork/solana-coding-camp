import { Col, Row, Space, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import RegisterNow from 'components/registerNow'
import ViewAgenda from 'components/viewAgenda'

import { useWidth } from 'hooks/useUI'
import useLanguages from 'hooks/useLanguages'
import { BTN_REGISTER_ID } from 'constant'

import Map from 'static/images/extra/map-svg'

const Banner = () => {
  const { banner } = useLanguages()
  const width = useWidth()
  const isMobile = width < 1200
  const marginTop = isMobile ? -280 : undefined
  const maxHeight = isMobile ? '60vh' : undefined

  return (
    <MaxWidthLayout className="banner-gradient-bg">
      <Row gutter={[24, 24]}>
        <Col
          xs={{ order: 2, span: 24 }}
          xl={{ order: 2, span: 13 }}
          style={{ paddingTop: 150, paddingBottom: 24, marginTop }}
        >
          <Space direction="vertical" size={32}>
            <Typography.Title
              className="text-gradient"
              level={1}
              style={{ fontSize: 96 }}
            >
              {banner.title}
            </Typography.Title>
            <Typography.Text style={{ fontSize: 20 }}>
              {banner.subtitle}
            </Typography.Text>
            <Space className="wrap-cta-btn">
              <RegisterNow id={BTN_REGISTER_ID} />
              <ViewAgenda />
            </Space>
          </Space>
        </Col>
        <Col
          xs={{ order: 1, span: 24 }}
          xl={{ order: 2, span: 11 }}
          style={{ textAlign: 'center' }}
        >
          <Map style={{ maxHeight }} />
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}

export default Banner
