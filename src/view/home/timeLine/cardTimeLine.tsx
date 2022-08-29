import { Card, Col, Row, Typography } from 'antd'
import IonIcon from 'components/ionicon'

const DEFAULT_SIZE = 420

type CardTimeLineProps = {
  icon?: string
  title?: string
  date?: string
  width?: number
  height?: number
  active?: boolean
  size?: number
}
const CardTimeLine = ({
  height = DEFAULT_SIZE,
  width = DEFAULT_SIZE,
  active = false,
  date = '',
  icon = '',
  title = '',
  size = 72,
}: CardTimeLineProps) => {
  const activeBg = active
    ? { background: 'transparent' }
    : { background: '#000' }

  return (
    <Card
      style={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: '50%',
        width,
        height,
        background:
          'linear-gradient(260.05deg, #5A5FE0 9.9%, #9D96F8 31.77%, #B9F8FD 100%)',
        overflow: 'hidden',
      }}
      bodyStyle={{
        width: '100%',
        height: '100%',
        padding: 2,
        borderRadius: '50%',
        ...activeBg,
      }}
      bordered={!active}
    >
      <Row
        gutter={[24, 24]}
        style={{ flexFlow: 'column', height: '100%' }}
        justify="center"
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
          <Typography.Title
            level={1}
            className={active ? 'text-dark' : 'text-gradient'}
          >
            {title}
          </Typography.Title>
        </Col>
        <Col>
          <Typography.Text
            className={active ? 'text-dark' : ''}
            style={{ fontSize: 26 }}
          >
            {date}
          </Typography.Text>
        </Col>
      </Row>
    </Card>
  )
}

export default CardTimeLine
