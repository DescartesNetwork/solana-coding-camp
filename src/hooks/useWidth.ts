import { useSelector } from 'react-redux'
import { AppState } from 'store'

const useWidth = () => {
  const width = useSelector((state: AppState) => state.ui.width)
  return width
}

export default useWidth
