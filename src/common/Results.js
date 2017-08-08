import React, { Component }  from 'react';
import axios from 'axios';
import Resultlist from './Resultlist';
class Results extends Component{
	constructor(props) {
	
    super(props);
	/* Declare state */
	
	this.state = {
	jsonresult:[],
	settings:props.settings
	};
	
}

componentWillMount(){
	/* To load the json data from file */
		let file = 'data.json';
	axios.get(file).then(response =>this.setState({jsonresult:response.data}));
	
}


resultData(){
	/* Get Data as the widget settings */
var rows = [];
let i = 0;
if(this.state.jsonresult !=''){
let name = '';

if(this.state.settings.date=="monthly"){
	/* for Monthly Data */
let data = this.state.jsonresult;
var obj = data.monthly;
var arr = {};
for (var key in obj) {
/* Convert for sorting Data */
arr[key] = obj[key];

}
if(this.state.settings.activity=='high'){
	var sort = 'asc';
var sortedkeys = this.getSortedKeys(arr,sort);
 //console.log(sortedkeys)

 for(var key in sortedkeys){
// console.log(sortedkeys[key].id+"value"+sortedkeys[key].value);

 let finaldata = 	 this.userResults(sortedkeys[key].id);
	 if(i < this.state.settings.number_of_users){
		 rows.push(<Resultlist name={finaldata.name}  lastname={finaldata.lastname} precentage={sortedkeys[key].value} />);
	 }
	
	
	
	 	 i++;
 }
 
}
else{
var sort = 'desc';
var sortedkeys = this.getSortedKeys(arr,sort);


 for(var key in sortedkeys){
	// console.log(sortedkeys[key].id+"value"+sortedkeys[key].value);
let finaldata = 	 this.userResults(sortedkeys[key].id);
 if(i < this.state.settings.number_of_users){
		 rows.push(<Resultlist name={finaldata.name}  lastname={finaldata.lastname} precentage={sortedkeys[key].value} />);
	 }
	
	
	
	 	 i++;
	
 }
}
			
		return (
	<span>
	{rows}
	
	</span>
	);
		
	}
	if(this.state.settings.date=="daily"){
		let name = '';
	let data = this.state.jsonresult;
	var obj = data.weekly;
	var arr = {};
	for (var key in obj) {

  arr[key] = obj[key];

}


if(this.state.settings.activity=='high'){
	var sort = 'asc';
var sortedkeys = this.getSortedKeys(arr,sort);

 
 for(var key in sortedkeys){
let finaldata = 	 this.userResults(sortedkeys[key].id);
 if(i < this.state.settings.number_of_users){
		 rows.push(<Resultlist name={finaldata.name}  lastname={finaldata.lastname} precentage={sortedkeys[key].value} />);
	 }
	
	
	
	 	 i++;
 }
 
}
else{
var sort = 'desc';
var sortedkeys = this.getSortedKeys(arr,sort);

 
 for(var key in sortedkeys){
	let finaldata = 	 this.userResults(sortedkeys[key].id);
	 if(i < this.state.settings.number_of_users){
		 rows.push(<Resultlist name={finaldata.name}  lastname={finaldata.lastname} precentage={sortedkeys[key].value} />);
	 }
	
	
	
	 	 i++;
 }
}

	

	




return (
	<span>
	{rows}
	
	</span>
	);
		
	}
	if(this.state.settings.date=="weekly"){
	let data = this.state.jsonresult;
	var obj = data.weekly;
	var arr = {};
	

	for (var key in obj) {

  arr[key] = obj[key];
  // val1 and etc... 
}
if(this.state.settings.activity=='high'){
	var sort = 'asc';
var sortedkeys = this.getSortedKeys(arr,sort);
 
 
 for(var key in sortedkeys){
	
let finaldata = 	 this.userResults(sortedkeys[key].id);
 if(i < this.state.settings.number_of_users){
		 rows.push(<Resultlist name={finaldata.name}  lastname={finaldata.lastname} precentage={sortedkeys[key].value} />);
	 }
	
	
	
	 	 i++;
 }
 
}
else{
var sort = 'desc';
var sortedkeys = this.getSortedKeys(arr,sort);
 //console.log(sortedkeys)

 for(var key in sortedkeys){
	 let finaldata = 	 this.userResults(sortedkeys[key].id);

	 if(i < this.state.settings.number_of_users){
		 rows.push(<Resultlist name={finaldata.name}  lastname={finaldata.lastname} precentage={sortedkeys[key].value} />);
	 }
	
	
	
	 	 i++;
 }

}
		return (
	<span>
	{rows}
	
	</span>
	);
		
	}
		
	}
	
	
	
		
else{
	return(
	<div>Please Wait</div>
	
	);
}

}


	
getSortedKeys(obj,sortorder) {
	/* Sort The keys asc and desc order */
    var keys = []; for(var key in obj) keys.push({"id":key,"value":obj[key]});

	if(sortorder=='asc'){
		return keys.sort(function(a,b){return b.value-a.value});
	}
	else{
		return keys.sort(function(a,b){return a.value-b.value});
	}
	
}
userResults(id){
	let users = this.state.jsonresult.users;
	let usersarray = {};
  for(var key in users){
	
	 usersarray[users[key].id]=users[key];
 }

return 	usersarray[id];
}

	render(){
		
		return(
		<div style={{marginBottom:10}}>
		
		{this.resultData()}
		
		</div>
		)
		
	}


}

export default Results;