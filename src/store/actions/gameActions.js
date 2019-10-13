
export const newGame = (game) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const uid = getState().firebase.auth.uid;

    firestore.collection('games').add({
        ...game,
        nickname: profile.nickname,
        uid: uid,
        createdAt: new Date()
      }).then(() => {
      dispatch({ type: 'NEW_GAME_SUCCESS', game });
    }).catch((err) => {
      dispatch({ type: 'NEW_GAME_ERROR', err});
    });
  }
}