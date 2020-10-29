import React, { Component } from 'react'
import './Post.css'
import userPhoto from '../../../assets/ProfilePhoto.jpeg'

export class Post extends Component {
    render() {
        return (
            <div className='post'>
                <img className='userPhoto' src={userPhoto} />
                <div className='postDesc'>
                    <h3 className='userName'>Vishnu Varma, 19</h3>
                    <small className='location'>UofT | Toronto</small>
                    <p>Seeking 2 roomates, preferably UofT students</p>
                </div>
            </div>
        )
    }
}

export default Post
