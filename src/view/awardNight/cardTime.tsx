import IonIcon from '@sentre/antd-ionicon'
import { Card, Space, Typography } from 'antd'
import { AwardNightTabs } from 'constant'

const AWN_BASE = {
  [AwardNightTabs.Date]: {
    color: '#DA61B8',
    icon: 'calendar',
    children: '21 Dec, 2022',
  },
  [AwardNightTabs.Time]: {
    color: '#80ECFF',
    icon: 'time',
    children: '18:00 - 22:30',
  },
  [AwardNightTabs.Location]: {
    color: '#EE7C56',
    icon: 'location',
    children: 'Ho Chi Minh city',
  },
}

type CardTimeProps = { type: AwardNightTabs }
const CardTime = ({ type }: CardTimeProps) => {
  return (
    <Card
      style={{ background: AWN_BASE[type].color, borderRadius: 16 }}
      bordered={false}
    >
      <Space direction="vertical" size={0}>
        <Space size={4}>
          <IonIcon style={{ color: '#000' }} name={AWN_BASE[type].icon} />
          <Typography.Text style={{ color: '#000' }}>{type}</Typography.Text>
        </Space>
        <Typography.Title style={{ color: '#000' }} level={2}>
          {AWN_BASE[type].children}
        </Typography.Title>
      </Space>
    </Card>
  )
}

export default CardTime
