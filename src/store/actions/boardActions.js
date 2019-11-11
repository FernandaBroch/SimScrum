
export const updateStoryStatus = (backlogId, status, skills, colleagues, addScrumMaster) => {
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    //console.log(backlogId, addScrumMaster)
    const updatedSkills = addScrumMaster ? [...skills, 'Ty78gnxUYIuKLjwOHZLo'] : [...skills];
    firestore.collection('backlog').doc(backlogId).update({
        status: status,
        skills: updatedSkills
      }).then(() => {
        colleagues.forEach(col => {
          //console.log(col)
          firestore.collection('colleagues').doc(col.id).update({
            story: ''        
          })          
        }) 
        dispatch({ type: 'STORY_STATUS_SUCCESS', backlogId });
      }).catch((err) => {
        dispatch({ type: 'STORY_STATUS_ERROR', err});
      });
  }
}
