import React, { Component } from 'react'
import './PostOwnerForm.css'

export class PostOwnerForm extends Component {
    render() {
        return (
            <div >
            
               <form action="">
                   <input type="text" placeholder="Name"/><br/>
                   <input type="text" placeholder="Phone"/><br/>
                   <input type="text" placeholder="Email"/><br/>
                   <textarea name="" id="" cols="30" rows="10" placeholder="Hello, I am interested in.."></textarea><br/>
               </form>
            </div>
        )
    }
}

export default PostOwnerForm
