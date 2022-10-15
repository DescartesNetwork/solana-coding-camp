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
  const [refreshing, setRefreshing] = useState(false)
  const codingcamp = useCodingCamp()

  useEffect(() => {
    ;(async () => {
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
      } finally {
        if (refreshing) return setRefreshing(false)
      }
    })()
  }, [codingcamp, projectName, refreshing])

  const refresh = useCallback(() => {
    if (!refreshing) return setRefreshing(true)
  }, [refreshing])

  return { voted, refresh }
}

export const useUpvoters = (projectName: string) => {
  const [voters, setVoters] = useState(0)
  const [refreshing, setRefreshing] = useState(false)
  const codingcamp = useCodingCamp()

  useEffect(() => {
    ;(async () => {
      try {
        const data = await codingcamp.getTotalVotersForProject(
          campaign,
          projectName,
        )
        return setVoters(data)
      } catch (er) {
        return setVoters(0)
      } finally {
        if (refreshing) return setRefreshing(false)
      }
    })()
  }, [codingcamp, projectName, refreshing])

  const refresh = useCallback(() => {
    if (!refreshing) return setRefreshing(true)
  }, [refreshing, setRefreshing])

  return { voters, refresh }
}
