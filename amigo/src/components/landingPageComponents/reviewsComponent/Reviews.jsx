import React, { Component } from 'react';
import Review from './Review'
import './Review.css'


class Reviews extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='ReviewBox'>
                
                <Review />
                <Review />
                <Review />
            </div>


         );
    }
}
 
export default Reviews;