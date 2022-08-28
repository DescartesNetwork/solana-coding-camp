import { Button, Space } from 'antd'

const MENUS = [
  { label: 'About', key: '' },
  { label: 'Blog', key: '' },
]

const Menu = () => {
  return (
    <Space>
      {MENUS.map((menu) => (
        <Button type="text" key={menu.key}>
          {menu.label}
        </Button>
      ))}
    </Space>
  )
}

export default Menu
