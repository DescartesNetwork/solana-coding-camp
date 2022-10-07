import { CSSProperties } from 'react'

import Brand from 'components/brand'
import MaxWidthLayout from 'components/maxWidthLayout'
import { Col, Image, Row, Segmented } from 'antd'

import flagVN from 'static/images/logo/flag-vn.svg'
import flagUK from 'static/images/logo/flag-uk.svg'
import Menu from './menu'

export enum LanguageKey {
  VietNam = 'vn',
  England = 'uk',
}
const LANGUAGES = [
  {
    label: 'VIE',
    value: LanguageKey.VietNam,
    icon: <Image width={18} height={18} src={flagVN} preview={false} />,
    disabled: true,
  },
  {
    label: 'ENG',
    value: LanguageKey.England,
    icon: <Image width={18} height={18} src={flagUK} preview={false} />,
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
          <Menu />
        </Col>
        <Col>
          <Segmented
            defaultValue={LanguageKey.England}
            className="switch-language"
            options={LANGUAGES}
          />
        </Col>
      </Row>
    </MaxWidthLayout>
  )
}

export default Header
