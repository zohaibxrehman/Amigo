import React, { Component } from 'react'
import Post from '../Post/Post'
import './Posts.css'
import data from './dummyData'
import { getPosts } from './../../../actions/post'

export class Posts extends Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
        getPosts(this)
    }

    componentDidMount() {
        // when server and database is set up, this data
        // will be retrieved here
        // this.setState({ posts: data })
        // getPosts(this)
        // getUser()
        // console.log(this.state)
    }

    renderPost(start, end){
        let renderPost = [];
        for (let i = start; i < Math.min(this.state.posts.length, end); i++){
            let idName = 'Posts' + i
            renderPost.push(<td key={idName} className='postWrap'><Post userInfo={this.state.posts[i]}/></td>);
            
        }
        return renderPost
    }

    renderPosts(){
        let renderPosts = []
        for (let i = 0; i <= Math.floor(this.state.posts.length/3); i++){
            let idName = 'Post' + i
            renderPosts.push(<tr key={idName}> {this.renderPost(i*3, i*3 + 3)}  </tr>)
        }
        console.log(">>" + renderPosts)
        return renderPosts
    }

    render() {
        const { posts } = this.state
        return (
            <div>
                {posts.length !== 0 && <table className='postTable'>
                    <tbody>
                        {this.renderPosts()}
                    </tbody>
                </table>}
            </div>
        )
    }
}

export default Posts
