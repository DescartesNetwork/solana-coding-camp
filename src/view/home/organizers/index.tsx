import { useMemo } from 'react'

import { Col, Image, Row, Typography } from 'antd'
import InfiniteSwiper from 'components/infinteSwiper'
import MaxWidthLayout from 'components/maxWidthLayout'
import Partner from './partner'
import Ranking from './ranking'
import Register from './register'
import useWidth from 'hooks/useWidth'

import organizeBg from 'static/images/extra/organizen-partner.png'
import bgTimeline from 'static/images/extra/bg-timeline.png'

const IMAGE_ID = [
  'https://drive.google.com/uc?export=view&id=1eOkAXqt_cEddhg51oF0t0L0o7l2dEAFn',
  'https://drive.google.com/uc?export=view&id=1XhaLBDB_X-k7mHBKKzc-vs8iWjzEUV4W',
  'https://drive.google.com/uc?export=view&id=1b-98WjbhHf4mNwbOu_M2gnzl7mW_CM6P',
  'https://drive.google.com/uc?export=view&id=1f3K_fd6YPpzGNGAP-trc-rEAs5N2ZnmP',
  'https://drive.google.com/uc?export=view&id=1Mh0HB7lG1FpkGnRDEmiEMHtLydmRYo2k',
  'https://drive.google.com/uc?export=view&id=16uDjMfz92AhgfcIvYS_4OngOgJsdnAIo',
  'https://drive.google.com/uc?export=view&id=1h_-VNUTc0QgfxcCqqTgYO5ZrcE6JdGtY',
  'https://drive.google.com/uc?export=view&id=1oeuNo12KiidE-z4kzsUwieWkmhiuVYMo',
  'https://drive.google.com/uc?export=view&id=19B67cs7Y-zwNboOI1Wgc6e9CkkFdVZFV',
  'https://drive.google.com/uc?export=view&id=1oSTkJYIdXZSN_l2olTmowm9I5UBxGiR3',
  'https://drive.google.com/uc?export=view&id=1Vh_VnaZtDt90LpzcDQ4ECFGKA44IGNpD',
  'https://drive.google.com/uc?export=view&id=1k4gGfGFNfqRI7uWu1jzdxfkJQvxJeIND',
  'https://drive.google.com/uc?export=view&id=172zOOjOxbwO-tQrxtz1xva1GB8_M2M1X',
  // 'https://drive.google.com/uc?export=view&id=',
  // 'https://drive.google.com/uc?export=view&id=',
  // 'https://drive.google.com/uc?export=view&id=',
  // 'https://drive.google.com/uc?export=view&id=',
  // 'https://drive.google.com/uc?export=view&id=',
  // 'https://drive.google.com/uc?export=view&id=',
  // 'https://drive.google.com/uc?export=view&id=',
  // 'https://drive.google.com/uc?export=view&id=',
  // 'https://drive.google.com/uc?export=view&id=',
  // 'https://drive.google.com/uc?export=view&id=',
  // 'https://drive.google.com/uc?export=view&id=',
  // 'https://drive.google.com/uc?export=view&id=',
  // 'https://drive.google.com/uc?export=view&id=',
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
      <Col span={24} className="expand-bg-partner">
        <InfiniteSwiper perViews={perview} data={IMAGE_ID} />
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
