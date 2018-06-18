import { connect } from 'react-redux';
import Notes from './Notes';
import { editNoteRequest, deleteNoteRequest, updateNoteRequest } from '../Note/NoteActions';

const mapDispatchToProps = {
	editNote: editNoteRequest,
	deleteNote: deleteNoteRequest,
	updateNote: updateNoteRequest,
};

export default connect(
  null,
  mapDispatchToProps
)(Notes);