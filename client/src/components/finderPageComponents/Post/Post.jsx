import React, { Component } from 'react'
import './Post.css'

export class Post extends Component {
    render() {
        const { creator_image_url, creator_name, location, title, _id} = this.props.userInfo;
        const post_url = '/post/' + _id 
        return (
            <div className='post'>
                <a href={post_url}>
                    <img className='userPhoto' src={creator_image_url} alt='user' />
                    <div className='postDesc'>
                        <h3 className='userName'>{creator_name}</h3>
                        <small className='location'>{location}</small>
                        <p className='postTitle'>{title}</p>
                    </div>
                </a>
            </div>
        )
    }
}

export default Post
