import { CSSProperties } from 'react'
import { Button, Image } from 'antd'

import imgBrand from 'static/images/logo/brand.svg'
import imgBrandDark from 'static/images/logo/brand-black.svg'
import { useHistory } from 'react-router-dom'

type BrandProps = {
  lite?: boolean
  style?: CSSProperties
  width?: number
  height?: number
  dark?: boolean
}
const Brand = ({
  style,
  width = 150,
  height = 40,
  dark = false,
}: BrandProps) => {
  const history = useHistory()

  const imgSrc = dark ? imgBrandDark : imgBrand

  return (
    <Button
      type="text"
      style={{
        width: 'auto',
        height: 'auto',
        padding: 0,
        background: 'transparent',
      }}
      onClick={() => history.push('/home')}
    >
      <Image
        style={style}
        src={imgSrc}
        width={width}
        height={height}
        alt="brand"
        preview={false}
      />
    </Button>
  )
}

export default Brand
