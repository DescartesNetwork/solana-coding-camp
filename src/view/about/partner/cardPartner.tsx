import { CSSProperties, ReactNode } from 'react'

import { Button, Card, Col, Image, Row, Space, Typography } from 'antd'
import IonIcon from 'components/IonIcon'

export type SocialData = { src: string; icon: string }
export type CardPartnerProps = {
  logo?: string
  children?: ReactNode
  socials?: SocialData[]
  imgStyle?: CSSProperties
  gap?: number
}
const CardPartner = ({
  children,
  logo = '',
  socials,
  imgStyle,
  gap = 42,
}: CardPartnerProps) => {
  return (
    <Card
      style={{ height: '100%' }}
      bodyStyle={{ padding: 32, height: '100%' }}
      bordered={false}
    >
      <Row
        gutter={[0, gap]}
        style={{ flexDirection: 'column', height: '100%' }}
        justify="space-between"
        align="middle"
      >
        <Col>
          <Row gutter={[0, gap]} justify="center">
            <Col style={{ minHeight: 50 }} className="logo-partner-img">
              <Image
                style={{ maxHeight: 50, objectFit: 'contain', ...imgStyle }}
                src={logo}
                preview={false}
              />
            </Col>
            <Col span={24} style={{ textAlign: 'center' }}>
              <Typography.Text>{children}</Typography.Text>
            </Col>
          </Row>
        </Col>
        <Col>
          {socials && (
            <Space size={8}>
              {socials.map((social) => (
                <Button
                  style={{ padding: 0, width: 'auto', height: 'auto' }}
                  type="text"
                  icon={<IonIcon name={social.icon} />}
                  onClick={() => window.open(social.src, '_blank')}
                  key={social.src}
                />
              ))}
            </Space>
          )}
        </Col>
      </Row>
    </Card>
  )
}

export default CardPartner
