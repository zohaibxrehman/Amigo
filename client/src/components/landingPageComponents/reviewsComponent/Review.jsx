import React, { Component } from 'react';
// import ProfilePhoto from '../../../assets/ProfilePhoto.jpeg'
import './Review.css'

class Review extends Component {
    state = { 

     }
    render() { 
        const {userPhoto, userName, location, review} = this.props.userInfo
        return ( 
            <div className='reviewContainer'>
                <div>
                    <p className='reviewText'>
                    “{review}” 
                    </p>
                </div>
                <div className="userInfo">
                    <img src= { userPhoto } className='profilePhoto' alt='' />
                    <p className="personName">{ userName }</p>
                    <p className='personOccupation'>{ location }</p>
                </div>
            </div>

         );
    }
}
 
export default Review;