import { MouseEvent, useCallback, useMemo } from 'react'

import { Button } from 'antd'
import IonIcon from '@sentre/antd-ionicon'
import { Social } from 'store/projects.reducer'
import { capitalize } from 'helpers/util'

export const SocialLogo = ({ type }: { type: Social | string }) => {
  switch (type) {
    case Social.Twitter:
      return <IonIcon name="logo-twitter" />
    case Social.Discord:
      return <IonIcon name="logo-discord" />
    case Social.Website:
      return <IonIcon name="globe-outline" />
    case Social.Github:
      return <IonIcon name="logo-github" />
    case Social.Telegram:
      return <IonIcon name="logo-telegram" />
    case Social.Facebook:
      return <IonIcon name="logo-facebook" />
    default:
      return <IonIcon name="bookmark" />
  }
}

export type ProjectSocialProps = {
  type: Social
  url: string
  lengthy?: boolean
}

const ProjectSocial = ({ type, url, lengthy = false }: ProjectSocialProps) => {
  const onClick = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      e.stopPropagation()
      return window.open(url, '_blank')
    },
    [url],
  )

  const title = useMemo(() => {
    if (!lengthy) return undefined
    return capitalize(type)
  }, [lengthy, type])

  return (
    <Button
      size="small"
      type="text"
      icon={<SocialLogo type={type} />}
      onClick={onClick}
      disabled={!url}
    >
      {title}
    </Button>
  )
}

export default ProjectSocial
