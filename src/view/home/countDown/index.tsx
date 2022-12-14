import { useCallback, useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import numbro from 'numbro'

import { Col, Row, Space, Typography } from 'antd'
import MaxWidthLayout from 'components/maxWidthLayout'
import TimeDisplay from './timeDisplay'

import { useWidth } from 'hooks/useUI'
import useLanguages from 'hooks/useLanguages'

const DIVIDER = '1px solid #000'
const CountDown = () => {
  const system = useLanguages()
  const [registrants, setRegistrants] = useState(0)
  const width = useWidth()
  const isMobile = width < 992
  const amountSpan = isMobile ? 24 : undefined
  const divider = isMobile ? { borderTop: DIVIDER } : { borderLeft: DIVIDER }

  const fetchRegistrants = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://stat.sentre.io/codingcamp/total-registers`,
      )
      return setRegistrants(data)
    } catch (error) {
      return setRegistrants(0)
    }
  }, [])

  const prices = useMemo(
    () => [
      { label: system.timeline.prizes, value: 100000, isPrice: true },
      { label: system.timeline.registants, value: registrants, isPrice: false },
    ],
    [registrants, system.timeline],
  )

  useEffect(() => {
    fetchRegistrants()
  }, [fetchRegistrants])

  return (
    <MaxWidthLayout style={{ background: '#B6B0FF' }}>
      <Row>
        <Col xs={24} lg={14}>
          <TimeDisplay />
        </Col>
        <Col xs={24} lg={10}>
          <Row className="wrap-amount">
            {prices.map((price, idx) => (
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
                <Space direction="vertical">
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
