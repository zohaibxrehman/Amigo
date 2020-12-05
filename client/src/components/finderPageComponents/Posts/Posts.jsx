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
        // getPosts(this)
    }

    componentDidMount() {
        // when server and database is set up, this data
        // will be retrieved here
        // this.setState({ posts: data })
        getPosts(this)
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
            renderPosts.push(<tr key={idName}>{this.renderPost(i*3, i*3 + 3)}</tr>)
        }
        return renderPosts
    }

    filterPosts(posts, location, preference, price) {
        console.log(posts, location, preference, price)
        const filteredPosts = posts.filter(post => {
            let isPreference = false
            let isLocation = false
            let isPrice = false
            if (preference=='' || preference==post['preferences']){
                isPreference = true
            }
            if (location=='' || location==post['location']){
                isLocation = true
            }
            if (price=='' || price==post['price']){
                isPrice = true
            }
            return isPreference && isLocation && isPrice
        })
        return filteredPosts
    }

    render() {
        const { posts } = this.state
        const { location, preference, price } = this.props
        const filteredPosts = this.filterPosts(posts, location, preference, price)
        return (
            <div>
                {filteredPosts.length !== 0 ? <table className='postTable'>
                    <tbody>
                        {this.renderPosts()}
                    </tbody>
                </table> : null}
            </div>
        )
    }
}

export default Posts
