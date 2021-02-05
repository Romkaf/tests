import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import App from './App';

class AppContainer extends PureComponent {
	render() {
		const { user, error } = this.props;
		return <App user={user} error={error} />;
	}
}

const mapStateToProps = ({ user, error }) => ({
	user,
	error,
});

export default connect(mapStateToProps, null)(AppContainer);
