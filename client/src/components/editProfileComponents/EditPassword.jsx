import React, { Component } from 'react';
import { editUserPassword } from '../../actions/user';
import './EditProfile.css'

class EditPassword extends Component {
   
    constructor() {
        super()
        this.state = {
            password: '',
            userid: ''
        }
    }

    componentDidMount() {
        // userid passed via props
        const { userid } = this.props
        this.setState({ userid: userid})
    }

    changeHandler = (e) => {
        e.preventDefault();
        const target = e.target;
        // const value = target.value;
        const name = target.id;
        this.setState({
            [name]: target.value 
          });
    }

    submitHandler = (e) => {
        e.preventDefault();
        editUserPassword(this)
    }

    render() { 
        const {  password } = this.state
        return ( 

            <form onSubmit={ this.submitHandler }>
                <div className="form-group">
                    <label>Enter New Password</label>
                    <input type="password" className="form-control" placeholder="Enter a secure password" id='password' value = {password} onChange={this.changeHandler}/>
                </div>
                <button type="submit" className="btn btn-warning btn-block" >Update Password</button>
            </form>

         );
    }
}
 
export default EditPassword;