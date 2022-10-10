import { Button, Col, Drawer, DrawerProps, Image, Row, Segmented } from 'antd'
import Navigation from './navigation'

import flagVN from 'static/images/logo/flag-vn.svg'
import flagUK from 'static/images/logo/flag-uk.svg'
import useWidth from 'hooks/useWidth'
import { Fragment, useState } from 'react'
import IonIcon from 'components/IonIcon'

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

export type ContainerProps = { direction?: 'horizontal' | 'vertical' }
const Container = ({ direction = 'horizontal' }: ContainerProps) => {
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
          defaultValue={LanguageKey.England}
          className="switch-language"
          options={LANGUAGES}
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
