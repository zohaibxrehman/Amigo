import React, { Component } from 'react'
import './UserFunctionality.css'


class UserFunctionality extends Component {

    setDivId(functionality){
        let divId = "userFunctionality";
        if (functionality === "Settings"){
            divId = "userFunctionalitySettings";
        }
        return divId;
    }

    render() {
        const { userFunction } = this.props
        return (
            <div id={this.setDivId(userFunction.name)}>
                <span className="design-fuction"><img src= { userFunction.icon } alt=""/></span>
                <span className="design-fuction"> {userFunction.name } </span>
            </div>
        )
    }
}

export default UserFunctionality