import React, { Component } from 'react'
import './Posts.css'
import deleteImg from './../../../../assets/delete-icon.svg'
import editImg from './../../../../assets/edit-icon.svg'
import flaggedIcon from './../../../../assets/flagged.png'
import {deletePost} from './../../../../actions/post'

export class Posts extends Component {
    
    updateInfo() {
        const {_id} = this.props.userInfo
        const updatePosts = this.props.updatePosts;
        deletePost(_id, updatePosts)
    }

    displayFlagged(){
        const {flagged} = this.props.userInfo
        if (flagged){
            return <li className="reported"><img src={flaggedIcon} alt=""/></li>
        }
    }

    render() {
        const { image_url, price, title, _id} = this.props.userInfo;
        
        const post_url = '/post/' + _id 
        const editpost_url = '/editpost/' + _id 

        return (
            <div className='adminUserPost'>
                <a href={post_url}>
                    <img className='postPhoto' src={image_url} alt='user' />
                    <div className='postDesc'>
                        <h3 className='title'>{title}</h3>
                        <small className='price'>{price}</small>
                    </div>
                </a>
                <div id="userPostModifyAdmin">
                    <ul>
                        {this.displayFlagged()}
                        <li className="cursorDesignPosts">
                            <a href={editpost_url}> 
                                <img className="img-decoration" src={ editImg } alt=""/>
                            </a>
                        </li>
                        <li className="cursorDesignPosts" onClick={() => { this.updateInfo() }}>
                            <img className="img-decoration" src={ deleteImg } alt=""/>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Posts
