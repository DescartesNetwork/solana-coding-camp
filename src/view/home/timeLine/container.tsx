import { useSelector } from 'react-redux'

import { AppState } from 'store'

import BgTimeline from 'static/images/timeline'
import { useWidth } from 'hooks/useUI'

const Container = () => {
  const language = useSelector((state: AppState) => state.languages.language)
  const width = useWidth()
  const isMobile = width < 992

  return (
    <BgTimeline
      isMobile={isMobile}
      language={language}
      style={{ width: '100%' }}
    />
  )
}

export default Container
