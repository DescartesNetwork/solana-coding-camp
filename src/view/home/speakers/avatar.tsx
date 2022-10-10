import { CSSProperties } from 'react'

import { Image } from 'antd'

type AvatarProps = {
  src?: string
  radius?: number | string
  size?: number
  borderWidth?: number
  borderColor?: string
  style?: CSSProperties
  center?: boolean
}
const Avatar = ({
  src = '',
  radius = '50%',
  size = 160,
  borderWidth = 6,
  borderColor = 'linear-gradient(260.05deg, #5A5FE0 9.9%, #9D96F8 31.77%, #B9F8FD 100%)',
  style,
  center = false,
}: AvatarProps) => {
  const avatarStyle = {
    borderRadius: radius,
    width: size,
    height: size,
    overflow: 'hidden',
    padding: borderWidth,
    background: borderColor,
    margin: center ? 'auto' : undefined,
  }
  return (
    <div style={{ ...avatarStyle, ...style }}>
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#fff',
          borderRadius: '100%',
          overflow: 'hidden',
        }}
      >
        <Image src={src} height="100%" alt="avatar" preview={false} />
      </div>
    </div>
  )
}

export default Avatar
