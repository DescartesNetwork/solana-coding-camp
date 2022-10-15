import { encode } from 'bs58'
import CodingCamp, { uid } from '@sentre/codingcamp'
import { useAnchorWallet } from '@solana/wallet-adapter-react'
import configs from 'configs'
import { useCallback, useEffect, useState } from 'react'

const {
  voting: { cluster, campaign },
} = configs

export const getProjectId = (projectName: string) => {
  return encode(uid(projectName))
}

export const useUpvote = (projectName: string) => {
  const wallet = useAnchorWallet()
  const cb = useCallback(async () => {
    if (!wallet) return
    const codingcamp = new CodingCamp(wallet, cluster)
    return await codingcamp.vote(campaign, projectName)
  }, [wallet, projectName])
  return cb
}

export const useDownvote = (projectName: string) => {
  const wallet = useAnchorWallet()
  const cb = useCallback(async () => {
    if (!wallet) return
    const codingcamp = new CodingCamp(wallet, cluster)
    return await codingcamp.void(campaign, projectName)
  }, [wallet, projectName])
  return cb
}

export const useVoted = (projectName: string) => {
  const [voted, setVoted] = useState(false)
  const wallet = useAnchorWallet()

  useEffect(() => {
    ;(async () => {
      if (!wallet) return setVoted(false)
      const codingcamp = new CodingCamp(wallet, cluster)
      try {
        const ballotAddress = await codingcamp.deriveBallotAddress(
          campaign,
          projectName,
        )
        const data = await codingcamp.getBallotData(ballotAddress)
        if (data) return setVoted(true)
        throw new Error('Not voted yet')
      } catch (er) {
        return setVoted(false)
      }
    })()
  }, [wallet, projectName])

  return voted
}

export const useUpvoters = (projectName: string) => {
  const id = getProjectId(projectName)
  console.log(id)
  return 0
}
