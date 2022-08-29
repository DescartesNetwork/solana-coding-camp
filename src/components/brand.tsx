import { CSSProperties } from 'react'
import { Image } from 'antd'

import imgBrand from 'static/images/logo/brand.svg'
import imgBrandDark from 'static/images/logo/brand-black.svg'

type BrandProps = {
  lite?: boolean
  style?: CSSProperties
  width?: number
  height?: number
  dark?: boolean
}
const Brand = ({
  style,
  lite = false,
  width = 150,
  height = 40,
  dark = false,
}: BrandProps) => {
  const imgSrc = dark ? imgBrandDark : imgBrand
  return (
    <Image
      style={style}
      src={imgSrc}
      width={width}
      height={height}
      alt="brand"
      preview={false}
    />
  )
}

export default Brand
