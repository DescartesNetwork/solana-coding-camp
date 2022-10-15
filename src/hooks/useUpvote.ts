import { useCallback, useEffect, useState } from 'react'
import { encode } from 'bs58'
import { uid } from '@sentre/codingcamp'

import configs from 'configs'
import { useCodingCamp } from './useCodingCamp'

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
  const [refreshing, setRefreshing] = useState(1)
  const codingcamp = useCodingCamp()

  useEffect(() => {
    ;(async () => {
      console.info(`Refresh ${projectName} ${refreshing} times`)
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
  }, [codingcamp, projectName, refreshing])

  const refresh = useCallback(() => {
    return setRefreshing(refreshing + 1)
  }, [refreshing, setRefreshing])

  return { voted, refresh }
}

export const useUpvoters = (projectName: string) => {
  const id = getProjectId(projectName)
  console.log(id)
  return 0
}
