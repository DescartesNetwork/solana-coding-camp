import { useCallback, useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { uid } from '@sentre/codingcamp'
import { encode } from 'bs58'

import { shuffle } from 'helpers/util'
import { AppState } from 'store'
import { ProjectData } from 'store/projects.reducer'
import configs from 'configs'
import { useCodingCamp } from './useCodingCamp'

const {
  voting: { campaign },
} = configs

const campaignId = encode(uid(campaign))

export const useProjects = (): ProjectData[] => {
  const projects = useSelector((state: AppState) => state.projects)
  return Object.values(projects)
}

export const useProjectsSelector = (ids: string[]): ProjectData[] => {
  const projects = useSelector((state: AppState) => {
    const projectIds = Object.keys(state.projects)
    return projectIds
      .filter((projectId) => ids.includes(projectId))
      .map((projectId) => state.projects[projectId])
  })
  return projects
}

export const useShuffledProjects = (): ProjectData[] => {
  const projects = useProjects()
  return shuffle(projects)
}

export const useRankingProjects = (
  topNumber: number = 5,
): { ranking: string[]; stat: Record<string, number> } => {
  const [stat, setStat] = useState<Record<string, number>>({})
  const codingcamp = useCodingCamp()

  const fetchAllAccounts = useCallback(async () => {
    const stat: Record<string, number> = {}
    const data = await codingcamp.program.account.ballot.all([
      {
        memcmp: {
          offset: 8 + 32,
          bytes: campaignId,
        },
      },
    ])
    data.forEach(({ account: { project } }) => {
      if (!stat[encode(project)]) stat[encode(project)] = 0
      stat[encode(project)]++
    })
    return setStat(stat)
  }, [codingcamp])

  useEffect(() => {
    fetchAllAccounts()
  }, [fetchAllAccounts])

  const ranking = useMemo(() => {
    const temp: string[] = []
    const getLowest = (ids: string[]) => {
      let lowest = 0
      ids.forEach((id, i) => {
        if (stat[id] < stat[ids[lowest]]) return (lowest = i)
      })
      return { id: ids[lowest], index: lowest }
    }
    Object.keys(stat).forEach((id) => {
      if (temp.length < topNumber) return temp.push(id)
      const { id: lowestId, index: lowestIndex } = getLowest(temp)
      if (stat[lowestId] < stat[id]) return (temp[lowestIndex] = id)
    })
    return temp.sort((prevId, nextId) => stat[nextId] - stat[prevId])
  }, [stat, topNumber])

  return { ranking, stat }
}
