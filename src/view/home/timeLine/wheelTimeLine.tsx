import { useCallback, useEffect, useState, WheelEvent } from 'react'

import CardTimeLine from './cardTimeLine'
import ProgressTimeline from './progressTimeline'

import { MAX_WIDTH } from 'constant'
import pen from 'static/images/timeline/pen.svg'
import people from 'static/images/timeline/people.svg'
import send from 'static/images/timeline/send.svg'
import recorder from 'static/images/timeline/recorder.svg'
import cup from 'static/images/timeline/cup.svg'
import coin from 'static/images/timeline/coin.svg'

const TIME_LINE = [
  { title: 'Registration form', date: '22 Aug - 13 Sep', icon: pen },
  { title: 'Workshops series', date: '19 Sep - 14 Nov', icon: people },
  { title: 'DApp submission', date: '20 Nov', icon: send },
  { title: 'Demo day', date: '22 Nov - 23 Nov', icon: recorder },
  { title: 'Award night', date: '26 Nov', icon: cup },
  { title: 'Solana VentureHop', date: '05 Dec', icon: coin },
]

const WheelTimeLine = () => {
  const [activeIndex, setActiveIndex] = useState(1)
  const stopScroll = useCallback((evt: WheelEvent) => {
    if (!evt) return
    evt.stopPropagation()
    evt.preventDefault()
    return false
  }, [])

  const onWheel = useCallback(
    (e) => {
      const elm = document.getElementById('timeline_wheel')

      if (!e || e.deltaY === 0 || !elm) return
      const windowWidth = window.innerWidth
      const parentWidth = elm.clientWidth
      const offsetBrowser =
        windowWidth > parentWidth ? (windowWidth - parentWidth) / 2 : 0
      const wheelDown = e.deltaY > 0
      if (
        (wheelDown && activeIndex + 2 < TIME_LINE.length) ||
        (!wheelDown && activeIndex > 0)
      )
        stopScroll(e)

      elm.scrollLeft += e.deltaY

      const nextTimeline: string[] = new Array(TIME_LINE.length).fill(
        'timeline_wheel_item_',
      )
      nextTimeline.forEach((item, idx) => {
        const detectElm = document.getElementById(item + idx)
        const boundingElm = detectElm?.getBoundingClientRect()

        if (!detectElm || !boundingElm) return
        const elmOffsetLeft = boundingElm?.left

        if (
          elmOffsetLeft > offsetBrowser - 428 &&
          elmOffsetLeft < offsetBrowser + 250
        ) {
          setActiveIndex(idx)
          elm.scrollTo({
            left: detectElm.offsetLeft - offsetBrowser - 15,
            behavior: 'smooth',
          })
        }
      })
    },
    [activeIndex, stopScroll],
  )

  useEffect(() => {
    const elm = document.getElementById('timeline_wheel')
    if (!elm) return

    elm.addEventListener('wheel', onWheel)
    return () => elm.removeEventListener('wheel', onWheel)
  }, [onWheel])

  return (
    <div
      // onWheel={onWheel}
      style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'nowrap',
          maxWidth: MAX_WIDTH,
          width: '100%',
          overflow: 'hidden',
          alignItems: 'center',
          gap: 8,
        }}
        id="timeline_wheel"
      >
        {TIME_LINE.map(({ date, icon, title }, idx) => {
          const percent = activeIndex >= idx ? 100 : 0
          return (
            <div
              id={`timeline_wheel_item_${idx}`}
              style={{
                display: 'flex',
                flexFlow: 'row',
                alignItems: 'center',
                gap: 8,
              }}
              key={idx}
            >
              <CardTimeLine
                title={title}
                date={date}
                icon={icon}
                active={activeIndex + 1 === idx}
              />
              {idx + 1 < TIME_LINE.length && (
                <div style={{ minWidth: 250 }} key={idx}>
                  <ProgressTimeline percent={percent} />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WheelTimeLine
