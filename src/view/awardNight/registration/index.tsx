import { Widget } from '@typeform/embed-react'

import { Col, Row, Typography } from 'antd'

import configs from 'configs'

const {
  typeform: { registration },
} = configs

const RegistrationWN = () => {
  return (
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
  )
}

export default RegistrationWN
