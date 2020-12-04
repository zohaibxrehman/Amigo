import React, { Component } from 'react'
import './Post.css'

export class Post extends Component {
    render() {
        const { image_url, userName, location, title} = this.props.userInfo;
        return (
            <div className='post'>
                <a href='/post'>
                    <img className='userPhoto' src={image_url} alt='user' />
                    <div className='postDesc'>
                        <h3 className='userName'>{userName}</h3>
                        <small className='location'>{location}</small>
                        <p className='postTitle'>{title}</p>
                    </div>
                </a>
            </div>
        )
    }
}

export default Post
