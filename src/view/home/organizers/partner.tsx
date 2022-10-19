import { useMemo } from 'react'

import { Col, Row } from 'antd'
import CardLogo from 'components/cardLogo'

import { MAX_WIDTH, PATH_GOOGLE_VIEW_IMG } from 'constant'
import { useWidth } from 'hooks/useUI'

import logoSolana from 'static/images/logo/logo-solana.svg'
import logoSentre from 'static/images/logo/logo-sentre.svg'
import logoC98 from 'static/images/logo/logo-c98.svg'
import logoDao from 'static/images/logo/logo-dao.svg'

const PARTNERS = [
  logoSolana,
  logoSentre,
  logoC98,
  logoDao,
  PATH_GOOGLE_VIEW_IMG + '1NaAXuRaq1A1IiIGh0eqAOJBrwqgnmQ_u', // Jobhopin
]

const Partner = () => {
  const width = useWidth()

  const colWidth = useMemo(() => {
    if (width > MAX_WIDTH) return '20%'
    if (width > 768) return '33.333333%'
    return '100%'
  }, [width])

  const imgHeight = useMemo(() => {
    if (width > MAX_WIDTH) return 78
    return 88
  }, [width])

  return (
    <Row gutter={[12, 12]} justify="center">
      {PARTNERS.map((partner, idx) => (
        <Col
          style={{
            flex: `0 0 ${colWidth}`,
            maxWidth: colWidth,
            zIndex: 99,
          }}
          key={idx}
        >
          <CardLogo
            style={{ height: imgHeight }}
            src={partner}
            className="card-contain-img"
          />
        </Col>
      ))}
    </Row>
  )
}

export default Partner
