
export const updateStoryStatus = (backlogId, status, skills, colleagues, addScrumMaster) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    //console.log(backlogId, addScrumMaster)
    
    const updatedSkills = (addScrumMaster) => {
      switch (addScrumMaster) {
        case 'remove': return firestore.FieldValue.arrayRemove('Ty78gnxUYIuKLjwOHZLo')
        case true: return [...skills, 'Ty78gnxUYIuKLjwOHZLo']
        case false: return [...skills]
        default: return false
      }
    }
    //console.log(updatedSkills(addScrumMaster))
    firestore.collection('backlog').doc(backlogId).update({
      status: status,
      skills: updatedSkills(addScrumMaster),      
    }).then(() => {
      colleagues.forEach(col => {
        firestore.collection('colleagues').doc(col.id).update({
          story: ''
        })
      })
      dispatch({ type: 'STORY_STATUS_SUCCESS', backlogId });
    }).catch((err) => {
      dispatch({ type: 'STORY_STATUS_ERROR', err });
    });
  }
}

export const deleteGame = (game, backlog, colleagues) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore.collection('games').doc(game).delete(
    ).then(game => {
      backlog.forEach(bl => {
        firestore.collection('backlog').doc(bl.id).delete()
      })
      colleagues.forEach(col => {
        firestore.collection('colleagues').doc(col.id).delete()
      })
      dispatch({
        type: 'DELETE_SUCCESS', game
      })
    }).catch((err) => {
      dispatch({ type: 'NEW_GAME_ERROR', err });
    });
  }
}

