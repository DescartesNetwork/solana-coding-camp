import { Button, Col, Row } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import CardTime from './cardTime'
import CardAwardNight from './cardAwardNight'

import useLanguages from 'hooks/useLanguages'
import { AwardNightTabs } from 'constant'
import configs from 'configs'

const {
  typeform: { luma },
} = configs

export const AWARD_NIGHT_ID = 'award-night-id'

const AwardNightContainer = () => {
  const { CTA } = useLanguages()

  return (
    <MaxWidthLayout>
      <Row gutter={[24, 96]} justify="end">
        <Col span={24}>
          <Row gutter={[24, 24]}>
            {[
              AwardNightTabs.Date,
              AwardNightTabs.Time,
              AwardNightTabs.Location,
            ].map((key) => (
              <Col xs={24} md={12} xl={8} key={key}>
                <CardTime type={key} />
              </Col>
            ))}
          </Row>
        </Col>
        <Col xs={24} md={8} style={{ textAlign: 'right' }}>
          <Button
            type="link"
            size="large"
            style={{ fontSize: 22, fontWeight: 700 }}
            onClick={() => window.open(luma, '_blank')}
            icon="››› "
          >
            {CTA.register}
          </Button>
        </Col>
        <Col span={24} id={AWARD_NIGHT_ID}>
          <CardAwardNight />
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}

export default AwardNightContainer
