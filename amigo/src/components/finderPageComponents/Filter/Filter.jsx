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
                        <td className='filterItem'>
                            <select name="looking" className='select'>
                                <option value="">Looking for</option>
                                <option value="">Dog</option>
                                <option value="">Cat</option>
                                <option value="">Hamster</option>
                                <option value="">Parrot</option>
                                <option value="">Spider</option>
                                <option value="">Goldfish</option>
                            </select>
                        </td>
                        <td className='filterItem'>
                            <select name="location" className='select'>
                                <option value="">Location</option>
                                <option value="">Dog</option>
                                <option value="">Cat</option>
                                <option value="">Hamster</option>
                                <option value="">Parrot</option>
                                <option value="">Spider</option>
                                <option value="">Goldfish</option>
                            </select>
                        </td>
                        <td className='filterItem'>
                            <select name="preference" className='select'>
                                <option value="">Preference</option>
                                <option value="">Dog</option>
                                <option value="">Cat</option>
                                <option value="">Hamster</option>
                                <option value="">Parrot</option>
                                <option value="">Spider</option>
                                <option value="">Goldfish</option>
                            </select>
                        </td>
                        <td className='filterItem'>
                            <select name="price" className='select'>
                                <option value="">Price</option>
                                <option value="">Dog</option>
                                <option value="">Cat</option>
                                <option value="">Hamster</option>
                                <option value="">Parrot</option>
                                <option value="">Spider</option>
                                <option value="">Goldfish</option>
                            </select>
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Filter
