import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import Navigator from './navigation/navigator'

const queryClient = new QueryClient()

const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigator />
    </QueryClientProvider>
  )
}

export default App
