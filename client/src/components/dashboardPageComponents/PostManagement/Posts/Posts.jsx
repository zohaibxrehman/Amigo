import React, { Component } from 'react'
import './Posts.css'
import deleteImg from './../../../../assets/delete-icon.svg'
import editImg from './../../../../assets/edit-icon.svg'
import {deletePost} from './../../../../actions/post'

export class Posts extends Component {
    render() {
        const { image_url, price, title, _id} = this.props.userInfo;
        const updatePosts = this.props.updatePosts;
        const post_url = '/post/' + _id 
        return (
            <div className='post'>
                <a href={post_url}>
                    <img className='postPhoto' src={image_url} alt='user' />
                    <div className='postDesc'>
                        <h3 className='title'>{title}</h3>
                        <small className='price'>{price}</small>
                    </div>
                </a>
                <div id="userPostModify">
                    <ul>
                        <li>
                            <a href=""> 
                                <img className="img-decoration" src={ editImg } alt=""/>
                            </a>
                        </li>
                        <li onClick={() => {deletePost(_id); updatePosts(); }}>
                            <img className="img-decoration" src={ deleteImg } alt=""/>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Posts
