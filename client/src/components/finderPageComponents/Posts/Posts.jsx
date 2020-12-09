import React, { Component } from 'react'
import Post from '../Post/Post'
import './Posts.css'
import { getPosts } from './../../../actions/post'

export class Posts extends Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        getPosts(this)
    }

    renderPost(start, end, filteredPosts){
        let renderPost = [];
        for (let i = start; i < Math.min(filteredPosts.length, end); i++){
            let idName = 'Posts' + i
            renderPost.push(<td key={idName} className='postWrap'><Post userInfo={filteredPosts[i]}/></td>);     
        }
        return renderPost
    }

    renderPosts(){
        let renderPosts = []
        const { posts } = this.state
        const { location, preference, price } = this.props
        const filteredPosts = this.filterPosts(posts, location, preference, price)
        for (let i = 0; i <= Math.floor(filteredPosts.length/3); i++){
            let idName = 'Post' + i
            renderPosts.push(<tr key={idName}>{this.renderPost(i*3, i*3 + 3, filteredPosts)}</tr>)
        }
        return renderPosts
    }

    filterPosts(posts, location, preference, price) {
        const filteredPosts = posts.filter(post => {
            let isPreference = false
            let isLocation = false
            let isPrice = false

            if (preference==='' || post['preferences'].includes(preference)){
                isPreference = true
            }
            if (location==='' || location===post['location']){
                isLocation = true
            }
            if (price==='' || price===post['price']){
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
