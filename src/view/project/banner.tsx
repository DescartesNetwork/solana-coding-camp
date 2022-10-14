import { Button, Col, Image, Row, Typography } from 'antd'

import useLanguages from 'hooks/useLanguages'

import BANNER from 'static/images/project/banner.png'

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
            <Button type="primary" block>
              <Typography.Title level={5} style={{ color: 'inherit' }}>
                {project.CTA}
              </Typography.Title>
            </Button>
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
