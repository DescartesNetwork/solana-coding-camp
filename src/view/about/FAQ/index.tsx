import { useState } from 'react'

import { Col, Row, Space, Typography } from 'antd'
import IonIcon from 'components/IonIcon'
import MaxWidthLayout from 'components/maxWidthLayout'
import useWidth from 'hooks/useWidth'
import CardFAQ from './cardFAQ'

import './index.less'

export enum TabsKey {
  WhyJoin = 'why-join',
  WhoCanJoin = 'who-can-join',
  HowToJoin = 'how-to-join',
}

const TAB_FAQ = [
  { icon: 'book', label: 'Why join?', key: TabsKey.WhyJoin },
  { icon: 'people', label: 'Who can join?', key: TabsKey.WhoCanJoin },
  {
    icon: 'paper-plane',
    label: 'How to join?',
    key: TabsKey.HowToJoin,
  },
]

const FAQ_DATA = {
  [TabsKey.WhyJoin]:
    'Learn blockchain coding from scratch with on-site mentoring in real time. Build your own DApp and compete for $100,000 prizes - all in just one month! Join our 1-1 consulting sessions, Web3 business panel discussions, and get advice from top national VCs and experts to build a healthy finance system around your project.',
  [TabsKey.WhoCanJoin]:
    'Learn blockchain coding from scratch with on-site mentoring in real time. Build your own DApp and compete for $100,000 prizes - all in just one month! Join our 1-1 consulting sessions, Web3 business panel discussions, and get advice from top national VCs and experts to build a healthy finance system around your project. 2',
  [TabsKey.HowToJoin]:
    'Learn blockchain coding from scratch with on-site mentoring in real time. Build your own DApp and compete for $100,000 prizes - all in just one month! Join our 1-1 consulting sessions, Web3 business panel discussions, and get advice from top national VCs and experts to build a healthy finance system around your project. 3',
}

const FAQ = () => {
  const [activeKey, setActiveKey] = useState(TabsKey.WhyJoin)
  const width = useWidth()
  const isDesktop = width >= 1200
  const minWidth = isDesktop ? 268 : 'unset'
  const level = isDesktop ? 2 : 5
  const colSpan = isDesktop ? undefined : 8
  const padding = isDesktop ? 32 : 14

  return (
    <MaxWidthLayout>
      <Row gutter={[24, 24]}>
        {TAB_FAQ.map((faq) => (
          <Col span={colSpan} key={faq.label}>
            <CardFAQ
              bodyStyle={{
                minWidth,
                textAlign: 'center',
                padding,
              }}
              onClick={() => setActiveKey(faq.key)}
              active={activeKey === faq.key}
            >
              <Space direction="vertical" style={{ textAlign: 'center' }}>
                <IonIcon name={faq.icon} />
                <Typography.Title
                  level={level}
                  style={{ color: activeKey === faq.key ? '#000' : '#fff' }}
                >
                  {faq.label}
                </Typography.Title>
              </Space>
            </CardFAQ>
          </Col>
        ))}
        <Col span={24}>
          <CardFAQ>{FAQ_DATA[activeKey]}</CardFAQ>
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}

export default FAQ
