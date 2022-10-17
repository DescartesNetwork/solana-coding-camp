import { Image, Typography } from 'antd'

import imgBanner from 'static/images/blogs/banner.png'

const Banner = () => {
  return (
    <div className="wrap-blogs-banner">
      <Image className="blogs-banner" src={imgBanner} preview={false} />
      <Typography.Title level={1} style={{ fontSize: 92 }}>
        Blogs
      </Typography.Title>
    </div>
  )
}

export default Banner
