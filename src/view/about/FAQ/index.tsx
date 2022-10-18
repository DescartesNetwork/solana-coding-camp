import { useState } from 'react'

import { Col, Row, Space, Typography } from 'antd'
import IonIcon from '@sentre/antd-ionicon'
import MaxWidthLayout from 'components/maxWidthLayout'
import CardFAQ from './cardFAQ'

import useLanguages from 'hooks/useLanguages'
import { useWidth } from 'hooks/useUI'
import { TabsKey } from 'constant'

import './index.less'

const FAQ = () => {
  const system = useLanguages()
  const [activeKey, setActiveKey] = useState(TabsKey.WhyJoin)
  const width = useWidth()
  const isDesktop = width >= 1200
  const minWidth = isDesktop ? 268 : 'unset'
  const level = isDesktop ? 2 : 5
  const colSpan = isDesktop ? undefined : 8
  const padding = isDesktop ? 32 : 14

  const TAB_FAQ = [
    { icon: 'book', label: system.about.faq.whyJoin, key: TabsKey.WhyJoin },
    {
      icon: 'people',
      label: system.about.faq.whoJoin,
      key: TabsKey.WhoCanJoin,
    },
    {
      icon: 'paper-plane',
      label: system.about.faq.howJoin,
      key: TabsKey.HowToJoin,
    },
  ]

  const FAQ_DATA = {
    [TabsKey.WhyJoin]: system.about.faq.whyContent,
    [TabsKey.WhoCanJoin]: system.about.faq.whoContent,
    [TabsKey.HowToJoin]: system.about.faq.howContent,
  }

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
              cardKey={faq.key}
            >
              <Space direction="vertical" style={{ textAlign: 'center' }}>
                <IonIcon
                  style={{ fontSize: 28, color: 'inherit' }}
                  name={faq.icon}
                />
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
          <CardFAQ style={{ border: '1px solid transparent' }}>
            <div
              className="faq-content"
              dangerouslySetInnerHTML={{ __html: FAQ_DATA[activeKey] }}
            />
          </CardFAQ>
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}

export default FAQ
