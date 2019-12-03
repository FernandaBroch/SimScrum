const initState = {}

const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case 'NEW_GAME_SUCCESS':
      return {
        ...state,
        gameError: null
      }
    case 'NEW_GAME_ERROR':
      return {
        ...state,
        gameError: action.err
      }
    case 'DELETE_GAME_SUCCESS':
      return {
        ...state,
        gameError: null
      }
    case 'GAME_DAY_COUNT_UPDATED_SUCCESS':
      return {
        ...state,
        gameError: null
      }

    default:
      return state;
  }
}

export default gameReducer