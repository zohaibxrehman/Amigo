import React, { Component } from 'react'
import './Filter.css'
import mapIcon from '../../../assets/map-icon.png'
import listIcon from '../../../assets/list-icon.png'


export class Filter extends Component {
    constructor() {
        super()
        this.state = {
            looking: '',
            location: '',
            preference: '',   
            price: ''         
        }
    }

    changeHandler = (e) => {
        e.preventDefault();
        const target = e.target;
        const value = target.value;
        const name = target.id;

        this.setState({
            [name]: value 
        });
    }

    render() {
        const { view, changeView, isLoggedIn } = this.props
        const { looking, location, preference, price } = this.state
        // redirect user to login before making a post
        const makePostButtonUrl = isLoggedIn ? '/makepost' : 'login'
        return (
            <div>
                <div id='topHeading'>
                    <h2 className='roomHeading'>Find your next roommate</h2>
                    <a href={makePostButtonUrl}>
                        <button className='postButton'>Make a Post</button>
                    </a>
                </div>
                <table className='filter'>
                    <tbody>
                    <tr>
                        <td className='filterItem'>
                            <select name="looking" id="looking" value={looking} className='select select1' onChange={ this.changeHandler }>
                                <option value="">Looking for</option>
                                <option value="">Any</option>
                                <option value="">Student</option>
                                <option value="">Professional</option>
                                <option value="">Elderly</option>
                            </select>
                        </td>
                        <td className='filterItem'>
                            <select name="location" value={location} id="location" className='select select2' onChange={ this.changeHandler }>
                                <option value="">Location</option>
                                <option value="Toronto">Toronto</option>
                                <option value="Waterloo">Waterloo</option>
                                <option value="London">London</option>
                                <option value="Vancouver">Vancouver</option>
                                <option value="Ottawa">Ottawa</option>
                                <option value="Montreal">Montreal</option>
                                <option value="Mississauga">Mississauga</option>
                                <option value="Scarborough">Scarborough</option>
                            </select>
                        </td>
                        <td className='filterItem'>
                            <select name="preference" value={preference} id="preference" className='select select3' onChange={ this.changeHandler }>
                                <option value="">Preference</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="No smoking">No smoking</option>
                                <option value="No drinking">No drinking</option>
                                <option value="No partying">No partying</option>
                            </select>
                        </td>
                        <td className='filterItem'>
                            <select name="price" value={price} id="price" className='select select4' onChange={ this.changeHandler }>
                                <option value="">Price</option>
                                <option value="$0-$300">$0-$300</option>
                                <option value="$330-$600">$330-$600</option>
                                <option value="$600-$900">$600-$900</option>
                                <option value="$900-$1200">$900-$1200</option>
                                <option value="$1200-$1500">$1200-$1500</option>
                                <option value="$1500-$2000">$1500-$2000</option>
                                <option value="$2000-$3000">$2000-$3000</option>
                                <option value="$3000+">$3000+</option>
                            </select>
                        </td>
                        <td className='filterItem viewIconContainer'>
                            {view==='list' ? 
                                <input type="image" src={mapIcon} onClick={()=>changeView()} id='viewIcon' alt='Map View' /> :
                                <input type="image" src={listIcon} onClick={()=>changeView()} id='viewIcon' alt='List View'/>
                            }
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Filter
