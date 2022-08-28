import { Autoplay, Lazy } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Image } from 'antd'
import CardLogo from './cardLogo'
import { CSSProperties } from 'react'

type InfiniteSwiperProps = {
  perViews?: number
  spacing?: number
  autoplay?: boolean
  speed?: number
  loop?: boolean
  data?: string[]
  height?: CSSProperties['height']
  reverse?: boolean
  wraped?: boolean
}
const InfiniteSwiper = ({
  autoplay = true,
  perViews = 4,
  spacing = 0,
  speed = 9000,
  loop = false,
  data = [],
  height = 240,
  reverse = true,
  wraped = false,
}: InfiniteSwiperProps) => {
  const configAutoplay = {
    delay: 0,
    disableOnInteraction: false,
    reverseDirection: reverse,
  }

  return (
    <Swiper
      modules={[Autoplay, Lazy]}
      slidesPerView={perViews}
      spaceBetween={spacing}
      autoplay={autoplay ? configAutoplay : autoplay}
      speed={speed}
      loop={loop}
      className="apps-slide-infinite"
    >
      {data.map((gallery, idx) => (
        <SwiperSlide key={idx} style={{ height }}>
          {wraped ? (
            <CardLogo src={gallery} />
          ) : (
            <Image src={gallery} alt="gallery" preview={false} />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default InfiniteSwiper
