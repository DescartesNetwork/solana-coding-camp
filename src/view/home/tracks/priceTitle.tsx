import { CSSProperties, ReactNode } from 'react'

import { Typography } from 'antd'

const COLOR_BASE = ['#764FFF', '#66CC33']

export type PriceTitleProps = {
  style?: CSSProperties
  index?: number
  children?: ReactNode
}

const PriceTitle = ({ style, index = 0, children }: PriceTitleProps) => {
  const localStyle = { color: COLOR_BASE[index], fontSize: 72, fontWeight: 800 }
  return (
    <Typography.Title style={{ ...localStyle, ...style }}>
      {children}
    </Typography.Title>
  )
}

export default PriceTitle
