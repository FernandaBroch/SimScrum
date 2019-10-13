import rootReducer from './store/reducers/rootReducer'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { getFirebase } from 'react-redux-firebase'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import fbConfig from './config/fbConfig'


const initialState = {}

export default () => {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),      
      //reactReduxFirebase(fbConfig, rrfConfig), // redux binding for firebase
      reduxFirestore(fbConfig) // redux bindings for firestore
    )
  )
}