import { useSelector } from 'react-redux'

import { AppState } from 'store'

export const useBallots = () => {
  const ballots = useSelector(({ ballots }: AppState) =>
    Object.keys(ballots).map((ballotAddress) => ballots[ballotAddress]),
  )
  return ballots
}

export const useMyBallots = (walletAddress: string) => {
  const ballots = useSelector(({ ballots }: AppState) => {
    return Object.keys(ballots)
      .filter((ballotAddress) => {
        const { authority } = ballots[ballotAddress]
        return authority === walletAddress
      })
      .map((ballotAddress) => ballots[ballotAddress])
  })
  return ballots
}
