import IonIcon from '@sentre/antd-ionicon'
import { Avatar, Space, Typography } from 'antd'

export type CardSecondaryProps = {
  icon?: string
  value: string
  onClick?: () => void
  avatar?: string
  size?: number
}
const CardSecondary = ({
  value,
  icon = 'calendar-outline',
  avatar,
  onClick = () => {},
  size = 18,
}: CardSecondaryProps) => {
  return (
    <Space
      size={6}
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
    >
      {!!avatar ? (
        <Avatar src={avatar} size={size}>
          <IonIcon name="people-outline" />
        </Avatar>
      ) : (
        <IonIcon name={icon} />
      )}
      <Typography.Text type="secondary">{value}</Typography.Text>
    </Space>
  )
}

export default CardSecondary
