import React, { Component } from 'react'
import './EditPost.css'
import deleteImg from '../../../../../assets/delete.png'

class EditPost extends Component {
    render() {
        return (
            <div id="editPost">
                <ul>
                    <li>
                        <img className="img-decoration" src={ deleteImg } alt=""/>
                    </li>
                    <li>
                        <div id ="userPostInfo">
                            Post Notification
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default EditPost