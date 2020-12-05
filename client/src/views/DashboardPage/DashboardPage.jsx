import React, { Component } from 'react'
import './DashboardPage.css'
import data from './dummyData'
import { UserPanel, NotificationPanel } from "../../components/dashboardPageComponents/index.js"
import {checkSession, getUsers, getPosts} from "./../../actions/admin"
import PostManagement from "./../../components/dashboardPageComponents/PostManagement/PostManagement"
import UserManagement from "./../../components/dashboardPageComponents/UserManagement/UserManagement"

export class DashboardPage extends Component {

    constructor() {
        super()
        this.state = {
            view: "userManagement",
            notifications: [],
            userName: '',
            userId: '',
            users: [],
            posts: []
        }
    }

    changeView(viewChange) {
        this.setState({view: viewChange})
    }

    componentDidMount() {
        // when server and database is set up, this data
        // will be retrieved here
        // this.setState({ dashboardInfo: data })
        checkSession(this);
        getUsers(this);
        getPosts(this);
    }

    render() {
        const {view, notifications, userName, users, posts} = this.state;
        return (
            <div>
                <UserPanel changeView={(viewChange)=>this.changeView(viewChange)} userName={userName} view={view} />
                <div id='dashboardView'>
                    {view==='dashboard' && <NotificationPanel notifications={notifications}/>}
                    {view==='userManagement' && <UserManagement users = {users} />}
                    {view==='postManagement' && <PostManagement posts = {posts} />}
                </div>
                
            </div>
        )
    }
}

export default DashboardPage
