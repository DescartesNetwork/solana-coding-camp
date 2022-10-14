import { Col, Row } from 'antd'

import { PATH_GOOGLE_VIEW_IMG } from 'constant'

import logoSolana from 'static/images/logo/logo-solana.svg'
import logoSentre from 'static/images/logo/logo-sentre.svg'
import logoC98 from 'static/images/logo/logo-c98.svg'
import logoDao from 'static/images/logo/logo-dao.svg'
import CardLogo from 'components/cardLogo'
import useWidth from 'hooks/useWidth'
import { useMemo } from 'react'

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
    if (width > 1300) return '20%'
    if (width > 768) return '33.333333%'
    return '100%'
  }, [width])

  const imgHeight = useMemo(() => {
    if (width > 1300) return 78
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
