import { Fragment, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { web3 } from '@project-serum/anchor'

import { AppDispatch } from 'store'
import {
  addBallot,
  getBallots,
  parseAccount,
  removeBallot,
} from 'store/ballots.reducer'
import { useCodingCamp } from 'hooks/useCodingCamp'
import configs from 'configs'
import { encode } from 'bs58'
import { uid } from '@sentre/codingcamp'

const {
  voting: { campaign },
} = configs
const campaignId = encode(uid(campaign))

// Watch id
let voteId = 0
let voidId = 0

const BallotWatcher = () => {
  const dispatch = useDispatch<AppDispatch>()
  const codingcamp = useCodingCamp()

  // First-time fetching
  const fetchData = useCallback(async () => {
    await dispatch(getBallots())
  }, [dispatch])
  // Watch account changes
  const watchData = useCallback(() => {
    voteId = codingcamp.addListener(
      'VoteEvent',
      async ({ authority, campaign, project }) => {
        if (campaignId !== encode(campaign)) return
        const [publicKey] = await web3.PublicKey.findProgramAddress(
          [
            Buffer.from('ballot'),
            authority.toBuffer(),
            Uint8Array.from(campaign),
            Uint8Array.from(project),
          ],
          codingcamp.program.programId,
        )
        return dispatch(
          addBallot({
            [publicKey.toBase58()]: parseAccount({
              authority,
              campaign,
              project,
            }),
          }),
        )
      },
    )
    voidId = codingcamp.addListener(
      'VoidEvent',
      async ({ authority, campaign, project }) => {
        if (campaignId !== encode(campaign)) return
        const [publicKey] = await web3.PublicKey.findProgramAddress(
          [
            Buffer.from('ballot'),
            authority.toBuffer(),
            Uint8Array.from(campaign),
            Uint8Array.from(project),
          ],
          codingcamp.program.programId,
        )
        return dispatch(removeBallot(publicKey.toBase58()))
      },
    )
    return () => {
      codingcamp.removeListener(voteId)
      codingcamp.removeListener(voidId)
    }
  }, [codingcamp, dispatch])

  useEffect(() => {
    fetchData()
    return watchData()
  }, [fetchData, watchData])

  return <Fragment />
}

export default BallotWatcher
