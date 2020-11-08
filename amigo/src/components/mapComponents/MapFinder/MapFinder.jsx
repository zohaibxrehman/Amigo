import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from "leaflet";
import './MapFinder.css'
import 'leaflet/dist/leaflet.css';
import logo from '../../../assets/potrait4.png'

export class MapFinder extends Component {
    render() {
        const icon = new Icon({
            iconUrl: logo,
            iconSize: [40, 40]
        });
        return (
            <div>
            <MapContainer center={[43.642566, -79.387056]} zoom={13} scrollWheelZoom={true} className='mapContainer'>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[43.642566, -79.387056]} icon={icon}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
            </div>
        )
    }
}

export default MapFinder
