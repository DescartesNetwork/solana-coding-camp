import { Card, Col, Image, Row, Space, Typography } from 'antd'
import SpaceBetween from 'components/spaceBetween'
import PriceTitle from './priceTitle'
import IconSax from '@sentre/antd-iconsax'
import useLanguages from 'hooks/useLanguages'

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
  const system = useLanguages()

  return (
    <Card
      bordered={false}
      style={{ overflow: 'hidden', height: '100%' }}
      bodyStyle={{ padding: 56, position: 'relative', height: '100%' }}
    >
      <Row
        gutter={[0, 40]}
        style={{ flexFlow: 'column', height: '100%' }}
        justify="space-between"
        align="middle"
      >
        <Col>
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
                  {system.prize1stPlace}
                </Typography.Text>
              </SpaceBetween>
            </Col>
            <Col span={24}>
              <SpaceBetween
                floatContent={
                  <Space direction="vertical" style={{ textAlign: 'right' }}>
                    <Typography.Title level={1} style={{ fontSize: 44 }}>
                      {data.value2nd}
                    </Typography.Title>
                    {data.key === 'StatusUp' && (
                      <Typography.Text
                        style={{ fontSize: 18 }}
                        type="secondary"
                      >
                        {system.for2Winners}
                      </Typography.Text>
                    )}
                  </Space>
                }
              >
                <Typography.Text style={{ fontSize: 32 }}>
                  {system.prizes2stRunner}
                </Typography.Text>
              </SpaceBetween>
            </Col>
          </Row>
        </Col>
        <Col>
          <Space align="center" size={16}>
            <Typography.Text type="secondary" style={{ fontSize: 18 }}>
              {system.tracks.sponsored}
            </Typography.Text>
            <Image style={{ minHeight: 56 }} src={data.logo} preview={false} />
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
