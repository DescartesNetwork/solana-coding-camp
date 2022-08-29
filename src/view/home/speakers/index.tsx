import { Col, Image, Row, Space, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import { GALLERYS } from 'constant'
import Avatar from './avatar'

import imgBgSpeaker from 'static/images/extra/bg-ranking.png'

const Speakers = () => {
  return (
    <div className="bg-speaker-gradient">
      <MaxWidthLayout style={{ overflow: 'hidden', paddingBottom: 256 }}>
        <Row gutter={[24, 72]} justify="center">
          <Col>
            <Typography.Title level={2} className="text-title">
              Speakers & Judges
            </Typography.Title>
          </Col>
          <Col span={24}>
            <Row gutter={[64, 64]} justify="space-between">
              {GALLERYS.concat(GALLERYS).map((speaker, idx) => (
                <Col key={idx}>
                  <Space
                    size={24}
                    direction="vertical"
                    style={{ textAlign: 'center' }}
                  >
                    <Avatar src={speaker} center />
                    <Space
                      direction="vertical"
                      style={{ maxWidth: 180 }}
                      size={0}
                    >
                      <Typography.Title level={5}>Tu Phan</Typography.Title>
                      <Typography.Text
                        type="secondary"
                        style={{ fontWeight: 300 }}
                      >
                        CEO & Co-founder of Coin98 Finance
                      </Typography.Text>
                    </Space>
                  </Space>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </MaxWidthLayout>
      <div className="img-speaker-bg">
        <Image src={imgBgSpeaker} preview={false} />
      </div>
    </div>
  )
}

export default Speakers
