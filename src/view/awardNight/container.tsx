import { Col, Row } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import CardTime from './cardTime'
import CardAwardNight from './cardAwardNight'
import RegistrationWN from './registration'

import { AwardNightTabs } from 'constant'

export const AWARD_NIGHT_ID = 'award-night-id'

const AwardNightContainer = () => {
  return (
    <MaxWidthLayout>
      <Row gutter={[24, 96]} justify="center">
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
        <Col span={24} id={AWARD_NIGHT_ID}>
          <CardAwardNight />
        </Col>
        <Col xs={24} md={8}>
          <RegistrationWN />
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}

export default AwardNightContainer
