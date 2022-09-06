import { CSSProperties } from 'react'

import Brand from 'components/brand'
import MaxWidthLayout from 'components/maxWidthLayout'
import { Col, Image, Row, Segmented } from 'antd'

import iconFlag from 'static/images/logo/flag-vn.svg'

const LANGUAGES = [
  {
    label: 'VIE',
    value: 'vn',
    icon: <Image width={18} height={18} src={iconFlag} preview={false} />,
    disabled: true,
  },
  {
    label: 'ENG',
    value: 'en',
    icon: <Image width={18} height={18} src={iconFlag} preview={false} />,
  },
]

type HeaderProps = { style?: CSSProperties }
const Header = ({ style }: HeaderProps) => {
  return (
    <MaxWidthLayout>
      <Row
        justify="space-between"
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
      >
        <Col>
          <Brand />
        </Col>
        <Col>
          <Segmented className="switch-language" options={LANGUAGES} />
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}

export default Header
