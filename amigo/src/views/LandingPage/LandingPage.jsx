import React, { Component } from 'react'
import './LandingPage.css'
import '../../components/landingPageComponents/bannerComponent/Banner'
import Banner from '../../components/landingPageComponents/bannerComponent/Banner'
import Motto from '../../components/landingPageComponents/mottoComponent/Motto'

export class LandingPage extends Component {
    render() {
        return (
            <div>
                <Banner />
                <Motto />

            </div>
        )
    }
}

export default LandingPage
