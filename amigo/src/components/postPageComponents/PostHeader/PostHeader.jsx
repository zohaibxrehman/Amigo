import React, { Component } from 'react'
import './PostHeader.css'

class PostHeader extends Component {

    render() {

        const { header } = this.props;

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
