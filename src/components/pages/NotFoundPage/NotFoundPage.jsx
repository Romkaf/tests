import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
	<div className="alert alert-primary mt-3">
		<h3>Page not found</h3>
		<p>We are sorry but the page you are looking for does not exist.</p>
		<Link to="/" className="btn btn-primary">
			To home
		</Link>
	</div>
);

export default NotFoundPage;
