
export const updateStoryStatus = (backlogId, status, skills, colleagues, addScrumMaster) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    
    const updatedSkills = (addScrumMaster) => {
      switch (addScrumMaster) {
        case 'remove': return firestore.FieldValue.arrayRemove('Ty78gnxUYIuKLjwOHZLo')
        case true: return [...skills, 'Ty78gnxUYIuKLjwOHZLo']
        case false: return [...skills]
        default: return false
      }
    }

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

export const updateGameDayCount = (game) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const gameId = game.id;

    firestore.collection('games').doc(gameId).update({
      day: game.day + 1
    }).then((g) => {
      dispatch({ type: 'GAME_DAY_COUNT_UPDATED_SUCCESS', g });
    }).catch((err) => {
      dispatch({ type: 'GAME_DAY_COUNT_UPDATED_ERROR', err });
    });
  }
}

export const deleteGame = (game, backlog, colleagues) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore.collection('games').doc(game).delete(
    ).then(game => {
      console.log('Game Removed')
      backlog.forEach(bl => {
        firestore.collection('backlog').doc(bl.id).delete()
      })
      console.log('Backlog Removed')
      colleagues.forEach(col => {
        firestore.collection('colleagues').doc(col.id).delete()
      })
      dispatch({
        type: 'DELETE_GAME_SUCCESS', game
      });
    }).catch((err) => {
      dispatch({ type: 'DELETE_GAME_ERROR', err });
    });
  }
}

