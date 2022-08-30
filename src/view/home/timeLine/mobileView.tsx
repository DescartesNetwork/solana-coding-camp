import { Steps } from 'antd'
import CardTimeLine from './cardTimeLine'
import { TIME_LINE } from './wheelTimeLine'

const MobileView = () => {
  return (
    <Steps
      className="mobile-step-time-line"
      progressDot
      direction="vertical"
      current={2}
    >
      {TIME_LINE.map(({ date, icon, title }, idx) => (
        <Steps.Step
          title={
            <CardTimeLine
              date={date}
              icon={icon}
              title={title}
              size={56}
              levelSize={4}
              labelSize={16}
              active={idx === 2}
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
