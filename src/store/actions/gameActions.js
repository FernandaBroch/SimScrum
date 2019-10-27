
export const newGame = (game, backlog, colleagues) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const uid = getState().firebase.auth.uid;
    
    firestore.collection('games').add({
        ...game,
        nickname: profile.nickname,
        uid: uid,
        createdAt: new Date()
      }).then(game => {
        //create a new backlog list for this game
        backlog.forEach(bl => {
          firestore.collection('backlog').add({
            ...bl,
            game: game.id        
          })          
        })        
        //create a new team of colleagues for this game
        colleagues.forEach(col => {
          firestore.collection('colleagues').add({
            ...col,
            game: game.id        
          })          
        })            
        dispatch({ type: 'NEW_GAME_SUCCESS', game });
      }).catch((err) => {        
      dispatch({ type: 'NEW_GAME_ERROR', err});
    });

  }
}
