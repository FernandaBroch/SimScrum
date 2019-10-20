const initState = {}

const storyReducer = (state = initState, action) => {
  switch(action.type){
    case 'ASSIGNED_COLLEAGUE_SUCCESS':
      return{
        ...state,
        storyError: null
      }
    case 'ASSIGNED_COLLEAGUE_ERROR':
      return{
        ...state,
        storyError: action.err
      }
    default:
      return state;
    }
}

export default storyReducer