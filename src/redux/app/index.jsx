import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import App from '../../main/app';
import * as Action from '../action';

function mapStateToProps(state) {
	return {state: state.state};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(Action, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
