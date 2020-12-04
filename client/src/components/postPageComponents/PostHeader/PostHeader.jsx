import React, { Component } from 'react'
import './PostHeader.css'

class PostHeader extends Component {

    render() {

        const { title, price } = this.props;

        return (
            <div id="postHeader">
                <ul>
                    <li>
                        {title}
                    </li>
                    <li>
                        Budget: {price}
                    </li>
                </ul>
            </div>
        )
    }
}

export default PostHeader
