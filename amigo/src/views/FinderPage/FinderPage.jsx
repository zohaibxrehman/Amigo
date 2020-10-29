import React, { Component } from 'react'
import './FinderPage.css'
import {Filter, Posts} from '../../components/finderPageComponents/index.js'

export class FinderPage extends Component {
    render() {
        return (
            <div className='finder'>
                <Filter />
                <Posts />
            </div>
        )
    }
}

export default FinderPage
