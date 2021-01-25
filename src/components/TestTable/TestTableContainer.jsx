import TestTable from './TestTable';
import { connect } from 'react-redux';
import { showModal } from '@models/actions';

const TestTableContainer = ({ showModal }) => {
	return <TestTable onModalShow={showModal} />;
};

const actions = {
	showModal,
};

export default connect(null, actions)(TestTableContainer);
