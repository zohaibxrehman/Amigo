import React, { Component } from 'react'
import Post from '../Post/Post'
import './Posts.css'

export class Posts extends Component {
    render() {
        return (
            <div>
                <table className='postTable'>
                    <tr>
                        <td className='postWrap'><Post /></td>
                        <td className='postWrap'><Post /></td>
                        <td className='postWrap'><Post /></td>
                    </tr>
                    <tr>
                        <td className='postWrap'><Post /></td>
                        <td className='postWrap'><Post /></td>
                        <td className='postWrap'><Post /></td>
                    </tr>
                    <tr>
                        <td className='postWrap'><Post /></td>
                        <td className='postWrap'><Post /></td>
                        <td className='postWrap'><Post /></td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Posts
