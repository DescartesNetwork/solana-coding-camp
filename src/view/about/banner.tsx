import { Col, Image, Row, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import useWidth from 'hooks/useWidth'
import AboutBanner from 'static/images/extra/about-banner.png'

const Banner = () => {
  const width = useWidth()
  const unDesktop = width < 1200
  const marginTop = unDesktop ? -280 : undefined
  const maxHeight = unDesktop ? '60vh' : undefined

  return (
    <MaxWidthLayout className="banner-about-gradient-bg">
      <Row gutter={[24, 24]}>
        <Col
          xs={{ order: 2, span: 24 }}
          xl={{ order: 2, span: 13 }}
          style={{ paddingTop: 202, paddingBottom: 120, marginTop }}
        >
          <Typography.Title
            className="text-gradient"
            level={1}
            style={{ fontSize: 96 }}
          >
            Build your own Web3 Kingdom
          </Typography.Title>
        </Col>
        <Col
          xs={{ order: 1, span: 24 }}
          xl={{ order: 2, span: 11 }}
          style={{ textAlign: 'center', paddingTop: 140, paddingBottom: 140 }}
        >
          <Image src={AboutBanner} style={{ maxHeight }} preview={false} />
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}

export default Banner
