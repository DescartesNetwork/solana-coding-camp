import { Col, Row, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'

const Partner = () => {
  return (
    <MaxWidthLayout>
      <Row gutter={[24, 24]} justify="center">
        <Col>
          <Typography.Title level={2} className="text-title">
            Tracks
          </Typography.Title>
        </Col>
        <Col span={24} />
      </Row>
    </MaxWidthLayout>
  )
}

export default Partner
