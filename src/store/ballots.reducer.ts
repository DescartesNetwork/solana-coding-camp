import { web3 } from '@project-serum/anchor'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import CodingCamp, { BallotData, uid } from '@sentre/codingcamp'
import { encode } from 'bs58'

import configs from 'configs'

const {
  voting: { cluster, campaign },
} = configs

export const campaignFilter: web3.MemcmpFilter = {
  memcmp: {
    offset: 8 + 32,
    bytes: encode(uid(campaign)),
  },
}

/**
 * Internal Only
 */
const codingcamp = new CodingCamp(
  {
    publicKey: web3.SystemProgram.programId,
    signTransaction: async (tx: web3.Transaction) => {
      return tx
    },
    signAllTransactions: async (txs: web3.Transaction[]) => {
      return txs
    },
  },
  cluster,
)

export const parseAccount = (account: BallotData) => {
  const { authority, campaign, project } = account
  return {
    authority: authority.toBase58(),
    campaign: encode(campaign),
    project: encode(project),
  }
}

export type BallotsState = Record<
  string,
  {
    authority: string
    campaign: string
    project: string
  }
>

/**
 * Store constructor
 */

const NAME = 'ballots'
const initialState: BallotsState = {}

/**
 * Actions
 */

export const getBallots = createAsyncThunk(`${NAME}/getBallots`, async () => {
  const data = await codingcamp.program.account.ballot.all([campaignFilter])
  const ballots: BallotsState = {}
  data.forEach(
    ({ publicKey, account }) =>
      (ballots[publicKey.toBase58()] = parseAccount(account)),
  )
  return ballots
})

export const addBallot = createAsyncThunk(
  `${NAME}/addBallot`,
  async (ballot: BallotsState) => {
    return ballot
  },
)

export const removeBallot = createAsyncThunk(
  `${NAME}/removeBallot`,
  async (address: string) => {
    return { address }
  },
)

/**
 * Usual procedure
 */

const slice = createSlice({
  name: NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    void builder
      .addCase(
        getBallots.fulfilled,
        (state, { payload }) => void Object.assign(state, payload),
      )
      .addCase(
        addBallot.fulfilled,
        (state, { payload }) => void Object.assign(state, payload),
      )
      .addCase(
        removeBallot.fulfilled,
        (state, { payload }) => void delete state[payload.address],
      ),
})

export default slice.reducer
