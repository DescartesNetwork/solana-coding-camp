import { useHistory } from 'react-router-dom'

import { Button, Col, Row, Space, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'

import configs from 'configs'
import { AGENDA_ID } from 'view/about/agenda'
import { useWidth } from 'hooks/useUI'
import useLanguages from 'hooks/useLanguages'

import Map from 'static/images/extra/map-svg'
import './banner.less'

const {
  typeform: { registration },
} = configs

const Banner = () => {
  const { banner, CTA } = useLanguages()
  const history = useHistory()
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
          style={{ paddingTop: 202, paddingBottom: 24, marginTop }}
        >
          <Space direction="vertical" size={32}>
            <Typography.Title
              className="text-gradient"
              level={1}
              style={{ fontSize: 96 }}
            >
              {banner.title}
            </Typography.Title>
            <Space>
              <Button
                size="large"
                type="primary"
                onClick={() => history.push(`/about/#${registration}`)}
              >
                {CTA.register}
              </Button>
              <Button
                size="large"
                onClick={() => history.push(`/about/#${AGENDA_ID}`)}
              >
                {CTA.curriculum}
              </Button>
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
