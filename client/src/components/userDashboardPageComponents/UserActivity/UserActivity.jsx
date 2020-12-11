import React, { Component } from 'react'
import './UserActivity.css'
import UserActivityPost from './UserActivityPost/UserActivityPost'

class UserActivity extends Component {

    renderPost(posts, parentState, start, end){
        let renderPost = [];
        for (let i = start; i < Math.min(posts.length, end); i++){
            let idName = 'Posts' + i
            renderPost.push(<td key={idName} className='postWrap'><UserActivityPost parentState={parentState} userInfo={posts[i]}/></td>);
            
        }
        return renderPost
    }

    renderPosts(posts, parentState){
        let renderPosts = []
        for (let i = 0; i <= Math.floor(posts.length/3); i++){
            let idName = 'Post' + i
            renderPosts.push(<tr key={idName}>{this.renderPost(posts, parentState, i*3, i*3 + 3)}</tr>)
        }

        return renderPosts
    }

    render() {
        const { parentState, posts } = this.props;
        return (
            <div id="postPanel">
                <h2>User Posts</h2>
                <hr/>
                {posts.length !== 0 ? <table className='postTable'>
                    <tbody>
                        {this.renderPosts(posts, parentState)}
                    </tbody>
                </table> : null}
            </div>
        )
    }
}

export default UserActivity