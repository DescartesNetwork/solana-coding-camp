import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import View from 'view'

import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
import {
  PhantomWalletAdapter,
  Coin98WalletAdapter,
  TorusWalletAdapter,
  SolletWalletAdapter,
  SolletExtensionWalletAdapter,
  SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets'

import store from 'store'

const wallets = [
  new PhantomWalletAdapter(),
  new Coin98WalletAdapter(),
  new TorusWalletAdapter(),
  new SolletWalletAdapter(),
  new SolletExtensionWalletAdapter(),
  new SolflareWalletAdapter(),
]

render(
  <Provider store={store}>
    <BrowserRouter>
      <ConnectionProvider endpoint="https://devnet.genesysgo.net">
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <View />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
)
