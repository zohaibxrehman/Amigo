import React, { Component } from 'react'
import './FinderPage.css'
import {Filter} from '../../components/finderPageComponents/index.js'

export class FinderPage extends Component {
    render() {
        return (
            <div>
                <Filter />
            </div>
        )
    }
}

export default FinderPage
