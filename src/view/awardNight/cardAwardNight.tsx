import { Card, Typography } from 'antd'
import { useSelector } from 'react-redux'
import { AppState } from 'store'

import bgImg from 'static/images/ranking/glass-3.png'

const data = [
  {
    time: '18:00',
    title:
      'Welcome guests, take pictures with the backdrop, do quick interviews',
  },
  {
    time: '18:30',
    title: 'Introduction & Solana keynote speaker',
  },
  {
    time: '18:40',
    title: 'Ancient8 keynote speaker',
  },
  {
    time: '18:50',
    title: 'Saros Finance keynote speaker',
  },
  {
    time: '19:00',
    title: 'Award Ceremony for Ancient8 & Saros Finance track',
  },
  {
    time: '19:10',
    title: 'Panel 01 & QnA',
  },
  {
    time: '19:40',
    title: 'Award ceremony for U20 track',
  },
  {
    time: '19:50',
    title: 'Panel 02 & QnA',
  },
  {
    time: '20:20',
    title: 'Award ceremony for Main track',
  },
  {
    time: '20:30',
    title: 'Networking with F&B',
  },
]

const CardAwardNight = () => {
  const width = useSelector(({ ui }: AppState) => ui.width)
  const isMobile = width < 992
  const padding = isMobile ? 24 : 56

  return (
    <Card
      style={{ background: '#26262B' }}
      bodyStyle={{ padding }}
      bordered={false}
    >
      <div className="wn-timeline">
        {data.map((item) => (
          <div className="wn-timeline-item">
            <Typography.Text type="secondary">{item.time}</Typography.Text>{' '}
            <Typography.Text>{item.title}</Typography.Text>
          </div>
        ))}
      </div>
      {!isMobile && (
        <div className="gradient-img-bg">
          <img src={bgImg} alt="bg" />
        </div>
      )}
    </Card>
  )
}

export default CardAwardNight
