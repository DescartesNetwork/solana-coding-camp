import { useCallback, useEffect, useState, WheelEvent } from 'react'

import CardTimeLine from './cardTimeLine'
import ProgressTimeline from './progressTimeline'

const TIME_LINE = new Array(9).fill('')

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
          maxWidth: 1200,
          width: '100%',
          overflow: 'hidden',
          alignItems: 'center',
          gap: 8,
        }}
        id="timeline_wheel"
      >
        {TIME_LINE.map((_, idx) => {
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
              <CardTimeLine active={activeIndex + 1 === idx} />
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
