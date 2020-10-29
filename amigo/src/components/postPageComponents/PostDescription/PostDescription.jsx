import React, { Component } from 'react'
import './PostDescription.css'

class PostDescription extends Component {
    render() {
        return (
            <div id = "description">
                <p>Description</p>
                <p>Unit: One bedroom for rent in a 2 bedroom basement apartment in Harbord Village, starting November 1, 2020.</p>
                <p>Price: $1150 (includes internet + utilities). First and last month’s rent required.</p>
                <p>Rent Control: Unit was used for residential purposes prior to Nov 15 2018.</p>
                <p>Location: Bathurst and Harbord</p>
                <p>Relationship to unit: Current tenant seeking roommate.</p>
                <p>Lease Term:  12 months, preferably</p>
            </div>
        )
    }
}

export default PostDescription
