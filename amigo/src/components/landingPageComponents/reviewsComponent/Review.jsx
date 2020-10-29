import React, { Component } from 'react';
import ProfilePhoto from '../../../assets/ProfilePhoto.jpeg'
import './Review.css'

class Review extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            <div className='reviewContainer'>
                <div>
                    <p className='reviewText'>
                    “Certe, inquam, pertinax non existimant oportere exquisitis rationibus conquisitis de quo enim ipsam. Torquem detraxit hosti et quidem faciunt, ut aut.” 
                    </p>
                </div>
                <div className="userInfo">
                    <img src= { ProfilePhoto } className='profilePhoto' alt='' />
                    <p className="personName">Lara Madrigal</p>
                    <p className='personOccupation'>Student, UofT</p>
                </div>
                
            </div>
            <div className='reviewContainer'>
                <div>
                    <p className='reviewText'>
                    “Certe, inquam, pertinax non existimant oportere exquisitis rationibus conquisitis de quo enim ipsam. Torquem detraxit hosti et quidem faciunt, ut aut.” 
                    </p>
                </div>
                <div className="userInfo">
                    <img src= { ProfilePhoto } className='profilePhoto' alt='' />
                    <p className="personName">Lara Madrigal</p>
                    <p className='personOccupation'>Student, UofT</p>
                </div>
                
            </div>
            <div className='reviewContainer'>
                <div>
                    <p className='reviewText'>
                    “Certe, inquam, pertinax non existimant oportere exquisitis rationibus conquisitis de quo enim ipsam. Torquem detraxit hosti et quidem faciunt, ut aut.” 
                    </p>
                </div>
                <div className="userInfo">
                    <img src= { ProfilePhoto } className='profilePhoto' alt='' />
                    <p className="personName">Lara Madrigal</p>
                    <p className='personOccupation'>Student, UofT</p>
                </div>
                
            </div>

            </div>




         );
    }
}
 
export default Review;