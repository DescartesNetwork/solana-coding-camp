import { Widget } from '@typeform/embed-react'

import { Col, Row, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'

import configs from 'configs'

const {
  typeform: { registration },
} = configs

const Registration = () => {
  return (
    <MaxWidthLayout>
      <Row gutter={[24, 24]} justify="center">
        <Col>
          <Typography.Title level={2} className="text-title">
            Registration form
          </Typography.Title>
        </Col>
        <Col id={registration} span={24}>
          <Widget id={registration} height={644} />
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}

export default Registration
