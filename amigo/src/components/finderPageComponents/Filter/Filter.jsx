import React, { Component } from 'react'
import './Filter.css'

export class Filter extends Component {
    render() {
        return (
            <div>
                <h2>Find your next roommate</h2>
                <button>Make a Post</button>
                <table>
                    <tr>
                        <td>Looking for</td>
                        <td>Location</td>
                        <td>Preference</td>
                        <td>Price</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Filter
