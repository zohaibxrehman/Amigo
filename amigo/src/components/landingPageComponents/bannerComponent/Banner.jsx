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
                        Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem accusantium doloremque.
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