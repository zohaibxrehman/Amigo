import React, { Component } from 'react'
import Post from '../Post/Post'
import './Posts.css'

export class Posts extends Component {
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <td><Post /></td>
                        <td><Post /></td>
                        <td><Post /></td>
                    </tr>
                    <tr>
                        <td><Post /></td>
                        <td><Post /></td>
                        <td><Post /></td>
                    </tr>
                    <tr>
                        <td><Post /></td>
                        <td><Post /></td>
                        <td><Post /></td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Posts
