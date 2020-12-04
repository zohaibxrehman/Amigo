import React, { Component } from 'react'
import './Post.css'

export class Post extends Component {
    render() {
        const { creator_image_url, creator, location, title} = this.props.userInfo;
        return (
            <div className='post'>
                <a href='/post'>
                    <img className='userPhoto' src={creator_image_url} alt='user' />
                    <div className='postDesc'>
                        <h3 className='userName'>{creator}</h3>
                        <small className='location'>{location}</small>
                        <p className='postTitle'>{title}</p>
                    </div>
                </a>
            </div>
        )
    }
}

export default Post
