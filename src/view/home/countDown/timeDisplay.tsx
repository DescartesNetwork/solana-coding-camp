import {
  CSSProperties,
  Fragment,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react'
import moment from 'moment'

import { Space, Typography } from 'antd'

const END_DATE = '11/13/2022 23:59:59'
const END_TIME_ISO = new Date(END_DATE).getTime()
const ENDTIME_LOCAL = END_TIME_ISO - new Date(END_TIME_ISO).getTimezoneOffset()

type TimeTagProps = {
  children?: ReactNode
  style?: CSSProperties
  label?: string
}
const TimeTag = ({ children, style, label = '' }: TimeTagProps) => {
  return (
    <Space direction="vertical" size={0} style={{ ...style }}>
      <Typography.Title level={1} style={{ color: '#000' }}>
        {children}
      </Typography.Title>
      <Typography.Text style={{ fontSize: 16, color: '#000' }}>
        {label}
      </Typography.Text>
    </Space>
  )
}

const TimeDisplay = () => {
  const currentTime = Date.now() - new Date().getTimezoneOffset()
  const duration = moment.duration(ENDTIME_LOCAL - currentTime, 'milliseconds')

  const [countDown, setCountDown] = useState({
    days: Math.floor(duration.asDays()),
    hours: duration.hours(),
    minutes: duration.minutes(),
    seconds: duration.seconds(),
  })

  const updateCountDown = useCallback(async () => {
    if (!ENDTIME_LOCAL || ENDTIME_LOCAL < currentTime) return

    const duration = moment.duration(
      ENDTIME_LOCAL - currentTime,
      'milliseconds',
    )
    const days = Math.floor(duration.asDays())
    const hours = duration.hours()
    const minutes = duration.minutes()
    const seconds = duration.seconds()
    setCountDown({ days, hours, minutes, seconds })
  }, [currentTime])

  useEffect(() => {
    const interval = setInterval(() => updateCountDown(), 1000)
    return () => clearInterval(interval)
  }, [updateCountDown])
  return (
    <Space size={48} style={{ textAlign: 'center' }}>
      {!!countDown.days && (
        <Fragment>
          <TimeTag label="Days">{countDown.days}</TimeTag>
        </Fragment>
      )}
      <TimeTag label="Hours">{countDown.hours}</TimeTag>
      <TimeTag label="Minutes">{countDown.minutes}</TimeTag>
      {!countDown.days && (
        <Fragment>
          <TimeTag label="Seconds">{countDown.seconds}</TimeTag>
        </Fragment>
      )}
    </Space>
  )
}

export default TimeDisplay
