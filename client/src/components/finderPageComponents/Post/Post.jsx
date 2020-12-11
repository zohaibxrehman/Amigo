import React, { Component } from 'react'
import './Post.css'

export class Post extends Component {
    render() {
        const { creator_name, image_url, location, title, _id} = this.props.userInfo;
        const post_url = '/post/' + _id 
        return (
            <div className='post'>
                <a href={post_url}>
                    <img className='userPhoto' src={image_url} alt='user' />
                    <div className='postDesc'>
                        <h3 className='userName'>{creator_name}</h3>
                        <small className='location'>{location}</small>
                        <p className='postTitleAdmin'>{title}</p>
                    </div>
                </a>
            </div>
        )
    }
}

export default Post
