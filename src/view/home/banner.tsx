import { useHistory } from 'react-router-dom'

import { Button, Col, Row, Space, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'

import { useWidth } from 'hooks/useUI'
import useLanguages from 'hooks/useLanguages'

import { FORM_ID } from 'view/about/registration'
import { AGENDA_ID } from 'view/about/agenda'
import Map from 'static/images/extra/map-svg'

const Banner = () => {
  const { banner, CTA } = useLanguages()
  const history = useHistory()
  const width = useWidth()
  const unDesktop = width < 1200
  const marginTop = unDesktop ? -280 : undefined
  const maxHeight = unDesktop ? '60vh' : undefined

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
                onClick={() => history.push(`/about/#${FORM_ID}`)}
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
