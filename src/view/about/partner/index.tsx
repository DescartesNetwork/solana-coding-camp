import { Col, Row, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import CardPartner from './cardPartner'

import useLanguages from 'hooks/useLanguages'

import logoSentre from 'static/images/logo/logo-sentre.svg'
import logoC98 from 'static/images/logo/logo-c98.svg'
import logoSolana from 'static/images/logo/logo-solana.svg'
import logoDao from 'static/images/logo/logo-dao.svg'

import './index.less'
import { PATH_GOOGLE_VIEW_IMG } from 'constant'
import useWidth from 'hooks/useWidth'
import { useMemo } from 'react'

const Partner = () => {
  const width = useWidth()
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
    {
      logo: PATH_GOOGLE_VIEW_IMG + '1NaAXuRaq1A1IiIGh0eqAOJBrwqgnmQ_u',
      socials: [
        {
          src: 'https://www.linkedin.com/company/jobhopin/',
          icon: 'logo-linkedin',
        },
        { src: 'https://www.jobhopin.com', icon: 'globe-outline' },
      ],
      children: system.about.us.jh,
    },
  ]

  const colWidth = useMemo(() => {
    if (width > 1300) return '20%'
    if (width > 768) return '33.333333%'
    return '100%'
  }, [width])

  const imgHeight = useMemo(() => {
    if (width > 1300) return 42
    return 50
  }, [width])

  const cardGap = useMemo(() => {
    if (width > 1300) return 24
    return 42
  }, [width])

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
          <Col style={{ flex: `0 0 ${colWidth}`, maxWidth: colWidth }}>
            <CardPartner
              socials={partner.socials}
              logo={partner.logo}
              imgStyle={{ maxHeight: imgHeight }}
              gap={cardGap}
            >
              {partner.children}
            </CardPartner>
          </Col>
        ))}
      </Row>
    </MaxWidthLayout>
  )
}

export default Partner
