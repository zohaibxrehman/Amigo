import React, { Component } from 'react'
import './Posts.css'

export class Posts extends Component {
    render() {
        const { image_url, price, title, _id} = this.props.userInfo;
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
            </div>
        )
    }
}

export default Posts
