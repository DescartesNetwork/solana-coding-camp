import { CSSProperties } from 'react'

import Brand from 'components/brand'
import MaxWidthLayout from 'components/maxWidthLayout'
import { Col, Row } from 'antd'
import Menu from './menu'

import './index.less'

type HeaderProps = { style?: CSSProperties }
const Header = ({ style }: HeaderProps) => {
  return (
    <MaxWidthLayout>
      <Row
        style={{
          position: 'absolute',
          width: '100%',
          left: 0,
          paddingTop: 24,
          paddingBottom: 24,
          paddingLeft: 12,
          paddingRight: 12,
          zIndex: 9999,
          ...style,
        }}
        align="middle"
        wrap={false}
      >
        <Col span={10}>
          <Brand />
        </Col>
        <Col span={14} style={{ textAlign: 'right' }}>
          <Menu />
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}

export default Header
