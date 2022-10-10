import { useHistory, useLocation } from 'react-router-dom'

import { Button, Space, SpaceProps } from 'antd'

import useWidth from 'hooks/useWidth'
import useLanguages from 'hooks/useLanguages'

const ACTIVE_COLOR = {
  color: '#14F195',
}

export type MenuData = {
  label: string
  key: string
}

const Navigation = () => {
  const system = useLanguages()
  const width = useWidth()
  const history = useHistory()
  const location = useLocation()

  const menus: MenuData[] = system.menus
  const pathname = location.pathname
  const isMobile = width < 992
  const direction: SpaceProps['direction'] = isMobile
    ? 'vertical'
    : 'horizontal'

  return (
    <Space direction={direction}>
      {menus.map((menu) => {
        const active = pathname === menu.key
        const activeStyle = active ? ACTIVE_COLOR : {}
        return (
          <Button
            type="text"
            key={menu.key}
            onClick={() => history.push(menu.key)}
            style={{ ...activeStyle, fontSize: 16 }}
            disabled={menu.key === '/blog'}
          >
            {menu.label}
          </Button>
        )
      })}
    </Space>
  )
}

export default Navigation
