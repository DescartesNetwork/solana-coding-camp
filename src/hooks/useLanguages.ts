import { useSelector } from 'react-redux'
import { AppState } from 'store'

const useLanguages = () => {
  const system = useSelector((state: AppState) => state.languages.system)
  return system
}

export default useLanguages
