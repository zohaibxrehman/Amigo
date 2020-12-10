import React, { Component } from 'react'
import './UserDashboardPage.css'
import { UserPanel, NotificationPanel } from "../../components/userDashboardPageComponents/index.js"
import UserActivity from '../../components/userDashboardPageComponents/UserActivity/UserActivity'
import { getUserByIDForPosts } from './../../actions/post'

export class UserDashboardPage extends Component {

    constructor() {
        super()
        this.state = {
            view: "userActivity",
            notifications: [],
            dashboardInfo: {
                userName: '',
                userPhoto: '',
                posts: []
            },
        }
    }

    changeView(viewChange) {
        this.setState({view: viewChange})
    }

    updatePosts(){
        getUserByIDForPosts(this)
    }

    componentDidMount() {
        // when server and database is set up, this data
        // will be retrieved here
        this.updatePosts()
        // this.setState({ dashboardInfo: data })
        
    }

    render() {
        const {view, notifications, dashboardInfo} = this.state;
        return (
            <div>
                <UserPanel changeView={(viewChange)=>this.changeView(viewChange)} userName={dashboardInfo.userName} userPhoto={dashboardInfo.userPhoto} userId={dashboardInfo._id}/>
                <div id='dashboardView'>
                    {view==='dashboard' && 
                        <NotificationPanel notifications={notifications}/>
                    }
                    {view==='userActivity' && <UserActivity parentState = {() =>  this.updatePosts()}  posts = {dashboardInfo.posts} />}
                </div>
                
            </div>
        )
    }
}

export default UserDashboardPage
