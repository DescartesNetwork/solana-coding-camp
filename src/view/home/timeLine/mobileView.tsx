import moment from 'moment'

import { Steps } from 'antd'
import CardTimeLine from './cardTimeLine'

import { TIME_LINE } from 'constant'

let activeIndex = 0

const MobileView = () => {
  const now = Date.now()

  return (
    <Steps
      className="mobile-step-time-line"
      progressDot
      direction="vertical"
      current={activeIndex}
    >
      {TIME_LINE.map(({ fromDate, toDate, icon, title }, idx) => {
        const active = moment(now).isBetween(fromDate, toDate)
        if (active) activeIndex = idx

        return (
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
                active={active}
                borderRadius={24}
                width="100%"
                height="auto"
                direction="vertical"
                padding={20}
              />
            }
            key={idx}
          />
        )
      })}
    </Steps>
  )
}

export default MobileView
