import { CSSProperties, ReactNode } from 'react'

import { Card, Image } from 'antd'

type CardLogoProps = {
  src?: string
  width?: number
  style?: CSSProperties
  children?: ReactNode
}
const CardLogo = ({
  src = '',
  width = 240,
  style,
  children = <Image src={src} width={width} alt="partner" preview={false} />,
}: CardLogoProps) => {
  return (
    <Card
      style={{
        background: '#26262B',
        borderRadius: 24,
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
        ...style,
      }}
      bordered={false}
    >
      {children}
    </Card>
  )
}

export default CardLogo
