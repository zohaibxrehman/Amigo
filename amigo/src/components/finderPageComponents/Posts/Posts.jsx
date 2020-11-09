import React, { Component } from 'react'
import Post from '../Post/Post'
import './Posts.css'
import data from './dummyData'

export class Posts extends Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        // when server and database is set up, this data
        // will be retrieved here
        this.setState({ posts: data })
    }

    render() {
        const { posts } = this.state
        return (
            <div>
                {posts.length !== 0 && <table className='postTable'>
                    <tbody>
                    <tr>
                        <td className='postWrap'><Post userInfo={posts[0]} /></td>
                        <td className='postWrap'><Post userInfo={posts[1]} /></td>
                        <td className='postWrap'><Post userInfo={posts[2]} /></td>
                    </tr>
                    <tr>
                        <td className='postWrap'><Post userInfo={posts[3]} /></td>
                        <td className='postWrap'><Post userInfo={posts[4]} /></td>
                        <td className='postWrap'><Post userInfo={posts[5]} /></td>
                    </tr>
                    </tbody>
                </table>}
            </div>
        )
    }
}

export default Posts
