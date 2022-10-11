import { useSelector } from 'react-redux'
import BgTimeline from 'static/images/timeline/bg-timeline'
import { AppState } from 'store'

const Container = () => {
  const language = useSelector((state: AppState) => state.languages.language)
  return <BgTimeline language={language} style={{ width: '100%' }} />
}

export default Container
