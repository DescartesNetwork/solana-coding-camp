import { Fragment, useState } from 'react'

import { Button, Col, Drawer, Image, Row, Segmented } from 'antd'
import Navigation from './navigation'
import IonIcon from 'components/IonIcon'

import useWidth from 'hooks/useWidth'

import flagVN from 'static/images/logo/flag-vn.svg'
import flagUK from 'static/images/logo/flag-uk.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setLanguage } from 'store/languages.reducer'
import { LanguageType } from 'constant'
import { AppState } from 'store'

export enum LanguageKey {
  VietNam = 'vn',
  England = 'en',
}

const LANGUAGES = [
  {
    label: 'VIE',
    value: LanguageKey.VietNam,
    icon: <Image width={18} height={18} src={flagVN} preview={false} />,
  },
  {
    label: 'ENG',
    value: LanguageKey.England,
    icon: <Image width={18} height={18} src={flagUK} preview={false} />,
  },
]

export type ContainerProps = { direction?: 'horizontal' | 'vertical' }
const Container = ({ direction = 'horizontal' }: ContainerProps) => {
  const dispath = useDispatch()
  const language = useSelector((state: AppState) => state.languages.language)

  const isVertical = direction === 'vertical'
  const style = isVertical ? { flexFlow: 'column' } : {}
  const align = isVertical ? 'top' : 'middle'

  return (
    <Row style={{ ...style }} justify="space-between" align={align}>
      <Col>
        <Navigation />
      </Col>
      <Col>
        <Segmented
          value={language}
          className="switch-language"
          options={LANGUAGES}
          onChange={(language) =>
            dispath(setLanguage(language as LanguageType))
          }
        />
      </Col>
    </Row>
  )
}

const MobileMenu = () => {
  const [visible, setVisible] = useState(false)

  return (
    <Fragment>
      <Button
        type="text"
        icon={<IonIcon name="menu-outline" />}
        onClick={() => setVisible(true)}
      />
      <Drawer
        className="drawer-menu"
        visible={visible}
        onClose={() => setVisible(false)}
        placement="right"
        width={350}
        style={{ zIndex: 99999 }}
        bodyStyle={{ background: '#1A1A1A' }}
      >
        <Container direction="vertical" />
      </Drawer>
    </Fragment>
  )
}

const Menu = () => {
  const width = useWidth()
  const isMobile = width < 992

  if (isMobile) return <MobileMenu />
  return <Container />
}

export default Menu
