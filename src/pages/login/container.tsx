import { connect } from 'react-redux';
import { updateLoginName } from './actions';
import { LoginPage } from './page';
import { State } from '../../rootReducer';

const mapStateToProps = (state: State) => ({
  name: state.login.name,
});

const mapDispatchProps = dispatch => ({
  onChange: name => dispatch(updateLoginName(name)),
});

export const LoginContainer = connect(
  mapStateToProps,
  mapDispatchProps
)(LoginPage);
