import React, { Component } from 'react';
import {  editProfileInfo, editUserPhoto, getUserByIDForEdit } from '../../actions/user';
import './EditProfile.css'

class EditProfile extends Component {
   
    constructor() {
        super()
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            username: '',
            photo: null,
            userid: '',
        }
    }

    componentDidMount() {
        // userid passed via props
        const { userid } = this.props
        console.log(userid)
        getUserByIDForEdit(this,userid)
        this.setState({ userid: userid})
    }

    changeHandler = (e) => {
        e.preventDefault();
        const target = e.target;
        // const value = target.value;
        const name = target.id;
        if(name === "photo"){
            console.log(target.files[0])
            this.setState(
                {[name]: target.files[0]
                });
        }
        else{
            this.setState({
                [name]: target.value 
              });
        }

    }

    submitHandler = (e) => {
        e.preventDefault();
        editProfileInfo(this)
        if(this.state.photo != null){
            editUserPhoto(e,this.state.userid)
        }

        alert("Successful EditProfile")
    }



    render() { 
        const { firstname, lastname, email, password, username } = this.state
        return ( 

            <form onSubmit={ this.submitHandler }>
                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First Name" id='firstname' value={firstname} onChange={this.changeHandler}/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last Name" id='lastname' value={lastname} onChange={this.changeHandler}/>
                </div>
                <div className="form-group">
                    <label>Change your username</label>
                    <input type="text" className="form-control" id='username' placeholder="Enter a username" value= {username} onChange={this.changeHandler}/>
                </div>
                <div className="form-group">
                    <label>Change your email address</label>
                    <input type="email" className="form-control" placeholder="Enter your email" id='email' value = {email} onChange={this.changeHandler}/>
                </div>

                <div className="form-group">
                    <div className="custom-file">
                        <label className="custom-file-label">Upload your photo</label>
                        <input type="file" name="image" className="custom-file-input" id="photo"onChange={this.changeHandler}/>
                    </div>
                </div>

                <button type="submit" className="btn btn-warning btn-block" >Update Profile Info</button>

            </form>

         );
    }
}
 
export default EditProfile;