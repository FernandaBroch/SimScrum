import authReducer from './authReducer'
import gameReducer from './gameReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  game: gameReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer
