import Brand from 'components/brand'
import MaxWidthLayout from 'components/maxWidthLayout'
import { Col, Row } from 'antd'
import Menu from './menu'

import './index.less'

const Header = () => {
  return (
    <MaxWidthLayout>
      <Row
        gutter={[24, 24]}
        style={{ marginTop: 24, marginBottom: 24 }}
        align="middle"
        wrap={false}
      >
        <Col style={{ marginRight: 24 }}>
          <Brand />
        </Col>
        <Col flex="auto">
          <Menu />
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}

export default Header
