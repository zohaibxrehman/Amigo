import React, { Component } from 'react';
import './Banner.css'

class Banner extends Component {
    state = {  }
    render() { 
        return (
            <div className='bgImage'>
                    {/* Add NavBar Here. */}
                <div>
                    <h1 className='bannerTextHeader'>Find your next roommate!</h1>
                    <p className='bannerText'>
                    New to Canada? Just moved cities? Looking for someone to share a place with? You've come to the perfect place. Amigo is your true friend which helps you find your next roommate!
                    </p>
                </div>
                <a href='/finder'>
                    <button className='seeAllListingsButton'>See all postings</button>
                </a>
            </div>
   
        );
    }
}
 
export default Banner;