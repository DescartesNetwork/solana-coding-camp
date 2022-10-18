import { CSSProperties, ReactNode, useMemo } from 'react'

import { Card, CardProps } from 'antd'
import { TabsKey } from 'constant'

const COLOR_BASE = {
  [TabsKey.WhyJoin]: '#DA61B8',
  [TabsKey.WhoCanJoin]: '#80ECFF',
  [TabsKey.HowToJoin]: '#EE7C56',
}

export type CardFAQProps = {
  active?: boolean
  style?: CSSProperties
  children?: ReactNode
  onClick?: () => void
  bodyStyle?: CSSProperties
  cardKey?: TabsKey
  bordered?: CardProps['bordered']
}
const CardFAQ = ({
  active = false,
  style,
  children,
  onClick,
  bodyStyle,
  cardKey,
}: CardFAQProps) => {
  const activeStyle = useMemo(
    () =>
      active
        ? {
            background: COLOR_BASE[cardKey || TabsKey.WhyJoin],
            color: '#000',
          }
        : { color: COLOR_BASE[cardKey || TabsKey.WhyJoin] },
    [active, cardKey],
  )

  return (
    <Card
      className="card-faq pointer"
      style={{
        height: '100%',
        border: `1px solid ${COLOR_BASE[cardKey || TabsKey.WhyJoin]}`,
        ...activeStyle,
        ...style,
      }}
      bodyStyle={bodyStyle}
      onClick={onClick}
    >
      {children}
    </Card>
  )
}

export default CardFAQ
