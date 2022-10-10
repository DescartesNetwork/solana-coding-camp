import { Col, Row, Typography } from 'antd'
import MobileView from './mobileView'
import MaxWidthLayout from 'components/maxWidthLayout'
import Container from './container'

import useWidth from 'hooks/useWidth'

const TimeLine = () => {
  const width = useWidth()
  const isMobile = width < 992
  // const cardPadding = width < 1300 ? 24 : 100
  // const style = isMobile ? { background: 'transparent' } : {}

  return (
    <MaxWidthLayout>
      {/* <Card
        bordered={false}
        style={{ ...style, borderRadius: 36 }}
        bodyStyle={{ padding: cardPadding }}
      > */}
      <Row gutter={[0, 72]} justify="center">
        <Col>
          <Typography.Title level={2} className="text-title">
            Timeline
          </Typography.Title>
        </Col>
        <Col span={24}>{isMobile ? <MobileView /> : <Container />}</Col>
      </Row>
      {/* </Card> */}
    </MaxWidthLayout>
  )
}

export default TimeLine
