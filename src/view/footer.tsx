import Brand from 'components/brand'
import MaxWidthLayout from 'components/maxWidthLayout'
import { Button, Col, Image, Row, Space, Typography } from 'antd'

import imgBg from 'static/images/extra/img-footer.png'
import useLanguages from 'hooks/useLanguages'

const LINK_JOIN_US = 'https://t.me/solanadevsvietnam'

const Footer = () => {
  const system = useLanguages()

  return (
    <MaxWidthLayout
      style={{
        background:
          ' linear-gradient(260.05deg, #5A5FE0 9.9%, #9D96F8 31.77%, #B9F8FD 100%)',
      }}
    >
      <Row gutter={[12, 12]} style={{ paddingTop: 64, paddingBottom: 64 }}>
        <Col span={24}>
          <Space direction="vertical" size={0}>
            <Typography.Title style={{ fontSize: 72 }} className="text-dark">
              {system.footers.title}
            </Typography.Title>
            <Typography.Text style={{ fontSize: 22 }} className="text-dark">
              {system.footers.label}
            </Typography.Text>
          </Space>
        </Col>
        <Col span={24} />
        <Col span={24}>
          <Button
            ghost
            style={{ minWidth: 100 }}
            size="small"
            onClick={() => window.open(LINK_JOIN_US, '_blank')}
          >
            {system.CTA.join}
          </Button>
        </Col>
        <Col span={24} style={{ height: 40 }} />
        <Col>
          <Brand dark />
        </Col>
        <div
          className="anima-bounce-3d"
          style={{ position: 'absolute', width: 117, top: -50, right: 0 }}
        >
          <Image src={imgBg} preview={false} />
        </div>
      </Row>
    </MaxWidthLayout>
  )
}

export default Footer
