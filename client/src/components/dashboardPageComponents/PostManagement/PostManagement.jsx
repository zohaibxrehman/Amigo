import React, { Component } from 'react'
import './PostManagement.css'
import Posts from './Posts/Posts'

class PostManagement extends Component {

    renderPost(posts, updatePosts, start, end){
        let renderPost = [];
        for (let i = start; i < Math.min(posts.length, end); i++){
            let idName = 'Posts' + i
            renderPost.push(<td key={idName} className='postWrap'><Posts updatePosts={updatePosts} userInfo={posts[i]}/></td>);
            
        }
        return renderPost
    }

    renderPosts(posts, updatePosts){
        let renderPosts = []
        for (let i = 0; i <= Math.floor(posts.length/3); i++){
            let idName = 'Post' + i
            renderPosts.push(<tr key={idName}>{this.renderPost(posts, updatePosts, i*3, i*3 + 3)}</tr>)
        }

        return renderPosts
    }

    render() {
        const { updatePosts, posts } = this.props;
        return (
            <div id="adminPostPanel">
                <h2>User Posts</h2>
                <hr/>
                {posts.length !== 0 ? <table className='postTable'>
                    <tbody>
                        {this.renderPosts(posts, updatePosts)}
                    </tbody>
                </table> : null}
            </div>
        )
    }
}

export default PostManagement