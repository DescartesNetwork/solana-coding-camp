import { Widget } from '@typeform/embed-react'
import { Col, Row, Typography } from 'antd'

import MaxWidthLayout from 'components/maxWidthLayout'

import { TYPE_FORM_ID } from 'constant'

const FormRegis = () => {
  return (
    <MaxWidthLayout>
      <Row gutter={[24, 24]} justify="center">
        <Col>
          <Typography.Title level={2} className="text-title">
            Registration form
          </Typography.Title>
        </Col>
        <Col span={24} style={{ minHeight: 545 }}>
          <Widget id={TYPE_FORM_ID} style={{ width: '100%', height: '100%' }} />
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}

export default FormRegis
