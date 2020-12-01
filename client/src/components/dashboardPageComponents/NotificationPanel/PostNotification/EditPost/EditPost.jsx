import React, { Component } from 'react'
import './EditPost.css'
import editImg from '../../../../../assets/edit.png'
import deleteImg from '../../../../../assets/delete.png'

class EditPost extends Component {
    render() {
        return (
            <div id="editPost">
                <ul>
                    <li>
                        <img className="img-decoration" src={ editImg } alt=""/>
                    </li>
                    <li>
                        <img className="img-decoration" src={ deleteImg } alt=""/>
                    </li>
                    <li>
                        <div id ="postInfo">
                            Post Created
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default EditPost