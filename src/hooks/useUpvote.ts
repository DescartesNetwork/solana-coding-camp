import { encode } from 'bs58'
import { uid } from '@sentre/codingcamp'
import { useWallet } from '@solana/wallet-adapter-react'

const dummyVoting: Record<string, number> = {}

export const getProjectId = (projectName: string) => {
  return encode(uid(projectName))
}

export const useUpvote = (projectName: string) => {
  const { publicKey, connect } = useWallet()
  if (!publicKey) return connect
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
