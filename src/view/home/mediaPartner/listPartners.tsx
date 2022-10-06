import { useMemo } from 'react'

import { Col, Row } from 'antd'
import InfiniteSwiper from 'components/infinteSwiper'

import useWidth from 'hooks/useWidth'
import { PATH_GOOGLE_VIEW_IMG } from 'constant'

const MEDIA_PARTNER = [
  '1l0oBeivk3TSvAeiWRbKi0r2Sh6Wcf9Pu',
  '127uzWDnTidcs6rDkR6aiDyQ2FZQ7iV_m',
  '17TgvU6yEnVBzhE0Uf8PNvIge5bI62wf8',
  '1Paj_H0YMcWNGiBcOQDE_lxnHD2cgIevh',
  '1krEdpFkKGM9ypy3a94nd5AtgdJQcoXXQ',
  '1Fo-3nk7w3yIAXniK8EpOqzEgBr_zohQ1',
  '1gIYM2w-X9LRTJareG8xFWBr9_-KuJDLZ',
  '1UhEOORyPYB2W3VCT4wqrD5y-LEyWTB9U',
  '1j-oMmGBxFw2ffN2xPcqHQbYiCTAgYh3q',
  '1L_-Q8ovSvJDrWkV7oyoXbGxTKc6QOi8R',
  '1_itWHo0YEfi_pbczwMk90PHGH9N88khT',
  '1F0iD7MDIhbgcbI9AI8F3K297ywGNud-O',
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
