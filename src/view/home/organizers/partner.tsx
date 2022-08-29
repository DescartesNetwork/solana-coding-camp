import { Col, Row } from 'antd'

import logoSolana from 'static/images/logo/logo-solana.svg'
import logoSentre from 'static/images/logo/logo-sentre.svg'
import logoC98 from 'static/images/logo/logo-c98.svg'
import CardLogo from 'components/cardLogo'

const PARTNERS = [logoSolana, logoSentre, logoC98]

const Partner = () => {
  return (
    <Row gutter={[12, 12]}>
      {PARTNERS.map((partner, idx) => (
        <Col xs={24} md={8} key={idx}>
          <CardLogo src={partner} />
        </Col>
      ))}
    </Row>
  )
}

export default Partner
