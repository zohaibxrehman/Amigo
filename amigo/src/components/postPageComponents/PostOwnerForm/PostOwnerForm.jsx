import React, { Component } from 'react'
import './PostOwnerForm.css'
import PostOwnerProfile from './PostOwnerProfile/PostOwnerProfile'

export class PostOwnerForm extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            phone: '',
            email: '',
            message: ''
        }
    }

    submitHandler = (e) => {
        e.preventDefault();
        let { name, phone, email, message } = this.state
        // We need to make a server call and add this data to the server.
        alert("Post successfully made.")
    }

    changeHandler = (e) => {
        e.preventDefault();
        const target = e.target;
        const value = target.value;
        const name = target.id;

        this.setState({
            [name]: value 
          });
    }

    render() {

        const { profile } = this.props;
        const { name, phone, email, message } = this.state;
        return (
            <div id="postForm">
                <PostOwnerProfile profile={profile}/>
                <form onSubmit={this.submitHandler}>
                    <input type="text" id="name" placeholder="Name" value={ name } onChange = { this.changeHandler }/><br/>
                    <input type="text" id="phone" placeholder="Phone" value={ phone } onChange = { this.changeHandler }/><br/>
                    <input type="text" id="email" placeholder="Email" value={ email } onChange = { this.changeHandler }/><br/>
                    <input type="text" id="message" placeholder="Hello, I am interested in.." value={ message } onChange = { this.changeHandler }/><br/>
                    <input type="submit" value="Contact" />
                </form>
            </div>
        )
    }
}

export default PostOwnerForm
