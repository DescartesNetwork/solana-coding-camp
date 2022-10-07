import { Button, Space } from 'antd'
import { useHistory } from 'react-router-dom'

const MENUS = [
  { label: 'About', key: 'about' },
  { label: 'Blog', key: '' },
]

const Menu = () => {
  const history = useHistory()

  return (
    <Space>
      {MENUS.map((menu) => (
        <Button
          type="text"
          key={menu.key}
          onClick={() => history.push(menu.key)}
        >
          {menu.label}
        </Button>
      ))}
    </Space>
  )
}

export default Menu
