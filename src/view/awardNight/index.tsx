import { useMemo } from 'react'

import { Col, Row } from 'antd'
import InfiniteSwiper from 'components/infinteSwiper'
import Banner from './banner'
import AwardNightContainer from './container'

import { useWidth } from 'hooks/useUI'
import { PATH_GOOGLE_VIEW_IMG } from 'constant'
import { IMAGE_ID } from 'view/home/organizers'

import './index.less'

const AwardNight = () => {
  const width = useWidth()

  const marginTop = width < 1200 ? 36 : 90
  const perview = useMemo(() => {
    let result = 1
    if (width > 575) result = 2
    if (width > 992) result = 3
    if (width > 1200) result = 4
    return result
  }, [width])

  return (
    <Row>
      <Col span={24}>
        <Banner />
      </Col>
      <Col span={24}>
        <AwardNightContainer />
      </Col>

      <Col span={24} style={{ marginTop }}>
        <InfiniteSwiper
          perViews={perview}
          data={IMAGE_ID}
          rootPath={PATH_GOOGLE_VIEW_IMG}
          speed={5000}
          loop
        />
      </Col>
    </Row>
  )
}

export default AwardNight
