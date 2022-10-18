import { useMemo } from 'react'
import { web3 } from '@project-serum/anchor'
import CodingCamp, { AnchorWallet } from '@sentre/codingcamp'
import { useWallet, useAnchorWallet } from '@solana/wallet-adapter-react'
import { useWalletModal } from '@solana/wallet-adapter-react-ui'

import configs from 'configs'

const {
  voting: { cluster },
} = configs

export const useCodingCamp = () => {
  const { publicKey } = useWallet()
  const wallet = useAnchorWallet()
  const { setVisible } = useWalletModal()

  const codingcamp = useMemo(() => {
    if (publicKey && wallet) return new CodingCamp(wallet, cluster)

    const dummywallet: AnchorWallet = {
      publicKey: web3.SystemProgram.programId,
      signTransaction: async (tx: web3.Transaction) => {
        setVisible(true)
        return tx
      },
      signAllTransactions: async (txs: web3.Transaction[]) => {
        setVisible(true)
        return txs
      },
    }
    return new CodingCamp(dummywallet, cluster)
  }, [publicKey, wallet, setVisible])

  return codingcamp
}
