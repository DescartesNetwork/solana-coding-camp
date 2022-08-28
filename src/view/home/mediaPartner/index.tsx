import React from 'react'

import { Col, Row, Typography } from 'antd'
import ListPartners from './listPartners'

const MediaPartners = () => {
  return (
    <Row gutter={[0, 72]} style={{ paddingBottom: 256 }} justify="center">
      <Col>
        <Typography.Title level={2} className="text-title">
          Media Partners
        </Typography.Title>
      </Col>
      <Col span={24}>
        <ListPartners />
      </Col>
    </Row>
  )
}

export default MediaPartners
