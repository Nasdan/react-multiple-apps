import { connect } from 'react-redux';
import { updateTitle } from './actions';
import { PageA } from './page';
import { State } from '../../rootReducer';

const mapStateToProps = (state: State) => ({
  title: state.pageA.title,
});

const mapDispatchProps = dispatch => ({
  onChange: title => dispatch(updateTitle(title)),
});

export const PageAContainer = connect(
  mapStateToProps,
  mapDispatchProps
)(PageA);
