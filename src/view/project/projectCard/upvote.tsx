import { Button } from 'antd'
import IonIcon from '@sentre/antd-ionicon'
import { useUpvote, useUpvoters } from 'hooks/useUpvote'

export type UpvoteProps = { name: string; voted?: boolean }

const Upvote = ({ name, voted = false }: UpvoteProps) => {
  const upvote = useUpvote(name)
  const voters = useUpvoters(name)

  return (
    <Button
      type="primary"
      icon={<IonIcon name={voted ? 'heart' : 'heart-outline'} />}
      onClick={voted ? () => {} : upvote}
      block
    >
      UPVOTE {voters}
    </Button>
  )
}

export default Upvote
