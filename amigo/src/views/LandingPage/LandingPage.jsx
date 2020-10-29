import React, { Component } from 'react'
import './LandingPage.css'
import '../../components/landingPageComponents/bannerComponent/Banner'
import Banner from '../../components/landingPageComponents/bannerComponent/Banner'

export class LandingPage extends Component {
    render() {
        return (
            <div>
                <Banner />
            </div>
        )
    }
}

export default LandingPage
