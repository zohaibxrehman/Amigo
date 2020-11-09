import React, { Component } from 'react'
import './PostHeader.css'
import data from '../dummyData'

class PostHeader extends Component {
    constructor() {
        super()
        this.state = {
            header: {}
        }
    }

    componentDidMount() {
        // when server and database is set up, this data
        // will be retrieved here
        this.setState({ header: data[0].header })
    }

    render() {

        const { header } = this.state;

        return (
            <div id="postHeader">
                <ul>
                    <li>
                        {header.title}
                    </li>
                    <li>
                        Budget: {header.budget}
                    </li>
                </ul>
            </div>
        )
    }
}

export default PostHeader
