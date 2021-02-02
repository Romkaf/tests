import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '@models/actions';
import HomePage from './HomePage';

const HomePageContainer = ({ signOut }) => <HomePage onSignOut={signOut} />;

export default connect(null, { signOut })(HomePageContainer);
