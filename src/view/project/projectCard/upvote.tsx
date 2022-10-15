import { MouseEvent, useCallback, useState } from 'react'

import { Button } from 'antd'
import IonIcon from '@sentre/antd-ionicon'

import { useDownvote, useUpvote, useUpvoters, useVoted } from 'hooks/useUpvote'

export type UpvoteProps = { name: string; voted?: boolean }

const Upvote = ({ name }: UpvoteProps) => {
  const [loading, setLoading] = useState(false)
  const upvote = useUpvote(name)
  const downvote = useDownvote(name)
  const { voters, refresh: refreshVoters } = useUpvoters(name)
  const { voted, refresh: refreshVoted } = useVoted(name)

  const refresh = useCallback(() => {
    refreshVoted()
    refreshVoters()
  }, [refreshVoted, refreshVoters])

  const onClick = useCallback(
    async (e: MouseEvent<HTMLElement>) => {
      try {
        e.stopPropagation()
        setLoading(true)
        if (!voted) await upvote()
        else await downvote()
        return refresh()
      } catch (er) {
        return console.log(er)
      } finally {
        return setLoading(false)
      }
    },
    [voted, upvote, downvote, refresh],
  )

  return (
    <Button
      type={voted ? 'default' : 'primary'}
      icon={<IonIcon name={voted ? 'heart' : 'heart-outline'} />}
      onClick={(e) => onClick(e)}
      loading={loading}
      block
    >
      {voted ? 'CANCEL' : 'UPVOTE'} {voters}
    </Button>
  )
}

export default Upvote
