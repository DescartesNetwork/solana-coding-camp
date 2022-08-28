import { Col, Row } from 'antd'

import logoSolana from 'static/images/logo-solana.svg'
import logoSentre from 'static/images/logo-sentre.svg'
import logoC98 from 'static/images/logo-c98.svg'
import InfiniteSwiper from 'components/infinteSwiper'

const DEFAULT_LOGO = [logoSolana, logoSentre, logoC98]

const ListPartners = () => {
  return (
    <Row gutter={[0, 24]}>
      <Col span={24}>
        <InfiniteSwiper
          data={new Array(4).fill(DEFAULT_LOGO).flat(Infinity)}
          wraped
          spacing={24}
          height="auto"
          speed={12000}
        />
      </Col>
      <Col span={24}>
        <InfiniteSwiper
          data={new Array(4).fill(DEFAULT_LOGO).flat(Infinity)}
          reverse={false}
          wraped
          height="auto"
          spacing={24}
          speed={12000}
        />
      </Col>
    </Row>
  )
}

export default ListPartners
