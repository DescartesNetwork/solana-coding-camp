import { useMemo } from 'react'

import { Col, Row } from 'antd'
import InfiniteSwiper from 'components/infinteSwiper'

import { useWidth } from 'hooks/useUI'
import { PATH_GOOGLE_VIEW_IMG } from 'constant'

const MEDIA_PARTNER = [
  '14i92L8YFINk00uB5BI1noN0k71uzVzcg', // solscan
  '1LbIWdGsoE3qvZhSbnjwt8C02o8l4OVpb', // trade coind
  '1IRmQsmsfq5N-B-D0T01lLtiHBjWpLEHS', //zeta
  '1bUSAzz5PVTiHmUIBP3DEK-PC1LqkGGgG', //kyros
  '144MMNyGkI76HWFGUfcpygyGe77ocDTbC', //kyber
  '1_itWHo0YEfi_pbczwMk90PHGH9N88khT', //coin 68
  '1eutyoRworLkr3fm2ZvGw-T4ry-Z_cclY', // sequio
  '1qnSJhrEnug8WhYfqpK3uKb0E_nh5RgtL', // LSVP
  '1DY1WG0j25oBcZ8c7NyFhNdcftY3Z3vQs', // Accel
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
          speed={6000}
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
          speed={6000}
          cardClassName="card-contain-img"
        />
      </Col>
    </Row>
  )
}

export default ListPartners
