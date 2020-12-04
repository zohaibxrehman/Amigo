import React, { Component } from 'react'
import './PostPage.css'
import { PostHeader, PostImage, PostOwnerForm, PostDescription, PostRequirement } from "../../components/postPageComponents/index.js"
import data from './dummyData'
import { getPostsById } from './../../actions/post'

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
        this.setState({ postData: data })
        // getPostsById(this)
    }

    render() {

        const { postData } = this.state

        return (
            <div id="check" >
                <PostHeader title = {postData.title} header={postData.price}/>
                <PostImage img = {postData.image_url}/>
                <PostOwnerForm profile = {postData.profile}/>
                <PostDescription description = {postData.description} />
                <input type="submit" value="Report" />
                <PostRequirement requirements = {postData.preferences} />
            </div>
        )
    }
}

export default PostPage
