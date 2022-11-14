import { useMemo } from 'react'

import { Col, Image, Row, Typography } from 'antd'
import InfiniteSwiper from 'components/infinteSwiper'
import MaxWidthLayout from 'components/maxWidthLayout'
import Partner from './partner'
import Ranking from './ranking'
import Register from './register'

import { useWidth } from 'hooks/useUI'
import { PATH_GOOGLE_VIEW_IMG } from 'constant'

import organizeBg from 'static/images/extra/organizen-partner.png'
import bgTimeline from 'static/images/extra/bg-timeline.png'
import useLanguages from 'hooks/useLanguages'

const IMAGE_ID = [
  '18pfR8x6yXO0EkXyCpBWBv3rUAnXKkGyQ',
  '1vPCS673oDuFX308htsOhOQ8Lv_tJmmuf',
  '1Svru1Ln-7bcvt6hflQ9FZ2iL_1NmaGDR',
  '1OUb9gdXfLtrX3hi3P7gOuPlIvaQzlrhU',
  '1iiz4FEjlD75Nf2s3H8XnN6ajA55mpRXv',
  '1QRv1537xquPylpaEzMvFkhN8GgXtP_Ye',
  '1DvfKJ2xN3QWjK1bvX7cseS4GBHisygA1',
  '1ZbEX7KzO47hh61XoBRwglrF3O4PcPa4M',
  '1wYNt1xwL_GdKA33jkpWIy8tqqRX8vrDg',
  '1Y6c_zqruhGLF6R74-DjuSew1KovBL2jJ',
  '1LZsZNc2G6n2rNKy3HkSpUw9wB72eq5t_',
  '116l2PbQWffQsI5gfePK1CzegC6qG8tWS',
  '10nM0OEofBN6nYNwdrcvzidKaUMCrIsX0',
  '1x9PbwlZ2SyDwomTSvC--JZROnWAF_H-K',
  '16aggqP9vWgR6oK7QujgnizAgjyXciIPp',
  '1KmXWcNXYh12T3jVs6PxxN0GWc_tsDcEM',
  '1WRlcIbV-l-Q322keA4Ap7MD4rMOCq31P',
  '1Q4F-Lau0CmUh81acD-oYZVwAIDquH0DB',
  '1u-voPBzmAsRTfUCAsdkntscMqXZ7BquC',
  '1zsLNR835AxgrIxDs4Au70EAdtx1yAHqu',
  '1Tgy2fC83Z2BaYiikaOZWi3hI_Z-OuR_l',
  '14hW57KMTthXjiPnn9NBLfCLpQkAlHtlH',
  '13TWfq-VB8cZhwe1WrOtdZTECX2MA4ogR',
]

const Organizers = () => {
  const width = useWidth()
  const system = useLanguages()

  const spacing = width < 1200 ? 126 : 256
  const perview = useMemo(() => {
    let result = 1
    if (width > 575) result = 2
    if (width > 992) result = 3
    if (width > 1200) result = 4
    return result
  }, [width])

  return (
    <Row gutter={[0, spacing]}>
      <Col span={24} className="bg-timeline-gradient">
        <MaxWidthLayout>
          <Row gutter={[24, 72]} justify="center">
            <Col>
              <Typography.Title level={2} className="text-title">
                {system.organizers.title}
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
          speed={5000}
          loop
        />
        <div className="bg-expand">
          <Image src={organizeBg} preview={false} />
        </div>
      </Col>
      <Col span={24}>
        <MaxWidthLayout>
          <Row gutter={[0, 24]} justify="center">
            <Col>
              <Typography.Title level={2} className="text-title">
                Main track
              </Typography.Title>
            </Col>
            <Col span={24}>
              <Ranking />
            </Col>
          </Row>
        </MaxWidthLayout>
      </Col>
    </Row>
  )
}

export default Organizers
