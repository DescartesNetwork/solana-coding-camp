import { MouseEvent, useCallback } from 'react'

import { Button } from 'antd'
import IonIcon from '@sentre/antd-ionicon'

import { useUpvote, useUpvoters } from 'hooks/useUpvote'
import { useWallet } from '@solana/wallet-adapter-react'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'

export type UpvoteProps = { name: string; voted?: boolean }

const Upvote = ({ name, voted = false }: UpvoteProps) => {
  const { setVisible } = useWalletModal()
  const { publicKey } = useWallet()
  const upvote = useUpvote(name)
  const voters = useUpvoters(name)

  const onClick = useCallback(
    (e: MouseEvent<HTMLElement>) => {
      e.stopPropagation()
      if (!publicKey) return setVisible(true)
      if (voted) return upvote()
      return null
    },
    [publicKey, setVisible, voted, upvote],
  )

  return (
    <Button
      type="primary"
      icon={<IonIcon name={voted ? 'heart' : 'heart-outline'} />}
      onClick={(e) => onClick(e)}
      block
    >
      UPVOTE {voters}
    </Button>
  )
}

export default Upvote
