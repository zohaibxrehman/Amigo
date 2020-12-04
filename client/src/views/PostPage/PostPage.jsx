import React, { Component } from 'react'
import './PostPage.css'
import { PostHeader, PostImage, PostOwnerForm, PostDescription, PostRequirement } from "../../components/postPageComponents/index.js"
import data from './dummyData'
import { getPostsById, reportPost } from './../../actions/post'

export class PostPage extends Component {

    constructor() {
        super()
        this.state = {
            postData: {
                profile: {
                    profilePhoto: '',
                    profileName: ''
                },

                image_url: '',

                title: '',

                price: '',
        
                description: '',
        
                preferences: []
            }
        }
    }

    componentDidMount() {
        // when server and database is set up, this data
        // will be retrieved here

        const { postid } = this.props.match.params
        
        // this.setState({ postData: data })
        getPostsById(this, postid)
    }

    render() {

        const { postData } = this.state
        const { postid } = this.props.match.params

        return (
            <div id="check" >
                <PostHeader title = {postData.title} price={postData.price}/>
                <PostImage img = {postData.image_url}/>
                <PostOwnerForm creator = {postData.creator} creatorUrl = {postData.creator_image_url}/>
                <PostDescription description = {postData.description} />
                <input type="submit" value="Report" onClick={() => reportPost(postid)}/>
                <PostRequirement preferences = {postData.preferences} />
            </div>
        )
    }
}

export default PostPage
