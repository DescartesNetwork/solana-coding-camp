import { useMemo } from 'react'

import { Col, Image, Row, Typography } from 'antd'
import InfiniteSwiper from 'components/infinteSwiper'
import MaxWidthLayout from 'components/maxWidthLayout'
import Partner from './partner'
import Ranking from './ranking'
import Register from './register'

import useWidth from 'hooks/useWidth'
import { PATH_GOOGLE_VIEW_IMG } from 'constant'

import organizeBg from 'static/images/extra/organizen-partner.png'
import bgTimeline from 'static/images/extra/bg-timeline.png'

const IMAGE_ID = [
  '1iiz4FEjlD75Nf2s3H8XnN6ajA55mpRXv',
  '1XhaLBDB_X-k7mHBKKzc-vs8iWjzEUV4W',
  '1b-98WjbhHf4mNwbOu_M2gnzl7mW_CM6P',
  '1f3K_fd6YPpzGNGAP-trc-rEAs5N2ZnmP',
  '1Mh0HB7lG1FpkGnRDEmiEMHtLydmRYo2k',
  '16uDjMfz92AhgfcIvYS_4OngOgJsdnAIo',
  '1h_-VNUTc0QgfxcCqqTgYO5ZrcE6JdGtY',
  '1oeuNo12KiidE-z4kzsUwieWkmhiuVYMo',
  '19B67cs7Y-zwNboOI1Wgc6e9CkkFdVZFV',
  '1oSTkJYIdXZSN_l2olTmowm9I5UBxGiR3',
  '1Vh_VnaZtDt90LpzcDQ4ECFGKA44IGNpD',
  '1k4gGfGFNfqRI7uWu1jzdxfkJQvxJeIND',
  '172zOOjOxbwO-tQrxtz1xva1GB8_M2M1X',
]

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
    <Row gutter={[0, spacing]} style={{ paddingBottom: spacing }}>
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
      {/* Organizer gallerys */}
      <Col span={24} className="expand-bg-partner">
        <InfiniteSwiper
          perViews={perview}
          data={IMAGE_ID}
          rootPath={PATH_GOOGLE_VIEW_IMG}
          speed={40000}
          loop
        />
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
