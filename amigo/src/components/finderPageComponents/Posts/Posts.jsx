import React, { Component } from 'react'
import Post from '../Post/Post'
import './Posts.css'
import userPhoto1 from '../../../assets/potrait1.jpeg'
import userPhoto5 from '../../../assets/ProfilePhoto.jpeg'
import userPhoto2 from '../../../assets/potrait2.jpg'
import userPhoto3 from '../../../assets/potrait3.jpg'
import userPhoto4 from '../../../assets/potrait4.png'
import userPhoto6 from '../../../assets/potrait5.png'

const users = [
    {
        userPhoto: userPhoto4,
        userName: 'Vishnu Varma',
        location: 'UofT | Toronto',
        postTitle: 'Seeking one roommate preferably male student'
    },
    {
        userPhoto: userPhoto2,
        userName: 'Kiara Gomez',
        location: 'Western | London',
        postTitle: 'Looking for two other girls to join me in apartment hunting!'
    },
    {
        userPhoto: userPhoto6,
        userName: 'Akshit Goyal',
        location: 'Western | London',
        postTitle: 'Seeking love in London <3'
    },
    {
        userPhoto: userPhoto3,
        userName: 'Kim Leone',
        location: 'Queens | London',
        postTitle: 'Found a nice place with a friend - Looking for 1 more roommate'
    },
    {
        userPhoto: userPhoto5,
        userName: 'Zohaib Rehman',
        location: 'UBC | Vancouver',
        postTitle: 'Seeking a chill guy to vibe with'
    },
    {
        userPhoto: userPhoto1,
        userName: 'Anthony Jones',
        location: 'Waterloo University',
        postTitle: 'Looing for four roommates to start a FRAT house!'
    },
]

export class Posts extends Component {
    render() {
        return (
            <div>
                <table className='postTable'>
                    <tr>
                        <td className='postWrap'><Post userInfo={users[0]} /></td>
                        <td className='postWrap'><Post userInfo={users[1]} /></td>
                        <td className='postWrap'><Post userInfo={users[2]} /></td>
                    </tr>
                    <tr>
                        <td className='postWrap'><Post userInfo={users[3]} /></td>
                        <td className='postWrap'><Post userInfo={users[4]} /></td>
                        <td className='postWrap'><Post userInfo={users[5]} /></td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default Posts
