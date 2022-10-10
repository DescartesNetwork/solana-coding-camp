import { useHistory, useLocation } from 'react-router-dom'

import { Button, Space, SpaceProps } from 'antd'
import useWidth from 'hooks/useWidth'

const MENUS = [
  { label: 'Home', key: '/home' },
  { label: 'About', key: '/about' },
  { label: 'Blog', key: '/blog' },
]

const ACTIVE_COLOR = {
  color: '#14F195',
}

const Navigation = () => {
  const width = useWidth()
  const history = useHistory()
  const location = useLocation()

  const pathname = location.pathname
  const isMobile = width < 992
  const direction: SpaceProps['direction'] = isMobile
    ? 'vertical'
    : 'horizontal'

  return (
    <Space direction={direction}>
      {MENUS.map((menu) => {
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
