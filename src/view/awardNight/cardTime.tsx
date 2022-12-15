import IonIcon from '@sentre/antd-ionicon'
import { Card, Space, Typography } from 'antd'
import { AwardNightTabs } from 'constant'

const AWN_BASE = {
  [AwardNightTabs.Date]: {
    color: '#DA61B8',
    icon: 'calendar',
    children: '21 Dec, 2022',
    link: '',
  },
  [AwardNightTabs.Time]: {
    color: '#80ECFF',
    icon: 'time',
    children: '18:00 - 22:30',
    link: '',
  },
  [AwardNightTabs.Location]: {
    color: '#EE7C56',
    icon: 'location',
    children: 'Capella Gallery Hall',
    link: 'https://www.google.com/maps/place/CAPELLA+GALLERY+HALL/@10.7774404,106.6806446,15z/data=!4m5!3m4!1s0x0:0x3e85de751c03de9c!8m2!3d10.7773992!4d106.6807326',
  },
}

type CardTimeProps = { type: AwardNightTabs }
const CardTime = ({ type }: CardTimeProps) => {
  const link = AWN_BASE[type].link
  return (
    <Card
      onClick={() => link && window.open(link, '_blank')}
      style={{
        background: AWN_BASE[type].color,
        borderRadius: 16,
        cursor: link ? 'pointer' : 'default',
      }}
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
