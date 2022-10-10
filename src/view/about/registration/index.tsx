import { Widget } from '@typeform/embed-react'

import { Col, Row, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'

export const FORM_ID = 'hyibBZhP'

const Registration = () => {
  return (
    <MaxWidthLayout>
      <Row gutter={[24, 24]} justify="center">
        <Col>
          <Typography.Title level={2} className="text-title">
            Registration form
          </Typography.Title>
        </Col>
        <Col span={24} id={FORM_ID}>
          <Widget id={FORM_ID} height={644} />
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}

export default Registration
