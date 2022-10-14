import { useSelector } from 'react-redux'
import { AppState } from 'store'

export const useWidth = () => {
  const width = useSelector((state: AppState) => state.ui.width)
  return width
}

export const useGap = () => {
  const gap = useSelector((state: AppState) => state.ui.gap)
  return gap
}
