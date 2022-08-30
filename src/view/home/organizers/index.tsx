import { useMemo } from 'react'

import { Col, Image, Row, Typography } from 'antd'
import InfiniteSwiper from 'components/infinteSwiper'
import MaxWidthLayout from 'components/maxWidthLayout'
import { GALLERYS } from 'constant'
import Partner from './partner'
import Ranking from './ranking'
import Register from './register'
import useWidth from 'hooks/useWidth'

import organizeBg from 'static/images/extra/organizen-partner.png'
import bgTimeline from 'static/images/extra/bg-timeline.png'

const Organizers = () => {
  const width = useWidth()

  const spacing = width < 1200 ? 126 : 256

  const perview = useMemo(() => {
    let result = 1
    if (width > 575) result = 2
    if (width > 992) result = 3
    if (width > 1200) result = 4
    return result
  }, [width])

  return (
    <Row gutter={[0, 256]} style={{ paddingBottom: spacing }}>
      <Col span={24} className="bg-timeline-gradient">
        <MaxWidthLayout style={{ overflow: 'hidden' }}>
          <Row gutter={[24, 72]} justify="center">
            <Col>
              <Typography.Title level={2} className="text-title">
                Organizers
              </Typography.Title>
            </Col>
            <Col span={24}>
              <Partner />
            </Col>
            <Col span={24} style={{ height: 112 }} />
            <Col span={24}>
              <Register />
            </Col>
          </Row>
        </MaxWidthLayout>

        <div className="img-timeline">
          <Image src={bgTimeline} preview={false} />
        </div>
      </Col>
      <Col span={24} />
      <Col span={24} className="expand-bg-partner">
        <InfiniteSwiper perViews={perview} data={GALLERYS} />
        <div className="bg-expand">
          <Image src={organizeBg} preview={false} />
        </div>
      </Col>
      <Col span={24}>
        <MaxWidthLayout>
          <Ranking />
        </MaxWidthLayout>
      </Col>
    </Row>
  )
}

export default Organizers
