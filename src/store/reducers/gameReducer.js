const initState = {}

const gameReducer = (state = initState, action) => {
  switch(action.type){
    case 'NEW_GAME_SUCCESS':
      return{
        ...state,
        gameError: null
      }
    case 'NEW_GAME_ERROR':
      return{
        ...state,
        gameError: action.err
      }
    default:
      return state;
    }
}

export default gameReducer