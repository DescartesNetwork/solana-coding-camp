import React from 'react'

import { Col, Image, Row, Typography } from 'antd'
import ListPartners from './listPartners'

import imgBgMedia from 'static/images/extra/bg-speaker.png'

const MediaPartners = () => {
  return (
    <Row
      gutter={[0, 72]}
      style={{ paddingBottom: 256 }}
      justify="center"
      className="bg-media-gradient"
    >
      <Col>
        <Typography.Title level={2} className="text-title">
          Media Partners
        </Typography.Title>
      </Col>
      <Col span={24}>
        <ListPartners />
      </Col>
      <div className="img-media-bg">
        <Image src={imgBgMedia} preview={false} />
      </div>
    </Row>
  )
}

export default MediaPartners
