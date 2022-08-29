import numbro from 'numbro'

import { Col, Row, Space, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import TimeDisplay from './timeDisplay'

const PRICES = [
  { label: 'Total prizes', value: 100000 },
  { label: 'Total prizes', value: 100000 },
  { label: 'Total prizes', value: 100000 },
]
const CountDown = () => {
  return (
    <MaxWidthLayout style={{ background: '#B6B0FF' }}>
      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <Space
            direction="vertical"
            style={{ paddingTop: 24, paddingBottom: 24 }}
          >
            <Typography.Text className="text-dark">
              Close form registration in
            </Typography.Text>
            <TimeDisplay />
          </Space>
        </Col>
        <Col xs={24} md={12}>
          <Space className="wrap-amount">
            {PRICES.map((price, idx) => (
              <Space
                direction="vertical"
                style={{ borderLeft: '1px solid #000', padding: 24 }}
                size={0}
                key={idx}
              >
                <Typography.Text className="text-dark">
                  {price.label}
                </Typography.Text>
                <Typography.Title level={1} className="text-dark">
                  ${numbro(price.value).format('0,0.[00]')}
                </Typography.Title>
              </Space>
            ))}
          </Space>
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}

export default CountDown
