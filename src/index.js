import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import fbConfig from './config/fbConfig'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import createReduxStore from './createReduxStore'
import { createFirestoreInstance, getFirestore } from 'redux-firestore'

const store = createReduxStore();

const rrfConfig = { 
  useFirestoreForProfile: true,  
  userProfile: 'profiles',
  attachAuthIsReady: true
 }

const rrfProps = {
  firebase: fbConfig,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
}


ReactDOM.render(
  <Provider store={store}>
  <ReactReduxFirebaseProvider {...rrfProps}>
    <App />
  </ReactReduxFirebaseProvider>      
  </Provider>,
  document.getElementById('root'));

serviceWorker.register();


