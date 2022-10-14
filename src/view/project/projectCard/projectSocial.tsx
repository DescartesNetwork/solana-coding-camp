import { useCallback } from 'react'

import { Button } from 'antd'
import IonIcon from '@sentre/antd-ionicon'

export enum Social {
  Twitter = 'twitter',
  Discord = 'discord',
  Website = 'website',
  Github = 'github',
  Telegram = 'telegram',
  Facebook = 'facebook',
}

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
}

const ProjectSocial = ({ type, url }: ProjectSocialProps) => {
  const onClick = useCallback(() => {
    return window.open(url, '_blank')
  }, [url])

  return (
    <Button
      size="small"
      type="text"
      icon={<SocialLogo type={type} />}
      onClick={onClick}
    />
  )
}

export default ProjectSocial
