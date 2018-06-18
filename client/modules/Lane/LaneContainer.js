import { connect } from 'react-redux';
import Lane from './Lane';
import { createLaneRequest, editLaneRequest, deleteLaneRequest, updateLaneRequest, fetchLanes } from '../Lane/LaneActions';
import { createNote } from '../Note/NoteActions';
import { deleteLane, updateLane, editLane } from './LaneActions';
import { createNoteRequest } from '../Note/NoteActions';

const mapStateToProps = (state, ownProps) => ({
  laneNotes: ownProps.lane.notes.map(noteId => state.notes[noteId])
});

const mapDispatchToProps = {
  editLane: editLaneRequest,
  deleteLane: deleteLaneRequest,
  updateLane: updateLaneRequest,
  addNote: createNoteRequest,
};	

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lane);