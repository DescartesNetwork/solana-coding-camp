import { useCallback } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { Button } from 'antd'

import useLanguages from 'hooks/useLanguages'
import { AWARD_NIGHT_ID } from 'view/awardNight/container'

const ViewAgenda = () => {
  const history = useHistory()
  const { CTA } = useLanguages()
  const { hash } = useLocation()

  const onClick = useCallback(() => {
    const id = `#${AWARD_NIGHT_ID}`
    if (hash !== id) return history.push(`/award-night/${id}`)

    const elmHash = document.querySelector(id)
    if (!!elmHash) return elmHash.scrollIntoView({ behavior: 'smooth' })
  }, [hash, history])

  return (
    <Button
      size="large"
      style={{ textTransform: 'uppercase' }}
      onClick={onClick}
    >
      {CTA.curriculum}
    </Button>
  )
}

export default ViewAgenda
