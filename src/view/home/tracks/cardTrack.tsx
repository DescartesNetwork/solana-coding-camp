import { Card, Col, Image, Row, Space, Typography } from 'antd'
import SpaceBetween from 'components/spaceBetween'
import PriceTitle from './priceTitle'

export type TrackData = {
  logo: string
  value1st: string
  value2nd: string
}
export type CardTrackProps = { data: TrackData; index?: number }
const CardTrack = ({ data, index = 0 }: CardTrackProps) => {
  return (
    <Card bordered={false} bodyStyle={{ padding: 56 }}>
      <Row gutter={[24, 24]} justify="center">
        <Col>
          <Space direction="vertical" style={{ textAlign: 'center' }}>
            <Typography.Title level={1} style={{ fontSize: 44 }}>
              DeFi
            </Typography.Title>
            <Space align="center">
              <Typography.Text type="secondary">Sponsored by</Typography.Text>
              <Image src={data.logo} preview={false} />
            </Space>
          </Space>
        </Col>
        <Col span={24} /> {/* safe space */}
        <Col span={24}>
          <SpaceBetween
            floatContent={
              <PriceTitle index={index}>{data.value1st}</PriceTitle>
            }
          >
            <Typography.Text style={{ fontSize: 32 }}>
              1st Place
            </Typography.Text>
          </SpaceBetween>
        </Col>
        <Col span={24}>
          <SpaceBetween
            floatContent={
              <Typography.Title level={1} style={{ fontSize: 44 }}>
                {data.value2nd}
              </Typography.Title>
            }
          >
            <Typography.Text style={{ fontSize: 32 }}>
              2nd Runner-up
            </Typography.Text>
          </SpaceBetween>
        </Col>
      </Row>
    </Card>
  )
}

export default CardTrack
