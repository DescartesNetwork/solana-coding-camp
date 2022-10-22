import { Card, Space, Typography } from 'antd'
import { CSSProperties } from 'react'

export type CardComingSoonProps = {
  label?: string
  style?: CSSProperties
  bodyStyle?: CSSProperties
  description?: string
}
const CardComingSoon = ({
  label = 'Coming soon',
  style,
  bodyStyle,
  description,
}: CardComingSoonProps) => {
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
        ...style,
      }}
      bodyStyle={{
        display: 'flex',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 324,
        ...bodyStyle,
      }}
      bordered={false}
    >
      <Space direction="vertical" style={{ textAlign: 'center' }}>
        <Typography.Text style={{ fontSize: 22, color: '#000' }}>
          {label}
        </Typography.Text>
        {description && (
          <Typography.Text style={{ color: '#000' }}>
            {description}
          </Typography.Text>
        )}
      </Space>
    </Card>
  )
}

export default CardComingSoon
