import { Col, Row, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import CardU20Tracks from './cardU20Tracks'

import useLanguages from 'hooks/useLanguages'

import './index.less'

const U20Tracks = () => {
  const system = useLanguages()

  return (
    <MaxWidthLayout>
      <Row gutter={[24, 24]} justify="center">
        <Col>
          <Typography.Title level={2} className="text-title">
            {system.u20tracks.title}
          </Typography.Title>
        </Col>
        <Col span={24} />
        <Col span={24}>
          <CardU20Tracks />
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}

export default U20Tracks
