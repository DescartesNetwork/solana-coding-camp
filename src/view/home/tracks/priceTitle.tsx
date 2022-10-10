import { CSSProperties, ReactNode } from 'react'

import { Typography } from 'antd'

export type PriceTitleProps = {
  style?: CSSProperties
  color?: string
  children?: ReactNode
}

const PriceTitle = ({ style, color = '', children }: PriceTitleProps) => {
  const localStyle = { color, fontSize: 72, fontWeight: 800 }
  return (
    <Typography.Title style={{ ...localStyle, ...style }}>
      {children}
    </Typography.Title>
  )
}

export default PriceTitle
