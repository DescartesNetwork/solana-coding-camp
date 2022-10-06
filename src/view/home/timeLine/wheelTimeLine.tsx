import moment from 'moment'
import { useCallback, useEffect, useState, WheelEvent } from 'react'

import CardTimeLine from './cardTimeLine'
import ProgressTimeline from './progressTimeline'

import useWidth from 'hooks/useWidth'
import { MAX_WIDTH, TIME_LINE } from 'constant'

const TIMELINE_WHEEL_ID = 'timeline_wheel'
const TIMELINE_WHEEL_ITEM_ID = 'timeline_wheel_item_'
const DEFAULT_ACTIVE_CLN = 'timeline_wheel_item_default_active'

const WheelTimeLine = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const width = useWidth()
  const unDeskop = width < 1200
  const progressMinWidth = unDeskop ? 150 : 250

  const getDefaultActiveCln = useCallback(
    (fromDate: string, toDate?: string) => {
      const now = Date.now()
      if (!moment(now).isBetween(fromDate, toDate)) return ''
      return DEFAULT_ACTIVE_CLN
    },
    [],
  )

  const stopScroll = useCallback((evt: WheelEvent) => {
    if (!evt) return
    evt.preventDefault()
  }, [])

  const onWheel = useCallback(
    (e) => {
      const elm = document.getElementById(TIMELINE_WHEEL_ID)

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
        TIMELINE_WHEEL_ITEM_ID,
      )
      nextTimeline.forEach((timeline_id, idx) => {
        const detectElm = document.getElementById(timeline_id + idx)
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
    const elm = document.getElementById(TIMELINE_WHEEL_ID)
    if (!elm) return

    elm.addEventListener('wheel', onWheel)
    return () => elm.removeEventListener('wheel', onWheel)
  }, [onWheel])

  useEffect(() => {
    const elm = document.getElementById(TIMELINE_WHEEL_ID)
    const defaultActiveElm = document.querySelector(`.${DEFAULT_ACTIVE_CLN}`)
    if (!elm || !defaultActiveElm) return

    const windowWidth = window.innerWidth
    const parentWidth = elm.clientWidth
    const offsetBrowser =
      windowWidth > parentWidth ? (windowWidth - parentWidth) / 2 : 0
    const boundingElm = defaultActiveElm.getBoundingClientRect()
    elm.scrollTo({
      left: boundingElm.left - offsetBrowser,
      behavior: 'smooth',
    })
  }, [])

  return (
    <div
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
        id={TIMELINE_WHEEL_ID}
      >
        {TIME_LINE.map(({ icon, title, fromDate, toDate }, idx) => {
          const percent = activeIndex >= idx ? 100 : 0
          const defaultActiveCln = getDefaultActiveCln(fromDate, toDate)

          return (
            <div
              id={`timeline_wheel_item_${idx}`}
              style={{
                display: 'flex',
                flexFlow: 'row',
                alignItems: 'center',
                gap: 8,
              }}
              className={defaultActiveCln}
              key={idx}
            >
              <CardTimeLine
                title={title}
                fromDate={fromDate}
                toDate={toDate}
                icon={icon}
                active={activeIndex + 1 === idx}
              />
              {idx + 1 < TIME_LINE.length && (
                <div style={{ minWidth: progressMinWidth }} key={idx}>
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
