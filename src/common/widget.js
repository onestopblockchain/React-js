import React, { Component } from 'react';

import Results from './Results';
class Widget extends Component{

	constructor(props) {
	
    super(props);
	/* Declare state */
	
    this.state = {
	users: '',
	time:'',
	date:'',
	activity:'',
	error:null,
	jsonresult:[],
	settings:[]
	
	};
	 //this.resultWidget = this.resultWidget.bind(this)
  }
  componentWillMount(){
	  //console.log(localStorage.getItem('myData'));
	let items = JSON.parse(localStorage.getItem('myData'));
	if(items){
		
		this.setState({settings:items});
	}
	
	//this.setState({settings:items});
	
	
	  
  }
 handleChange(event){
	  this.setState({users : event.target.value})
  }
  setActivity (event) {
	this.setState({activity : event.target.value})
  }
  setTime(event){
	this.setState({time : event.target.value})  
  }
  
  setDate(event){
	this.setState({date : event.target.value})
  }
  
  resultOutput(){
	  
	  return (<Results record = {this.state.jsonresult} settings = {this.state.settings} /> );
  }
	render(){
		return (
		<div>
		{this.resultOutput()}
		{this.state.error}
		<label>Number Of Users
			<select  onChange={this.handleChange.bind(this)}>
           <option value="">-Select-</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
			<option value="5">5</option>
        </select>
		</label>
		<label>
		<div onChange={this.setActivity.bind(this)}>
		Activity
		<label>High
		<input type="radio" name="activity" value="high"  />
		</label>
		<label>low
		<input type="radio" name="activity" value="low" />
		</label>
		</div>
			</label>
			<label>Time
			<select value={this.state.time} onChange={this.setTime.bind(this)}>
           <option value="">-Select-</option>
            <option value="mobiletime">Mobile Time</option>
            <option value="localtime">Local Time</option>
        </select>
		</label>
		<label>
		Date 
		<select value={this.state.date} onChange={this.setDate.bind(this)}>
             <option value="">-Select-</option>
			  <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
			</select>
		</label>
		<button onClick={this.saveWidget.bind(this)}>Save</button>
		</div>
	
		);
			
		//let res = this.menu.value;
		
	}

saveWidget(event){
	event.preventDefault();
	
	
	
	if(this.state.users !='' && this.state.time !='' && this.state.date !='' && this.state.activity !='' )
	{
		this.setState({error : null}) 
		let data = {"number_of_users":this.state.users,"time":this.state.time,"date":this.state.date,"activity":this.state.activity};
		 
		localStorage.setItem('myData', JSON.stringify(data));
		
	}
	else{
		this.setState({error : 'please select all options'})  
	}
}

}

export default Widget;