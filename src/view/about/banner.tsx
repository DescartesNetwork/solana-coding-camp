import { Col, Image, Row, Space, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import RegisterNow from 'components/registerNow'
import ViewAgenda from 'components/viewAgenda'

import { BTN_REGISTER_ID } from 'constant'
import useLanguages from 'hooks/useLanguages'
import { useWidth } from 'hooks/useUI'

import AboutBanner from 'static/images/extra/about-banner.png'

const Banner = () => {
  const system = useLanguages()
  const width = useWidth()
  const unDesktop = width < 1200
  const paddingTop = width > 1200 ? 202 : 24
  const maxWidth = unDesktop ? '70vw' : undefined

  return (
    <MaxWidthLayout className="banner-about-gradient-bg">
      <Row gutter={[24, 24]}>
        <Col
          xs={{ order: 2, span: 24 }}
          xl={{ order: 2, span: 13 }}
          style={{ paddingTop }}
        >
          <Space direction="vertical" size={32}>
            <Typography.Title
              className="text-gradient"
              level={1}
              style={{ fontSize: 96 }}
            >
              {system.about.title}
            </Typography.Title>
            <Space>
              <RegisterNow id={BTN_REGISTER_ID} />
              <ViewAgenda />
            </Space>
          </Space>
        </Col>
        <Col
          xs={{ order: 1, span: 24 }}
          xl={{ order: 2, span: 11 }}
          style={{ textAlign: 'center', paddingTop: 140 }}
        >
          <Image src={AboutBanner} style={{ maxWidth }} preview={false} />
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}

export default Banner
