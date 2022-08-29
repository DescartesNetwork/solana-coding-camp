import numbro from 'numbro'

import { Col, Row, Space, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import TimeDisplay from './timeDisplay'
import useWidth from 'hooks/useWidth'

const PRICES = [
  { label: 'Total prizes', value: 100000, isPrice: true },
  { label: 'Registrants', value: 99999, isPrice: false },
  { label: 'DAO members', value: 9999, isPrice: false },
]
const DIVIDER = '1px solid #000'

const CountDown = () => {
  const width = useWidth()
  const isMobile = width < 992
  const amountSpan = isMobile ? 24 : undefined
  const divider = isMobile ? { borderTop: DIVIDER } : { borderLeft: DIVIDER }
  return (
    <MaxWidthLayout style={{ background: '#B6B0FF' }}>
      <Row>
        <Col xs={24} lg={8} xl={12}>
          <Space direction="vertical" style={{ padding: 24 }}>
            <Typography.Text className="text-dark">
              Close form registration in
            </Typography.Text>
            <TimeDisplay />
          </Space>
        </Col>
        <Col xs={24} lg={16} xl={12}>
          <Row className="wrap-amount">
            {PRICES.map((price, idx) => (
              <Col
                span={amountSpan}
                style={{
                  ...divider,
                  paddingTop: 24,
                  paddingBottom: 24,
                  paddingRight: 24,
                  paddingLeft: 24,
                }}
                key={idx}
              >
                <Space size={0} direction="vertical">
                  <Typography.Text className="text-dark">
                    {price.label}
                  </Typography.Text>
                  <Typography.Title level={1} className="text-dark">
                    {numbro(price.value).format(
                      `0,0${price.isPrice ? '$' : ''}`,
                    )}
                  </Typography.Title>
                </Space>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}

export default CountDown
