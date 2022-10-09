import { CSSProperties, ReactNode, useMemo } from 'react'

import { Card } from 'antd'

const ACTIVE_CLN = 'active'
const POINTER_CLN = 'pointer'
const DEFAULT_CLN = 'card-faq'

export type CardFAQProps = {
  active?: boolean
  style?: CSSProperties
  children?: ReactNode
  onClick?: () => void
  bodyStyle?: CSSProperties
}
const CardFAQ = ({
  active = false,
  style,
  children,
  onClick,
  bodyStyle,
}: CardFAQProps) => {
  const getCardCln = useMemo(() => {
    const arrCln: string[] = [DEFAULT_CLN]
    if (active) arrCln.push(ACTIVE_CLN)
    if (onClick) arrCln.push(POINTER_CLN)
    return arrCln.join(' ')
  }, [active, onClick])

  return (
    <Card
      className={getCardCln}
      style={{ height: '100%', ...style }}
      bodyStyle={bodyStyle}
      onClick={onClick}
    >
      {children}
    </Card>
  )
}

export default CardFAQ
