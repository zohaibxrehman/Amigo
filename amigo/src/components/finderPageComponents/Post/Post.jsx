import React, { Component } from 'react'
import './Post.css'

export class Post extends Component {
    render() {
        console.dir(this.props.userInfo)
        const { userPhoto, userName, location, postTitle} = this.props.userInfo;
        return (
            <div className='post'>
                <a href='/post'>
                    <img className='userPhoto' src={userPhoto} alt='user' />
                    <div className='postDesc'>
                        <h3 className='userName'>{userName}</h3>
                        <small className='location'>{location}</small>
                        <p>{postTitle}</p>
                    </div>
                </a>
            </div>
        )
    }
}

export default Post
