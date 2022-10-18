import { CSSProperties, Fragment } from 'react'
import { Autoplay, Lazy } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Spin } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

import CardLogo from './cardLogo'
import { LazyOptions } from 'swiper/types'

type ImageSlideProps = { link?: string }
const ImageSlide = ({ link }: ImageSlideProps) => {
  return (
    <Fragment>
      <img className="sw-image swiper-lazy" data-src={link} alt="gallery" />
      <div className="sw-image-loading">
        <Spin indicator={<LoadingOutlined style={{ fontSize: 72 }} spin />} />
      </div>
    </Fragment>
  )
}

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
  rootPath?: string
  cardClassName?: string
  lazy?: LazyOptions
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
  rootPath = '',
  cardClassName,
  lazy = {
    loadPrevNextAmount: 1,
    loadPrevNext: true,
  },
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
      lazy={lazy}
      className="apps-slide-infinite"
    >
      {data.map((gallery, idx) => (
        <SwiperSlide key={idx} style={{ height }}>
          {wraped ? (
            <CardLogo className={cardClassName} src={rootPath + gallery} />
          ) : (
            <ImageSlide link={rootPath + gallery} />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default InfiniteSwiper
