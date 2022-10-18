import { useCallback, useEffect, useState } from 'react'
import { encode } from 'bs58'
import { uid } from '@sentre/codingcamp'

import configs from 'configs'
import { useCodingCamp } from './useCodingCamp'
import { useBallots, useMyBallots } from './useBallots'
import { useWallet } from '@solana/wallet-adapter-react'

const {
  voting: { campaign },
} = configs

export const getProjectId = (projectName: string) => {
  return encode(uid(projectName))
}

export const useUpvote = (projectName: string) => {
  const codingcamp = useCodingCamp()
  const cb = useCallback(async () => {
    return await codingcamp.vote(campaign, projectName)
  }, [codingcamp, projectName])
  return cb
}

export const useDownvote = (projectName: string) => {
  const codingcamp = useCodingCamp()
  const cb = useCallback(async () => {
    return await codingcamp.void(campaign, projectName)
  }, [codingcamp, projectName])
  return cb
}

export const useVoted = (projectName: string) => {
  const [voted, setVoted] = useState(false)
  const { publicKey } = useWallet()
  const myBallots = useMyBallots(publicKey?.toBase58() || '')

  useEffect(() => {
    const projectId = getProjectId(projectName)
    for (const { project } of myBallots) {
      if (project === projectId) return setVoted(true)
    }
    return setVoted(false)
  }, [projectName, myBallots])

  return voted
}

export const useUpvoters = (projectName: string) => {
  const [voters, setVoters] = useState(0)
  const ballots = useBallots()

  useEffect(() => {
    const projectId = getProjectId(projectName)
    let voters = 0
    ballots.forEach(({ project }) => {
      if (project === projectId) voters = voters + 1
    })
    return setVoters(voters)
  }, [projectName, ballots])

  return voters
}
