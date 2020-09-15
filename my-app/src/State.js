import React from 'react';

export default class State extends React.Component{
	constructor(){
		super();
		this.state={
			name:"bhavana",
			role:"Frontend developer"
		}
	}
	changeName=()=>{
		this.setState({
			name:"kesava",
			role:"sr.Frontend developer"
		})
	}
	prevState=()=>{
		this.setState({
			name:"bhavana",
			role:"Frontend developer"
		})
	}
	getInfo=()=>{
		setTimeout(()=>{
			console.log("data loaded")
			this.setState({
				name:"jayaram"
			})
		},2000)
	}
	componentWillMount(){
		console.log("hi everyone");
	}
	componentDidMount(){
		this.getInfo();
	}
	render(){
		return (
          <div>
          <p>this is bhavana</p>
          <h2 onMouseOver={this.changeName} onMouseLeave={this.prevState}>{this.state.name} is working as {this.state.role}</h2>
          </div>
			)		
	}
}