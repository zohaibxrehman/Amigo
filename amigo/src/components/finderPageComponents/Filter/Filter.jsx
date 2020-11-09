import React, { Component } from 'react'
import './Filter.css'
import mapIcon from '../../../assets/map-icon.png'
import listIcon from '../../../assets/list-icon.png'


export class Filter extends Component {
    render() {
        const { view, changeView } = this.props
        return (
            <div>
                <div id='topHeading'>
                    <h2 className='roomHeading'>Find your next roommate</h2>
                    <button className='postButton'>Make a Post</button>
                </div>
                <table className='filter'>
                    <tr>
                        <td className='filterItem'>
                            <select name="looking" className='select select1'>
                                <option value="">Looking for</option>
                                <option value="">Any</option>
                                <option value="">Student</option>
                                <option value="">Professional</option>
                                <option value="">Elderly</option>
                            </select>
                        </td>
                        <td className='filterItem'>
                            <select name="location" className='select select2'>
                                <option value="">Location</option>
                                <option value="">Toronto</option>
                                <option value="">Waterloo</option>
                                <option value="">London</option>
                                <option value="">Vancouver</option>
                                <option value="">Ottawa</option>
                                <option value="">Montreal</option>
                                <option value="">Mississauga</option>
                                <option value="">Scarborough</option>
                            </select>
                        </td>
                        <td className='filterItem'>
                            <select name="preference" className='select select3'>
                                <option value="">Preference</option>
                                <option value="">Male</option>
                                <option value="">Female</option>
                                <option value="">No smoking</option>
                                <option value="">No drinking</option>
                                <option value="">No partying</option>
                            </select>
                        </td>
                        <td className='filterItem'>
                            <select name="price" className='select select4'>
                                <option value="">Price</option>
                                <option value="">$0-$300</option>
                                <option value="">$330-$600</option>
                                <option value="">$600-$900</option>
                                <option value="">$900-$1200</option>
                                <option value="">$1200-$1500</option>
                                <option value="">$1500-$2000</option>
                                <option value="">$2000-$3000</option>
                                <option value="">$3000+</option>
                            </select>
                        </td>
                        <td className='filterItem'>
                            {view==='list' ? 
                                <input type="image" src={mapIcon} onClick={()=>changeView()} id='mapIcon'/> :
                                <input type="image" src={listIcon} onClick={()=>changeView()} id='mapIcon'/>
                            }
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Filter
