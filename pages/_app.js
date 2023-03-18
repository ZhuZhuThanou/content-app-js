import AppStateProvider from '../state/AppStateProvider';

import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <AppStateProvider>
      <Component {...pageProps} />
    </AppStateProvider>
  )
}
