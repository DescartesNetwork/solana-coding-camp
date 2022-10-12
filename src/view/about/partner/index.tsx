import { Col, Row, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import CardPartner from './cardPartner'

import useLanguages from 'hooks/useLanguages'

import logoSentre from 'static/images/logo/logo-sentre.svg'
import logoC98 from 'static/images/logo/logo-c98.svg'
import logoSolana from 'static/images/logo/logo-solana.svg'
import logoDao from 'static/images/logo/logo-dao.svg'

import './index.less'

const Partner = () => {
  const system = useLanguages()

  const PARTNERS = [
    {
      logo: logoSolana,
      socials: [
        { src: 'https://twitter.com/solana', icon: 'logo-twitter' },
        { src: 'https://solana.com/', icon: 'globe-outline' },
      ],
      children: system.about.us.solana,
    },
    {
      logo: logoSentre,
      socials: [
        { src: 'https://twitter.com/sentreprotocol', icon: 'logo-twitter' },
        { src: 'https://sentre.io', icon: 'globe-outline' },
      ],
      children: system.about.us.sentre,
    },
    {
      logo: logoC98,
      socials: [
        { src: 'https://twitter.com/coin98_finance', icon: 'logo-twitter' },
        { src: 'https://coin98.com/', icon: 'globe-outline' },
      ],
      children: system.about.us.c98,
    },
    {
      logo: logoDao,
      socials: [
        { src: 'https://twitter.com/SuperteamVN', icon: 'logo-twitter' },
        { src: 'https://t.me/solanadevsvietnam', icon: 'logo-telegram' },
      ],
      children: system.about.us.dao,
    },
  ]
  return (
    <MaxWidthLayout>
      <Row gutter={[24, 24]} justify="center">
        <Col>
          <Typography.Title level={2} className="text-title">
            {system.about.us.title}
          </Typography.Title>
        </Col>
        <Col span={24} />
        {PARTNERS.map((partner) => (
          <Col xs={24} lg={12} xl={6} key={partner.logo}>
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
