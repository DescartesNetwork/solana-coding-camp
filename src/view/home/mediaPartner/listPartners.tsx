import { useMemo } from 'react'

import { Col, Row } from 'antd'
import InfiniteSwiper from 'components/infinteSwiper'

import useWidth from 'hooks/useWidth'
import { PATH_GOOGLE_VIEW_IMG } from 'constant'

const MEDIA_PARTNER = [
  '1TgZltv-MYe1hXaCou6EzU2vFEe57glxd', //zeta
  '127uzWDnTidcs6rDkR6aiDyQ2FZQ7iV_m', //space falcon
  '14i92L8YFINk00uB5BI1noN0k71uzVzcg', //solscan
  '1Paj_H0YMcWNGiBcOQDE_lxnHD2cgIevh', //magic eden
  '1bUSAzz5PVTiHmUIBP3DEK-PC1LqkGGgG', //kyros
  '1LbIWdGsoE3qvZhSbnjwt8C02o8l4OVpb', // trade coind
  '1NAq4uO2dEgmH4yQfOL5TAXefJOSRfqFR', // jupiter
  '19Y7tfpllSmBK-O28avDSkJq022MLUynu', //jobhopin
  '1j-oMmGBxFw2ffN2xPcqHQbYiCTAgYh3q', //defiland
  '10CIiV_U3temDZClNf26nO-3dAklB6XxJ', // coinV consortium
  '1_itWHo0YEfi_pbczwMk90PHGH9N88khT', //coin 68
  '1TsizUmcOavsmg4TCoswf0HHv6QjJmxDK', // ancient8
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
