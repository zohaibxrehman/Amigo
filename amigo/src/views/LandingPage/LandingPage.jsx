import React, { Component } from 'react'
import './LandingPage.css'
import '../../components/landingPageComponents/bannerComponent/Banner'
import Banner from '../../components/landingPageComponents/bannerComponent/Banner'
import Motto from '../../components/landingPageComponents/mottoComponent/Motto'
import Reviews from '../../components/landingPageComponents/reviewsComponent/Reviews'

export class LandingPage extends Component {
    render() {
        return (
            <div className="LandingPageStyle">
                <Banner />
                <div className='middleSection'>
                <Motto />
                <Reviews />
                </div>


            </div>
        )
    }
}

export default LandingPage
