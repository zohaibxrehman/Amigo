import React, { Component } from 'react'
import './LandingPage.css'
import '../../components/landingPageComponents/bannerComponent/Banner'
import Banner from '../../components/landingPageComponents/bannerComponent/Banner'
import Motto from '../../components/landingPageComponents/mottoComponent/Motto'
import Review from '../../components/landingPageComponents/reviewsComponent/Review'

export class LandingPage extends Component {
    render() {
        return (
            <div className="LandingPageStyle">
                <Banner />
                <Motto />
                <Review />

            </div>
        )
    }
}

export default LandingPage
