import { Card, Typography } from 'antd'

const CardComingSoon = () => {
  return (
    <Card
      className="card-coming-soon"
      style={{
        height: '100%',
        background: `linear-gradient(
        260.05deg,
        rgba(90, 95, 224, 0.9) 9.9%,
        rgba(157, 150, 248, 0.9) 31.77%,
        rgba(185, 248, 253, 0.9) 100%
      )`,
        backdropFilter: 'blur(10px)',
      }}
      bodyStyle={{
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 324,
      }}
      bordered={false}
    >
      <Typography.Text style={{ fontSize: 22, color: '#000' }}>
        Coming soon
      </Typography.Text>
    </Card>
  )
}

export default CardComingSoon