import React, { Component } from 'react'
import './PostDescription.css'

class PostDescription extends Component {
    render() {
        return (
            <div id = "description">
                <h2>Description</h2>
                <hr/>
                <p><strong>Unit:</strong> One bedroom for rent in a 2 bedroom basement apartment in Harbord Village, starting November 1, 2020.</p>
                <p><strong>Price:</strong> $1150 (includes internet + utilities). First and last month’s rent required.</p>
                <p><strong>Rent Control:</strong> Unit was used for residential purposes prior to Nov 15 2018.</p>
                <p><strong>Location:</strong> Bathurst and Harbord</p>
                <p><strong>Relationship to unit:</strong> Current tenant seeking roommate.</p>
                <p><strong>Lease Term:</strong>  12 months, preferably</p>
            </div>
        )
    }
}

export default PostDescription
