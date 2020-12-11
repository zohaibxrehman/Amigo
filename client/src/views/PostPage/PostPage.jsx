import React, { Component } from 'react'
import './PostPage.css'
import { PostHeader, PostImage, PostOwnerForm, PostDescription, PostRequirement } from "../../components/postPageComponents/index.js"
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

    reportPost(e) {
        const { postid } = this.props.match.params

        reportPost(postid)
        e.target.style.backgroundColor = '#37de1d'
        e.target.value = 'Post Reported'
        // call to database will be written here
        // and the admin can retrieve these reported users
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

        return (
            <div id="check" >
                <PostHeader title = {postData.title} price={postData.price}/>
                <PostImage img = {postData.image_url}/>
                <PostOwnerForm creator = {postData.creator} creatorName={postData.creator_name} creatorUrl = {postData.creator_image_url} creatorEmail = {postData.creator_email}/>
                <PostDescription description = {postData.description} />
                <input type="submit" value="Report" onClick={(e)=>this.reportPost(e)}/>
                <PostRequirement preferences = {postData.preferences} />
            </div>
        )
    }
}

export default PostPage
