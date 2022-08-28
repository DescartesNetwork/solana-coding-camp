import { Card, Col, Row, Typography } from 'antd'
import IonIcon from 'components/ionicon'

const DEFAULT_SIZE = 420

type CardTimeLineProps = { width?: number; height?: number; active?: boolean }
const CardTimeLine = ({
  height = DEFAULT_SIZE,
  width = DEFAULT_SIZE,
  active = false,
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
          <Typography.Text style={{ fontSize: 72 }}>
            <IonIcon name="cog-outline" />
          </Typography.Text>
        </Col>
        <Col>
          <Typography.Title
            level={1}
            className={active ? 'text-dark' : 'text-gradient'}
          >
            Registration form
          </Typography.Title>
        </Col>
        <Col>
          <Typography.Text
            className={active ? 'text-dark' : ''}
            style={{ fontSize: 26 }}
          >
            22 Nov - 23 Nov
          </Typography.Text>
        </Col>
      </Row>
    </Card>
  )
}

export default CardTimeLine
