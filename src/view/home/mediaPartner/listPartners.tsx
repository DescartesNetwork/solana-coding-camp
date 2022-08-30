import { Col, Row } from 'antd'

import logoSolana from 'static/images/logo/logo-solana.svg'
import logoSentre from 'static/images/logo/logo-sentre.svg'
import logoC98 from 'static/images/logo/logo-c98.svg'
import InfiniteSwiper from 'components/infinteSwiper'
import useWidth from 'hooks/useWidth'
import { useMemo } from 'react'

const DEFAULT_LOGO = [logoSolana, logoSentre, logoC98]

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
          data={new Array(4).fill(DEFAULT_LOGO).flat(Infinity)}
          wraped
          spacing={24}
          perViews={perview}
          height="auto"
          speed={12000}
        />
      </Col>
      <Col span={24}>
        <InfiniteSwiper
          data={new Array(4).fill(DEFAULT_LOGO).flat(Infinity)}
          reverse={false}
          wraped
          perViews={perview}
          height="auto"
          spacing={24}
          speed={12000}
        />
      </Col>
    </Row>
  )
}

export default ListPartners
