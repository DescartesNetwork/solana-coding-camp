import { useHistory, useLocation } from 'react-router-dom'

import { Button } from 'antd'

import { AGENDA_ID } from 'view/about/agenda'
import useLanguages from 'hooks/useLanguages'
import { useCallback } from 'react'

const ViewAgenda = () => {
  const history = useHistory()
  const { CTA } = useLanguages()
  const { hash } = useLocation()

  const onClick = useCallback(() => {
    const id = `#${AGENDA_ID}`
    if (hash !== id) return history.push(`/about/${id}`)

    const elmHash = document.querySelector(id)
    if (!!elmHash) return elmHash.scrollIntoView({ behavior: 'smooth' })
  }, [hash, history])

  return (
    <Button size="large" onClick={onClick}>
      {CTA.curriculum}
    </Button>
  )
}

export default ViewAgenda
