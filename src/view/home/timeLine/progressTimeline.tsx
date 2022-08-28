import { Progress, ProgressProps } from 'antd'

type ProgressTimelineProps = {
  percent?: number
  color?: string
  success?: ProgressProps['success']
}
const ProgressTimeline = ({
  percent = 0,
  color = 'linear-gradient(260.05deg, #5A5FE0 9.9%, #9D96F8 31.77%, #B9F8FD 100%)',
  success,
}: ProgressTimelineProps) => {
  return (
    <Progress
      className="timeline-progress"
      percent={percent}
      strokeColor={color}
      success={success}
      showInfo={false}
    />
  )
}

export default ProgressTimeline
