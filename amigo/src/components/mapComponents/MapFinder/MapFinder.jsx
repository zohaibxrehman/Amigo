import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from "leaflet";
import './MapFinder.css'
import 'leaflet/dist/leaflet.css';
import data from './dummyData'

export class MapFinder extends Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        // when server and database is set up, this data
        // will be retrieved here
        this.setState({ posts: data })
    }

    render() {
        const { posts } = this.state
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
