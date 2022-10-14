import { hash } from 'tweetnacl'
import { encode } from 'bs58'

const dummyVoting: Record<string, number> = {}

export const getProjectId = (projectName: string) => {
  return encode(hash(new TextEncoder().encode(projectName)).subarray(0, 32))
}

export const useUpvote = (projectName: string) => {
  return () => {
    const id = getProjectId(projectName)
    if (!dummyVoting[id]) dummyVoting[id] = 0
    dummyVoting[id] = dummyVoting[id] + 1
  }
}

export const useUpvoters = (projectName: string) => {
  const id = getProjectId(projectName)
  return dummyVoting[id] || 0
}
