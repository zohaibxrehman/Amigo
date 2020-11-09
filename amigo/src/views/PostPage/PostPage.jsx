import React, { Component } from 'react'
import './PostPage.css'
import { PostHeader, PostImage, PostOwnerForm, PostDescription, PostRequirement } from "../../components/postPageComponents/index.js"
import data from './dummyData'

export class PostPage extends Component {

    constructor() {
        super()
        this.state = {
            postData: {
                profile: {
                    profilePhoto: '',
                    profileName: ''
                },

                photo: '',
        
                header: {
                    title: '',
                    budget: ''
                },
        
                description: {
                    unit: '',
                    price: '',
                    location: '',
                    leaseTerm: ''
                },
        
                requirements: []
            }
        }
    }

    componentDidMount() {
        // when server and database is set up, this data
        // will be retrieved here
        this.setState({ postData: data })
    }

    render() {

        const { postData } = this.state

        return (
            <div id="check" >
                <PostHeader header = {postData.header}/>
                <PostImage img = {postData.photo}/>
                <PostOwnerForm profile = {postData.profile}/>
                <PostDescription description = {postData.description} />
                <input type="submit" value="Report" />
                <PostRequirement requirements = {postData.requirements} />
            </div>
        )
    }
}

export default PostPage
