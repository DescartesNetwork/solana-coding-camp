import { useState } from 'react'

import { Button, Col, Drawer, Image, Row, Segmented } from 'antd'
import IonIcon from '@sentre/antd-ionicon'
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import Navigation from './navigation'

import { useWidth } from 'hooks/useUI'
import { useDispatch, useSelector } from 'react-redux'
import { setLanguage } from 'store/languages.reducer'
import { LanguageType } from 'constant'
import { AppState } from 'store'

import flagVN from 'static/images/logo/flag-vn.svg'
import flagUK from 'static/images/logo/flag-uk.svg'

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

export type ContainerProps = {
  direction?: 'horizontal' | 'vertical'
  onChange?: () => void
}

const Container = ({
  direction = 'horizontal',
  onChange = () => {},
}: ContainerProps) => {
  const dispath = useDispatch()
  const language = useSelector((state: AppState) => state.languages.language)

  const isVertical = direction === 'vertical'
  const style = isVertical ? { flexFlow: 'column' } : {}
  const align = isVertical ? 'top' : 'middle'

  return (
    <Row gutter={[24, 24]} style={{ ...style }} align={align} wrap={false}>
      <Col flex="auto">
        <Navigation onChange={onChange} />
      </Col>
      <Col>
        <Segmented
          value={language}
          className="switch-language"
          options={LANGUAGES}
          onChange={(language) => {
            onChange()
            dispath(setLanguage(language as LanguageType))
          }}
        />
      </Col>
      <Col>
        <WalletMultiButton
          style={{
            backgroundColor: '#14f195',
            borderRadius: 24,
            color: '#000000',
            fontWeight: 300,
            height: 40,
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
        />
      </Col>
    </Row>
  )
}

const MobileMenu = () => {
  const [visible, setVisible] = useState(false)

  return (
    <Row gutter={[24, 24]} justify="end">
      <Col>
        <Button
          size="large"
          type="text"
          icon={<IonIcon name="menu-outline" />}
          onClick={() => setVisible(true)}
        />
      </Col>
      <Drawer
        className="drawer-menu"
        visible={visible}
        onClose={() => setVisible(false)}
        placement="right"
        width={320}
        style={{ zIndex: 99999 }}
        bodyStyle={{ background: '#1A1A1A' }}
      >
        <Row gutter={[12, 12]} justify="end">
          <Col>
            <Button
              type="text"
              size="large"
              icon={<IonIcon name="close" />}
              onClick={() => setVisible(false)}
            />
          </Col>
          <Col span={24}>
            <Container
              direction="vertical"
              onChange={() => setVisible(false)}
            />
          </Col>
        </Row>
      </Drawer>
    </Row>
  )
}

const Menu = () => {
  const width = useWidth()
  const isMobile = width < 1100

  if (isMobile) return <MobileMenu />
  return <Container />
}

export default Menu
