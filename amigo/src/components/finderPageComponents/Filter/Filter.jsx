import React, { Component } from 'react'
import './Filter.css'

export class Filter extends Component {
    render() {
        return (
            <div>
                <div>
                    <h2 className='roomHeading'>Find your next roommate</h2>
                    <button className='postButton'>Make a Post</button>
                </div>
                <table className='filter'>
                    <tr>
                        <td className='filterItem'>Looking for</td>
                        <td className='filterItem'>Location</td>
                        <td className='filterItem'>Preference</td>
                        <td className='filterItemLast'>Price</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Filter
