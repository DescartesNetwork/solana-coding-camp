import moment from 'moment'

import { Steps } from 'antd'
import CardTimeLine from './cardTimeLine'

import { TIME_LINE } from 'constant'

const MobileView = () => {
  const now = Date.now()

  return (
    <Steps
      className="mobile-step-time-line"
      progressDot
      direction="vertical"
      current={2}
    >
      {TIME_LINE.map(({ fromDate, toDate, icon, title }, idx) => (
        <Steps.Step
          title={
            <CardTimeLine
              icon={icon}
              title={title}
              fromDate={fromDate}
              toDate={toDate}
              size={56}
              levelSize={4}
              labelSize={16}
              active={moment(now).isBetween(fromDate, toDate)}
              borderRadius={24}
              width="100%"
              height="auto"
              direction="vertical"
              padding={20}
            />
          }
          key={idx}
        />
      ))}
    </Steps>
  )
}

export default MobileView
