import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import App from './App';
import { locStorKey } from '@constants';

class AppContainer extends PureComponent {
	componentDidUpdate(prevProps) {
		if (prevProps.user !== this.props.user) {
			localStorage.setItem(locStorKey, JSON.stringify(this.props.user));
		}
	}

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
