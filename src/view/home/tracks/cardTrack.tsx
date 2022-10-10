import { Card, Col, Image, Row, Space, Typography } from 'antd'
import SpaceBetween from 'components/spaceBetween'
import PriceTitle from './priceTitle'
import IconSax from '@sentre/antd-iconsax'

const COLOR_BASE = [
  [118, 79, 255],
  [102, 204, 51],
]
const TRACKS_TITLE: Record<string, string> = {
  StatusUp: 'DeFi',
  Game: 'GameFi',
}

export type TrackData = {
  logo: string
  value1st: string
  value2nd: string
  key: string
}
export type CardTrackProps = { data: TrackData; index?: number }
const CardTrack = ({ data, index = 0 }: CardTrackProps) => {
  return (
    <Card
      bordered={false}
      style={{ overflow: 'hidden' }}
      bodyStyle={{ padding: 56, position: 'relative' }}
    >
      <Row gutter={[24, 24]} justify="center">
        <Col>
          <Space direction="vertical" style={{ textAlign: 'center' }}>
            <IconSax
              name={data.key}
              style={{
                fontSize: 32,
                color: `rgba(${COLOR_BASE[index].join(',')})`,
              }}
              variant="Outline"
            />
            <Typography.Title level={1} style={{ fontSize: 44 }}>
              {TRACKS_TITLE[data.key]}
            </Typography.Title>
          </Space>
        </Col>
        <Col span={24} /> {/* safe space */}
        <Col span={24}>
          <SpaceBetween
            floatContent={
              <PriceTitle color={`rgba(${COLOR_BASE[index].join(',')})`}>
                {data.value1st}
              </PriceTitle>
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
              Runner-up
            </Typography.Text>
          </SpaceBetween>
        </Col>
        <Col>
          <Space align="center">
            <Typography.Text type="secondary">Sponsored by</Typography.Text>
            <Image src={data.logo} preview={false} />
          </Space>
        </Col>
      </Row>
      <div
        className="card-track-shadow"
        style={{
          position: 'absolute',
          width: '70%',
          height: '50%',
          background: `radial-gradient(circle, rgba(${COLOR_BASE[index].join(
            ',',
          )},0.4) 0%, rgba(${COLOR_BASE[index].join(',')}, 0.12) 100%)`,
          bottom: '-25%',
          right: 0,
          left: 0,
          margin: 'auto',
          borderRadius: '100%',
          filter: 'blur(40px)',
          boxShadow: `0 0 90px  rgba(${COLOR_BASE[index].join(',')},0.5)`,
        }}
      />
    </Card>
  )
}

export default CardTrack
