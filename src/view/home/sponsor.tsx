import { Col, Row, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import CardPartner from 'components/cardPartner'

import { PATH_GOOGLE_VIEW_IMG } from 'constant'
import useLanguages from 'hooks/useLanguages'
import CardComingSoon from 'components/cardPartner/cardComingSoon'

const SOLSCAN_GG_ID = '14i92L8YFINk00uB5BI1noN0k71uzVzcg'

const Sponsor = () => {
  const system = useLanguages()

  const SPONSORS_DATA = [
    {
      commingSoon: true,
    },
    {
      logo: PATH_GOOGLE_VIEW_IMG + SOLSCAN_GG_ID,
      socials: [
        { src: 'https://twitter.com/solscanofficial', icon: 'logo-twitter' },
        { src: 'https://solscan.io/', icon: 'globe-outline' },
      ],
      children: system.sponsor.solscan,
      commingSoon: false,
    },
    {
      commingSoon: true,
    },
  ]

  return (
    <MaxWidthLayout>
      <Row gutter={[24, 24]} justify="center">
        <Col>
          <Typography.Title level={2} className="text-title">
            {system.sponsor.title}
          </Typography.Title>
        </Col>
        <Col span={24} />
        {SPONSORS_DATA.map((sponsor, idx) => (
          <Col xs={24} lg={8} key={idx}>
            {sponsor.commingSoon ? (
              <CardComingSoon />
            ) : (
              <CardPartner
                logo={sponsor.logo}
                socials={sponsor.socials}
                fontSize={22}
                legend="API Service"
                size={70}
              >
                {sponsor.children}
              </CardPartner>
            )}
          </Col>
        ))}
      </Row>
    </MaxWidthLayout>
  )
}

export default Sponsor
