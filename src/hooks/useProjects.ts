import { useCallback, useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'

import { shuffle } from 'helpers/util'
import { AppState } from 'store'
import { ProjectData } from 'store/projects.reducer'

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
  const ballots = useSelector((state: AppState) => state.ballots)

  const fetchAllAccounts = useCallback(async () => {
    const stat: Record<string, number> = {}
    Object.values(ballots).forEach(({ project }) => {
      if (!stat[project]) stat[project] = 0
      stat[project]++
    })
    return setStat(stat)
  }, [ballots])

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
