import { Col, Row, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import CardPartner from './cardPartner'

import logoSentre from 'static/images/logo/logo-sentre.svg'
import logoC98 from 'static/images/logo/logo-c98.svg'
import logoSolana from 'static/images/logo/logo-solana.svg'

const PARTNERS = [
  {
    logo: logoSolana,
    socials: [
      { src: '', icon: 'logo-twitter' },
      { src: '', icon: 'globe-outline' },
    ],
    children:
      'Solana is the fastest blockchain in the world and the fastest growing ecosystem in crypto, with thousands of projects spanning DeFi, NFTs, Web3 and more.',
  },
  {
    logo: logoSentre,
    socials: [
      { src: '', icon: 'logo-twitter' },
      { src: '', icon: 'globe-outline' },
    ],
    children:
      'Sentre Protocol is a DApp Store for All Things on Solana where users can install and use their favorite DApps on a single platform.',
  },
  {
    logo: logoC98,
    socials: [
      { src: '', icon: 'logo-twitter' },
      { src: '', icon: 'globe-outline' },
    ],
    children:
      "Coin98 is an all-in-one DeFi platform designed to provide DeFi's most prominent features in one place.",
  },
]

const Partner = () => {
  return (
    <MaxWidthLayout>
      <Row gutter={[24, 24]} justify="center">
        <Col>
          <Typography.Title level={2} className="text-title">
            About
          </Typography.Title>
        </Col>
        <Col span={24} />
        {PARTNERS.map((partner) => (
          <Col xs={24} md={8} key={partner.logo}>
            <CardPartner socials={partner.socials} logo={partner.logo}>
              {partner.children}
            </CardPartner>
          </Col>
        ))}
      </Row>
    </MaxWidthLayout>
  )
}

export default Partner
