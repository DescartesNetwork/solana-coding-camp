import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

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
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const elm = document.querySelector(hash)
    elm?.scrollIntoView({ behavior: 'smooth' })
  }, [hash])

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
