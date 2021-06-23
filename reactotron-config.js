import AsyncStorage from '@react-native-community/async-storage'
import Reactotron, { asyncStorage } from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import sagaPlugin from 'reactotron-redux-saga'

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .useReactNative()
  .use(asyncStorage())
  .use(reactotronRedux())
  .use(sagaPlugin())
  .connect()

export default reactotron
