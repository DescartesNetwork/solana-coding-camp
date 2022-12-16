// import { Typography } from 'antd'

const Banner = () => {
  return (
    <div className="wrap-blogs-banner">
      <iframe
        className="blogs-banner"
        src="https://www.youtube.com/embed/aRgUx4shcyk?autoplay=1&loop=1&rel=0&controls=0&vq=hd1080&mute=1&playlist=aRgUx4shcyk"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;allowfullscreen=1"
        allowFullScreen
        frameBorder={0}
      />
      {/* <Typography.Title level={1} style={{ fontSize: 92 }}>
        Award Night Agenda
      </Typography.Title> */}
    </div>
  )
}

export default Banner
