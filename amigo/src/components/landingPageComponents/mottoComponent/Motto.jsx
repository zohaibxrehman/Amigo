import React, { Component } from 'react';
import mottoImg from '../../../assets/motto.jpg'
import './Motto.css'
import MottoText from './MottoText'

class Motto extends Component {
    state = {  }


    render() { 
        return ( 
            <div className='ContainerProp'>
            <div >
                <img src={mottoImg} className='roommatesImage' />
            </div>
            <div className='mottoText'>
               <MottoText />
            </div>
            </div>
         );
    }
}
 
export default Motto;