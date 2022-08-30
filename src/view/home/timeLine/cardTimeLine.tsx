import { Card, Col, Row, Space, Typography } from 'antd'
import { TitleProps } from 'antd/lib/typography/Title'
import IonIcon from 'components/ionicon'
import { CSSProperties } from 'react'

const DEFAULT_SIZE = 420
const enum CardDirection {
  horizontal = 'horizontal',
  vertical = 'vertical',
}

type CardTimeLineProps = {
  icon?: string
  title?: string
  date?: string
  width?: CSSProperties['width']
  height?: CSSProperties['height']
  active?: boolean
  size?: number
  borderRadius?: CSSProperties['borderRadius']
  levelSize?: TitleProps['level']
  labelSize?: number
  direction?: 'horizontal' | 'vertical'
  padding?: number
}
const CardTimeLine = ({
  height = DEFAULT_SIZE,
  width = DEFAULT_SIZE,
  active = false,
  date = '',
  icon = '',
  title = '',
  size = 72,
  labelSize = 26,
  levelSize = 1,
  borderRadius = '50%',
  direction = CardDirection.horizontal,
  padding = 2,
}: CardTimeLineProps) => {
  const activeBg = active
    ? { background: 'transparent' }
    : { background: '#000' }

  const flexFlow =
    direction === CardDirection.horizontal
      ? { flexFlow: 'column', justifyContent: 'center' }
      : { flexFlow: 'row wrap', justifyContent: 'start' }

  const textAlign = direction === CardDirection.horizontal ? 'center' : 'start'

  return (
    <Card
      style={{
        display: 'flex',
        alignItems: 'center',
        borderRadius,
        width,
        height,
        background:
          'linear-gradient(260.05deg, #5A5FE0 9.9%, #9D96F8 31.77%, #B9F8FD 100%)',
        overflow: 'hidden',
      }}
      bodyStyle={{
        width: '100%',
        height: '100%',
        padding,
        borderRadius,
        ...activeBg,
      }}
      bordered={!active}
    >
      <Row
        gutter={[24, 24]}
        style={{ ...flexFlow, height: '100%' }}
        align="middle"
      >
        <Col>
          <Typography.Text
            className={active ? 'text-dark' : ''}
            style={{ fontSize: size, fill: '#000' }}
          >
            <IonIcon src={icon} />
          </Typography.Text>
        </Col>
        <Col>
          <Space style={{ textAlign }} direction="vertical" size={8}>
            <Typography.Title
              level={levelSize}
              className={active ? 'text-dark' : 'text-gradient'}
            >
              {title}
            </Typography.Title>
            <Typography.Text
              className={active ? 'text-dark' : ''}
              style={{ fontSize: labelSize }}
            >
              {date}
            </Typography.Text>
          </Space>
        </Col>
      </Row>
    </Card>
  )
}

export default CardTimeLine
