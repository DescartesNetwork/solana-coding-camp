import numbro from 'numbro'

import { Card, Col, Image, Row, Space, Typography } from 'antd'

import useWidth from 'hooks/useWidth'

import imgOne from 'static/images/ranking/one.svg'
import imgTwo from 'static/images/ranking/two.svg'
import imgThree from 'static/images/ranking/three.svg'
import imgFour from 'static/images/ranking/four.svg'
import glass1 from 'static/images/ranking/glass-1.png'
import glass2 from 'static/images/ranking/glass-2.png'
import glass3 from 'static/images/ranking/glass-3.png'
import glass4 from 'static/images/ranking/glass-4.png'

const RANKINGS = [15000, 10000, 5000, 1000]
const RANKING_BG: Record<
  number,
  { left: string; right: string; color: number[]; label: string }
> = {
  15000: {
    left: imgOne,
    right: glass1,
    color: [20, 241, 149],
    label: '1st Price',
  },
  10000: {
    left: imgTwo,
    right: glass2,
    color: [153, 69, 255],
    label: '2nd Price',
  },
  5000: {
    left: imgThree,
    right: glass3,
    color: [128, 236, 255],
    label: '3rd Price',
  },
  1000: {
    left: imgFour,
    right: glass4,
    color: [218, 97, 184],
    label: 'Individual Prize',
  },
}

const FLOAT_RIGHT = { width: '100%', textAlign: 'end' }
const MOBILE_NUMBER = {
  transform: 'scale(0.7)',
  transformOrigin: 'left bottom',
}

type CardRankingProps = {
  value: number
  index?: number
}
const CardRanking = ({ value = 0, index = 1 }: CardRankingProps) => {
  const { left: imgLeft, right: imgRight, color, label } = RANKING_BG[value]
  const width = useWidth()

  const imgStyle = width < 575 ? FLOAT_RIGHT : {}
  const numberStyle = width < 575 ? MOBILE_NUMBER : {}

  return (
    <Card
      style={{ background: '#26262B', overflow: 'hidden', borderRadius: 24 }}
      bodyStyle={{ padding: 0 }}
      bordered={false}
    >
      <Row justify="space-between" align="bottom">
        <Col xs={{ order: 2 }} sm={{ order: 1 }}>
          <div
            style={{
              ...numberStyle,
              position: 'absolute',
              bottom: -10,
              left: 0,
            }}
          >
            <Image src={imgLeft} alt="num" preview={false} />
          </div>
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
              {value === 1000 && (
                <Typography.Text>
                  for{' '}
                  <span style={{ color: `rgb(${color.join(',')})` }}>
                    10 Developers
                  </span>
                </Typography.Text>
              )}
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
  return (
    <Row gutter={[64, 64]}>
      {RANKINGS.map((ranking, idx) => (
        <Col
          xs={{ span: 24, offset: 0 }}
          xl={{ span: 18, offset: idx % 2 ? 6 : 0 }}
          key={idx}
        >
          <CardRanking value={ranking} index={idx + 1} />
        </Col>
      ))}
    </Row>
  )
}

export default Ranking
