import { Col, Image, Row, Typography } from 'antd'
import { PopupButton } from '@typeform/embed-react'

import configs from 'configs'
import useLanguages from 'hooks/useLanguages'

import BANNER from 'static/images/project/banner.png'

const {
  typeform: { submission },
} = configs

const Banner = () => {
  const { project } = useLanguages()

  return (
    <Row gutter={[24, 24]}>
      <Col xs={{ order: 2, span: 24 }} md={{ order: 1, span: 12 }}>
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <Typography.Title
              className="text-gradient"
              level={1}
              style={{ fontSize: 72 }}
            >
              {project.title}
            </Typography.Title>
          </Col>
          <Col span={24}>{project.description}</Col>
          <Col span={24}>
            <PopupButton
              id={submission}
              className="ant-btn ant-btn-primary ant-btn-block"
            >
              <Typography.Title level={5} style={{ color: 'inherit' }}>
                {project.CTA}
              </Typography.Title>
            </PopupButton>
          </Col>
        </Row>
      </Col>
      <Col xs={{ order: 1, span: 24 }} md={{ order: 2, span: 12 }}>
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <Image src={BANNER} preview={false} />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Banner
