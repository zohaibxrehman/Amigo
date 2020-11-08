import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from "leaflet";
import './MapFinder.css'
import 'leaflet/dist/leaflet.css';
import userPhoto1 from '../../../assets/potrait1.jpeg'
import userPhoto5 from '../../../assets/ProfilePhoto.jpeg'
import userPhoto2 from '../../../assets/potrait2.jpg'
import userPhoto3 from '../../../assets/potrait3.jpg'
import userPhoto4 from '../../../assets/potrait4.png'
import userPhoto6 from '../../../assets/potrait5.png'

const posts = [
    {
        userPhoto: userPhoto4,
        userName: 'Vishnu Varma',
        location: 'UofT | Toronto',
        postTitle: 'Seeking one roommate preferably male student',
        geo: [43.642566, -79.387056]
    },
    {
        userPhoto: userPhoto2,
        userName: 'Kiara Gomez',
        location: 'Western | London',
        postTitle: 'Looking for two other girls to join me in apartment hunting!',
        geo: [43.652566, -79.387056]
    },
    {
        userPhoto: userPhoto6,
        userName: 'Akshit Goyal',
        location: 'Western | London',
        postTitle: 'Seeking love in London <3',
        geo: [43.642566, -79.347056]
    },
    {
        userPhoto: userPhoto3,
        userName: 'Kim Leone',
        location: 'Queens | London',
        postTitle: 'Found a nice place with a friend - Looking for 1 more roommate',
        geo: [43.652566, -79.357056]
    },
    {
        userPhoto: userPhoto5,
        userName: 'Zohaib Rehman',
        location: 'UBC | Vancouver',
        postTitle: 'Seeking a chill guy to vibe with',
        geo: [43.622566, -79.387056]
    },
    {
        userPhoto: userPhoto1,
        userName: 'Anthony Jones',
        location: 'Waterloo University',
        postTitle: 'Looing for four roommates to start a FRAT house!',
        geo: [43.642566, -79.327056]
    },
]

export class MapFinder extends Component {
    render() {
        return (
            <div>
            <MapContainer center={[43.642566, -79.387056]} zoom={13} scrollWheelZoom={true} className='mapContainer'>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {posts.map((post, postIdx) => {
                    const icon = new Icon({
                        iconUrl: post.userPhoto,
                        iconSize: [40, 40]
                    });
                    return (
                        <Marker
                        key={postIdx}
                        position={[
                            post.geo[0],
                            post.geo[1]
                        ]}
                        icon={icon}
                        >
                            <Popup>
                            <a href='/post'>
                                    <h3 className='userName'>{post.userName}</h3>
                                    <small className='location'>{post.location}</small>
                                    <p>{post.postTitle}</p>
                            </a>
                            </Popup>
                        </Marker>
                )})}
            </MapContainer>
            </div>
        )
    }
}

export default MapFinder
