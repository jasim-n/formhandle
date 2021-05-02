
import React, { Component } from 'react';
import {Link} from "react-router-dom";


class Form extends Component {
	constructor(props) {
		super(props)

		this.state = {
			firstname: '',
			password: '',
			name:''
		}
	}

	handleFirstnameChange = event => {
		this.setState({
			firstname: event.target.value
		})
	}


    

	handleLastNameChange = event => {
		this.setState({
			name: event.target.value
		})
	}
    handlepasswordChange = event => {
		this.setState({
			password: event.target.value
		})
	}
	handleEmailChange = event => {
		this.setState({
			email: event.target.value
		})
	}


	// handleSubmit = event => {
	// 	alert(`${this.state.name} ${this.state.password} ${this.state.ab}`)
        
	// 	event.preventDefault()
	// }
   

	render() {
        
        const mystyleForm={
            border:"5px grey solid",
            backgroundColor: "lightgrey",
            margin: "0 23%",
            padding: "10px",
            
            textAlign: "center",

        }
		
		const { firstname, name,email, password} = this.state
       
		return (
            <div >
			<form onSubmit={this.handleSubmit} style={mystyleForm}>
				<div>
					<label>Firstname </label>
					<input
						type="text"
						value={firstname}
						onChange={this.handleFirstnameChange}
					/>
				</div>
				<div>
                    <label>Last name</label>
                    <input type="text" value={name} onChange={this.handleLastNameChange}></input>
                </div>
				<div>
                    <label >Email</label>
                    <input type="email" value={email} onChange={this.handleEmailChange}></input>
                </div>
                <div>
                    <label>password</label>
                    <input type="password" value={password} onChange={this.handlepasswordChange}></input>
                </div>
				
				<button type="submit"><li><Link to={ { 
 					 pathname: "/display/", 
 					 fname: this.state.firstname, 
					  lname : this.state.name,
					  email:this.state.email,
					  password : this.state.password

} } >submit</Link></li></button>
			</form></div>
		)
	}
}

export default Form


