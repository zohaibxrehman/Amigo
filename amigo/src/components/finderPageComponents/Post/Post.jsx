import React, { Component } from 'react'
import './Post.css'
import userPhoto from '../../../assets/ProfilePhoto.jpeg'

export class Post extends Component {
    render() {
        return (
            <div className='post'>
                <img className='userPhoto' src={userPhoto}></img>
                <h3>Vishnu Varma, 19</h3>
                <small>UofT | Toronto</small>
                <p>Seeking 2 roomates, preferably UofT students</p>
            </div>
        )
    }
}

export default Post
