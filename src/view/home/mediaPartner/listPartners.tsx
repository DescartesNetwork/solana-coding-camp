import { useMemo } from 'react'

import { Col, Row } from 'antd'
import InfiniteSwiper from 'components/infinteSwiper'

import useWidth from 'hooks/useWidth'
import { PATH_GOOGLE_VIEW_IMG } from 'constant'

const MEDIA_PARTNER = [
  '1IRmQsmsfq5N-B-D0T01lLtiHBjWpLEHS', //zeta
  '194DZBJNKv-OTbSghxBRa782UNvv1ftsf', // solend
  '1Paj_H0YMcWNGiBcOQDE_lxnHD2cgIevh', //magic eden
  '1LbIWdGsoE3qvZhSbnjwt8C02o8l4OVpb', // trade coind
  '1NAq4uO2dEgmH4yQfOL5TAXefJOSRfqFR', // jupiter
  '19Y7tfpllSmBK-O28avDSkJq022MLUynu', //jobhopin
  '1cWeoMQxOXEt_Amn6z0AnMKkV9vKsR7qh', // jump
  '1_itWHo0YEfi_pbczwMk90PHGH9N88khT', //coin 68
  '1TsizUmcOavsmg4TCoswf0HHv6QjJmxDK', // ancient8
  '1W8_iRH9FAYxmG-jJhMTC35bDDgW7QV5s', // Accel
  '1mqSplWmEaSv4oKgA925lKby_jneTZchd', // sequia
]

const ListPartners = () => {
  const width = useWidth()

  const perview = useMemo(() => {
    let result = 1
    if (width > 575) result = 2
    if (width > 992) result = 3
    if (width > 1200) result = 4
    return result
  }, [width])

  return (
    <Row gutter={[0, 24]}>
      <Col span={24}>
        <InfiniteSwiper
          rootPath={PATH_GOOGLE_VIEW_IMG}
          data={new Array(4).fill(MEDIA_PARTNER).flat(Infinity)}
          wraped
          spacing={24}
          perViews={perview}
          height={128}
          speed={12000}
          cardClassName="card-contain-img"
        />
      </Col>
      <Col span={24}>
        <InfiniteSwiper
          rootPath={PATH_GOOGLE_VIEW_IMG}
          data={new Array(4).fill(MEDIA_PARTNER).flat(Infinity)}
          reverse={false}
          wraped
          perViews={perview}
          height={128}
          spacing={24}
          speed={12000}
          cardClassName="card-contain-img"
        />
      </Col>
    </Row>
  )
}

export default ListPartners
