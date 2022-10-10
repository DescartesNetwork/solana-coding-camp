import numbro from 'numbro'

import { Card, Col, Image, Row, Space, Typography } from 'antd'

import useWidth from 'hooks/useWidth'

import imgOne from 'static/images/ranking/one.svg'
import imgTwo from 'static/images/ranking/two.svg'
import imgThree from 'static/images/ranking/three.svg'
import glass1 from 'static/images/ranking/glass-1.png'
import glass2 from 'static/images/ranking/glass-2.png'
import glass3 from 'static/images/ranking/glass-3.png'
import useLanguages from 'hooks/useLanguages'

const FLOAT_RIGHT = { width: '100%', textAlign: 'end' }

export type PrizeData = {
  left: string
  right: string
  color: number[]
  label: string
}
export type PrizeState = Record<string, PrizeData>

type CardRankingProps = {
  data: PrizeData
  index?: number
  value?: string
}
const CardRanking = ({ data, index = 1, value = '' }: CardRankingProps) => {
  const { right: imgRight, color, label } = data
  const width = useWidth()
  const imgStyle = width < 575 ? FLOAT_RIGHT : {}

  return (
    <Card
      style={{ background: '#26262B', overflow: 'hidden', borderRadius: 24 }}
      bodyStyle={{ padding: 0 }}
      bordered={false}
    >
      <Row justify="space-between" align="bottom">
        <Col xs={{ order: 2 }} sm={{ order: 1 }}>
          <Space
            direction="vertical"
            size={0}
            style={{ position: 'relative', zIndex: 9, padding: 32 }}
          >
            <Typography.Text style={{ fontSize: 32 }}>{label}</Typography.Text>
            <Space>
              <Typography.Title
                level={2}
                style={{ fontSize: 72, color: `rgb(${color.join(',')})` }}
              >
                {numbro(value).format('0,0.[00]$')}
              </Typography.Title>
            </Space>
          </Space>
        </Col>
        <Col
          xs={{ order: 1 }}
          sm={{ order: 2 }}
          style={{ ...imgStyle, height: '100%' }}
        >
          <Image
            className={`anima-bounce bounce-${index}`}
            style={{ maxWidth: 360 }}
            src={imgRight}
            alt="icon"
            preview={false}
          />
        </Col>
        <div
          style={{
            position: 'absolute',
            width: 400,
            height: 400,
            background: `radial-gradient(circle, rgba(${color.join(
              ',',
            )},0.4) 0%, rgba(${color.join(',')}, 0.1) 100%)`,
            top: -180,
            right: -100,
            borderRadius: '100%',
            filter: 'blur(4px)',
            boxShadow: `0 0 90px  rgba(${color.join(',')},0.5)`,
          }}
        />
      </Row>
    </Card>
  )
}

const Ranking = () => {
  const system = useLanguages()

  const rankingBg: PrizeState = {
    10000: {
      left: imgOne,
      right: glass1,
      color: [20, 241, 149],
      label: system.prize1st,
    },
    7000: {
      left: imgTwo,
      right: glass2,
      color: [153, 69, 255],
      label: system.prize2nd,
    },
    5000: {
      left: imgThree,
      right: glass3,
      color: [128, 236, 255],
      label: system.prize3rd,
    },
  }

  return (
    <Row gutter={[64, 64]}>
      {Object.keys(rankingBg)
        .sort((a, b) => Number(b) - Number(a))
        .map((key, idx) => {
          const data = rankingBg[key]
          return (
            <Col
              xs={{ span: 24, offset: 0 }}
              xl={{ span: 18, offset: idx % 2 ? 6 : 0 }}
              key={key}
            >
              <CardRanking data={data} value={key} index={idx + 1} />
            </Col>
          )
        })}
    </Row>
  )
}

export default Ranking
