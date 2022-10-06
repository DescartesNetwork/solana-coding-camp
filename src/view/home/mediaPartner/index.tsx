import React from 'react'

import { Col, Image, Row, Typography } from 'antd'
import ListPartners from './listPartners'

import imgBgMedia from 'static/images/extra/bg-speaker.png'
import useWidth from 'hooks/useWidth'

import './index.less'

const MediaPartners = () => {
  const width = useWidth()
  const spacing = width < 1200 ? 126 : 256
  return (
    <Row
      gutter={[0, 72]}
      style={{ paddingBottom: spacing }}
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
