import { Card, Typography } from 'antd'
import { useSelector } from 'react-redux'
import { AppState } from 'store'

import bgImg from 'static/images/ranking/glass-3.png'

const data = {
  en: [
    { time: ' 18:00 - 18:30', title: 'Welcome guests' },
    {
      time: '18:30 - 18:40',
      title: 'Introduction & Solana keynote speaker: Anh Tran',
    },
    {
      time: '18:40 - 18:45',
      title: 'Outstanding Individual & Excellent UX/UI prizes',
    },
    { time: '18:45 - 18:50', title: 'Ancient8 keynote speaker: Zane' },
    {
      time: '18:50 - 18:55',
      title: 'Saros Finance keynote speaker: Ken Nguyen',
    },
    { time: '18:55 - 19:00', title: 'Award Ceremony for DeFi & GameFi tracks' },
    {
      time: '19:00 - 19:20',
      title: `Panel #1: The crypto market - A real conversation with today Vietnam Top 3 web3 CEO
        Moderator: Minh Thach (Superteam Vietnam)`,
    },
    {
      time: '19:20 - 19:30',
      title: 'Award ceremony for U20 track',
    },
    {
      time: '19:30 - 19:50',
      title: `Panel #2: How are you spending your money in today market?
        Moderator: Hieu Bui (Superteam Vietnam)`,
    },
    {
      time: '19:50 - 20:00',
      title: 'Award ceremony for Main track',
    },
    { time: '20:00 - 22:30', title: 'Networking with F&B' },
  ],
  vn: [
    { time: ' 18:00 - 18:30', title: 'Đón khách' },
    {
      time: '18:30 - 18:40',
      title: 'Giới thiệu chương trình & Solana keynote speaker: Anh Tran',
    },
    {
      time: '18:40 - 18:45',
      title: 'Trao giải cá nhân & giải UX/UI xuất sắc nhất',
    },
    { time: '18:45 - 18:50', title: 'Ancient8 keynote speaker: Zane' },
    {
      time: '18:50 - 18:55',
      title: 'Saros Finance keynote speaker: Ken Nguyen',
    },
    { time: '18:55 - 19:00', title: 'Trao giải  DeFi & GameFi tracks' },
    {
      time: '19:00 - 19:20',
      title: `Panel #1: The crypto market - A real conversation with today Vietnam Top 3 web3 CEO
      Moderator: Minh Thach  (Superteam Vietnam)`,
    },
    {
      time: '19:20 - 19:30',
      title: 'Trao giải U20 track',
    },
    {
      time: '19:30 - 19:50',
      title: `Panel #2: How are you spending your money in today market?
      Moderator: Hieu Bui (Superteam Vietnam)`,
    },
    {
      time: '19:50 - 20:00',
      title: 'Trao giải Main track',
    },
    {
      time: '20:00 - 22:30',
      title: 'Gặp gỡ, giao lưu cùng F&B tại chương trình',
    },
  ],
}

const CardAwardNight = () => {
  const width = useSelector(({ ui }: AppState) => ui.width)
  const { language } = useSelector((state: AppState) => state.languages)

  const isMobile = width < 992
  const padding = isMobile ? 24 : 56

  return (
    <Card
      style={{ background: '#26262B' }}
      bodyStyle={{ padding }}
      bordered={false}
    >
      <div
        style={{ maxWidth: isMobile ? 'unset' : '70%' }}
        className="wn-timeline"
      >
        {data[language].map((item) => (
          <div className="wn-timeline-item">
            <Typography.Text type="secondary">{item.time}</Typography.Text>{' '}
            <Typography.Text style={{ fontSize: 20 }}>
              {item.title}
            </Typography.Text>
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
