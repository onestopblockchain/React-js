import React, { Component }  from 'react';
const Resultlist = ({name,lastname,precentage}) => {
	//destruct props
	return (
	<div>
	<span>Name : {name}</span>
	<span> Last Name : {lastname}</span>
	<span> Percentage : {precentage}</span>
	</div>
	
	);

};

export default Resultlist;