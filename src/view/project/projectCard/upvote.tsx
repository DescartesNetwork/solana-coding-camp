import { MouseEvent, useCallback, useState } from 'react'

import { Button } from 'antd'
import IonIcon from '@sentre/antd-ionicon'

import { useDownvote, useUpvote, useUpvoters, useVoted } from 'hooks/useUpvote'
import useLanguages from 'hooks/useLanguages'

export type UpvoteProps = { name: string; voted?: boolean }

const Upvote = ({ name }: UpvoteProps) => {
  const [loading, setLoading] = useState(false)
  const upvote = useUpvote(name)
  const downvote = useDownvote(name)
  const voters = useUpvoters(name)
  const voted = useVoted(name)
  const { project } = useLanguages()

  const onClick = useCallback(
    async (e: MouseEvent<HTMLElement>) => {
      try {
        e.stopPropagation()
        setLoading(true)
        if (!voted) await upvote()
        else await downvote()
      } catch (er) {
        return console.log(er)
      } finally {
        return setLoading(false)
      }
    },
    [voted, upvote, downvote],
  )

  return (
    <Button
      type={voted ? 'default' : 'primary'}
      icon={<IonIcon name={voted ? 'heart' : 'heart-outline'} />}
      onClick={(e) => onClick(e)}
      loading={loading}
      block
    >
      {voted ? project.cancel : project.upvote} {voters}
    </Button>
  )
}

export default Upvote
