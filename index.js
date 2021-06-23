if (__DEV__) {
  import('./reactotron-config').then(() => console.log('Reactotron Configured'))
}

import { AppRegistry } from 'react-native'

import { name as appName } from './app.json'
import App from './src/app'

AppRegistry.registerComponent(appName, () => App)
