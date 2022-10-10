import { CSSProperties, useMemo } from 'react'
import moment from 'moment'

import { Card, Col, Row, Space, Typography } from 'antd'
import IonIcon from 'components/IonIcon'
import { TitleProps } from 'antd/lib/typography/Title'

import useWidth from 'hooks/useWidth'

const DEFAULT_SIZE = 420
const enum CardDirection {
  horizontal = 'horizontal',
  vertical = 'vertical',
}

type CardTimeLineProps = {
  icon?: string
  title?: string
  width?: CSSProperties['width']
  height?: CSSProperties['height']
  active?: boolean
  size?: number
  borderRadius?: CSSProperties['borderRadius']
  levelSize?: TitleProps['level']
  labelSize?: number
  direction?: 'horizontal' | 'vertical'
  padding?: number
  fromDate?: string
  toDate?: string
}
const CardTimeLine = ({
  height = DEFAULT_SIZE,
  width = DEFAULT_SIZE,
  active = false,
  icon = '',
  title = '',
  size = 72,
  labelSize = 26,
  levelSize = 1,
  borderRadius = '50%',
  direction = CardDirection.horizontal,
  padding = 2,
  fromDate,
  toDate,
}: CardTimeLineProps) => {
  const formatDate = (date: string) => {
    return moment(new Date(date)).format('DD MMM')
  }
  const screen = useWidth()
  const isMobile = screen < 920

  const date = useMemo(() => {
    if (!fromDate) return
    if (!toDate) return formatDate(fromDate)
    return `${formatDate(fromDate)} - ${formatDate(toDate)}`
  }, [fromDate, toDate])

  // const defaultActive = useMemo(() => {
  //   const now = new Date()
  //   return moment(now).isBetween(fromDate, toDate)
  // }, [fromDate, toDate])

  const background = isMobile ? '#000' : '#26262b'

  const activeBg = active ? { background: 'transparent' } : { background }

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
