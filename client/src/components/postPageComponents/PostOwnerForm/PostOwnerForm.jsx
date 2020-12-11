import React, { Component } from 'react'
import './PostOwnerForm.css'
import PostOwnerProfile from './PostOwnerProfile/PostOwnerProfile'

export class PostOwnerForm extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            phone: '',
            message: ''
        }
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

        const { creator, creatorName, creatorEmail, creatorUrl } = this.props;
        const { name, phone, message } = this.state;
        return (
            <div id="postForm">
                <PostOwnerProfile creator={creator} creatorName={creatorName} creatorUrl={creatorUrl}/>
                <form>
                    <input type="text" id="name" placeholder="Name" value={ name } onChange = { this.changeHandler }/><br/>
                    <input type="text" id="phone" placeholder="Phone" value={ phone } onChange = { this.changeHandler }/><br/>
                    <input type="text" id="message" placeholder="Hello, I am interested in.." value={ message } onChange = { this.changeHandler }/><br/>
                    <a href={`mailto: ${creatorEmail}?subject=Amigo Notification [Posting]&body= Hi ${creatorName},%0D%0A%0D%0A ${message}%0D%0A%0D%0A Best Regards,%0D%0A ${name}%0D%0A${phone}`}><input type="button" value="Contact" /></a>
                </form>
            </div>
        )
    }
}

export default PostOwnerForm
