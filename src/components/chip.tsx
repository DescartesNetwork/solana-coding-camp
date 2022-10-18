import { Tag } from 'antd'

import { randomColor } from 'helpers/util'

export type ChipProps = { title: string }

const Chip = ({ title }: ChipProps) => {
  const color = randomColor(`seed:${title}`)
  return <Tag color={color}>{title}</Tag>
}

export default Chip
