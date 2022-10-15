import { useSelector } from 'react-redux'

import { AppState } from 'store'

import BgTimeline from 'static/images/timeline/bg-timeline'

const Container = () => {
  const language = useSelector((state: AppState) => state.languages.language)
  return <BgTimeline language={language} style={{ width: '100%' }} />
}

export default Container
