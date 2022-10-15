import { MouseEvent, useCallback } from 'react'

import { Button } from 'antd'
import IonIcon from '@sentre/antd-ionicon'

import { useDownvote, useUpvote, useUpvoters, useVoted } from 'hooks/useUpvote'
import { useWallet } from '@solana/wallet-adapter-react'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'

export type UpvoteProps = { name: string; voted?: boolean }

const Upvote = ({ name }: UpvoteProps) => {
  const { setVisible } = useWalletModal()
  const { publicKey } = useWallet()
  const upvote = useUpvote(name)
  const downvote = useDownvote(name)
  const voters = useUpvoters(name)
  const voted = useVoted(name)

  const onClick = useCallback(
    async (e: MouseEvent<HTMLElement>) => {
      e.stopPropagation()
      if (!publicKey) return setVisible(true)
      if (!voted) return await upvote()
      return await downvote()
    },
    [publicKey, setVisible, voted, upvote, downvote],
  )

  return (
    <Button
      type="primary"
      icon={<IonIcon name={voted ? 'heart' : 'heart-outline'} />}
      onClick={(e) => onClick(e)}
      block
    >
      {voted ? 'CANCEL' : 'UPVOTE'} {voters}
    </Button>
  )
}

export default Upvote
