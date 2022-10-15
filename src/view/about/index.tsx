import { useEffect } from 'react'

import { Col, Row } from 'antd'
import Banner from './banner'
import Partner from './partner'
import FAQ from './FAQ'
import Agenda from './agenda'
import Registration from './registration'

import { useGap } from 'hooks/useUI'

import './index.less'

const About = () => {
  const gap = useGap()

  useEffect(() => {
    const hashId = window.location.hash
    if (!hashId) return
    const elm = document.querySelector(hashId)
    elm?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  return (
    <Row gutter={[0, gap]}>
      <Col span={24}>
        <Banner />
      </Col>
      <Col span={24}>
        <Partner />
      </Col>
      <Col span={24}>
        <Agenda />
      </Col>
      <Col span={24}>
        <FAQ />
      </Col>
      <Col span={24}>
        <Registration />
      </Col>
    </Row>
  )
}

export default About
