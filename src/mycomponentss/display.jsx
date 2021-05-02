import React from 'react';
const display =(props)=>{
    const mystyles={
        marginTop:"50px",
        textAlign: "center"

    }
 
    return(<h1 style={mystyles}>NAME: {props.location.fname} {props.location.lname}<br/>Email:{props.location.email} <br/>password: {props.location.password}  </h1>);
}
export default display;

