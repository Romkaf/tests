import React from 'react';
import { connect } from 'react-redux';
import InputGroup from './InputGroup';
import { changeFilter } from '@models/actions';

const InputGroupContainer = (props) => (
	<InputGroup
		title={props.title}
		btnTitle1={props.btnTitle1}
		btnTitle2={props.btnTitle2}
		funcBtn1={props.funcBtn1}
		funcBtn2={props.funcBtn2}
		isAdmin={props.isAdmin}
		onChangeFilter={props.changeFilter}
		filter={props.filter}
	/>
);

const mapStateToProps = ({ filter }) => ({ filter });

export default connect(mapStateToProps, { changeFilter })(InputGroupContainer);
