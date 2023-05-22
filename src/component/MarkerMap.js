import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import '../styles/component/MarkerMap.css';

export const MarkerMap = ({markers}) => {
    return (
        <MapContainer  center={[45.4, -75.7]} zoom={12}scrollWheelZoom={false}>
            <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {markers.map((marker, id) => (
                <Marker
                key={id}
                position={[
                    marker.longitude,
                    marker.latitude,
                ]}
                onClick={() => {
                }}
                />
            ))} 
        </MapContainer>
    );
}
