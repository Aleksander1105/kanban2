import callApi from '../../util/apiCaller';
// Export Constants
export const CREATE_NOTE = 'CREATE_NOTE';
export const CREATE_NOTES = 'CREATE_NOTES';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

// Export Actions
export function createNote(note, laneId) {
  return {
    type: CREATE_NOTE,
    laneId,
    note,
  };
}

export function createNoteRequest(note, laneId) {
  return (dispatch) => {
    return callApi('notes', 'post', { note, laneId }).then(noteResp => {
      dispatch(createNote(noteResp, laneId));
    });
  };
}

export function deleteNoteRequest(noteId, laneId) {
  return (dispatch) => {
    return callApi('notes/:noteId', 'delete', { noteId, laneId }).then(res => {
      dispatch(deleteNote(res));
    });
  };
}

export function updateNoteRequest(note) {
  return (dispatch) => {
    return callApi('notes/:noteId', 'put', { note }).then(res => {
      dispatch(updateNote(res));
    });
  };
}

export function createNotes(laneId, lanesData) {
  return {
    type: CREATE_NOTES,
    laneId,
    notes: notesData,
  };
}

export function updateNote(note) {
  return {
    type: UPDATE_NOTE,
    note,
  };
}

export function deleteNote(noteId, laneId) {
  return {
    type: DELETE_NOTE,
    noteId,
    laneId,
  };
}