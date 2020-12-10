import React, { Component } from 'react'
import './UserFunctionality.css'


class UserFunctionality extends Component {

    setDiv(userFunction, userId){
        if (userFunction.name === "Settings"){
            return (<a href={'/edituser/' + userId}><div id="userFunctionalitySettings">
            <span className="design-fuction"><img src= { userFunction.icon } alt=""/></span>
            <span className="design-fuction"> {userFunction.name } </span>
            </div></a>)
        }
        else{
            return (<div id="userFunctionality">
            <span className="design-fuction"><img src= { userFunction.icon } alt=""/></span>
            <span className="design-fuction"> {userFunction.name } </span>
            </div>)
        }
    }


    render() {
        const { userFunction, userId } = this.props
        return (
            this.setDiv(userFunction, userId)
        )
    }
}

export default UserFunctionality