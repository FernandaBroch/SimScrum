export const assignStoryColleague = (colleague, storyId) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    console.log(storyId)
    firestore.collection('colleagues').doc(colleague.id).update({
        ...colleague,
        story: storyId               
      }).then(() => {
      dispatch({ type: 'ASSIGNED_COLLEAGUE_SUCCESS', colleague });
    }).catch((err) => {
      dispatch({ type: 'ASSIGNED_COLLEAGUE_ERROR', err});
    });
  }
}