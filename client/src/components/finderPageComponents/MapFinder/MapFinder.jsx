import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from "leaflet";
import './MapFinder.css'
import 'leaflet/dist/leaflet.css';
import { getPosts } from './../../../actions/post'

export class MapFinder extends Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        getPosts(this)
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
                        iconUrl: post.image_url,
                        iconSize: [40, 40],
                        radius: '50'
                    });
                    return (
                        <Marker
                        key={`mapPost${postIdx}`}
                        position={[
                            post.geo[0],
                            post.geo[1]
                        ]}
                        icon={icon}
                        >
                            <Popup>
                            <a href={`/post/${post._id}`}>
                                    <h3 className='userName'>{post['creator_name']}</h3>
                                    <small className='location'>{post.location}</small>
                                    <p>{post.title}</p>
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
