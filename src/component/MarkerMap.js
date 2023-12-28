import React, { useCallback, useMemo, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import startIcon from "../assets/MapIcon/start-eip-marker-icon.png";
import finishIcon from "../assets/MapIcon/finish-eip-marker-icon.png";
import L from "leaflet";
import "../styles/component/MarkerMap.css";

export const MarkerMap = ({ markers }) => {
  const [trackDisplay, setTrackDisplay] = useState(false);
  const [TrackId, setTrackId] = useState(0);
  const markerRef = useRef(null);
  const multiPolyline = [
    [
      [51.5, -0.1],
      [51.52, -0.12],
    ],
    [
      [51.5, -0.05],
      [51.5, -0.06],
      [51.52, -0.06],
    ],
    [
      [51.5, -0.08],
      [51.5, -0.09],
      [51.52, -0.09],
      [51.52, -0.13],
    ],
  ];

  const StartIcon = L.icon({
    iconUrl: startIcon,
    iconSize: [50, 50],
  });

  const FinishIcon = L.icon({
    iconUrl: finishIcon,
    iconSize: [50, 50],
  });

  const lineOptions = { color: "#124edb", dashArray: '10, 10', dashOffset: 20 };

  const toggleTrackDisplay = (id) => {
    setTrackId(id);
    setTrackDisplay((d) => !d);
  };

  return (
    <MapContainer
      ref={React.useRef()}
      center={[51.5, -0.1]}
      zoom={12}
      scrollWheelZoom={false}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {markers &&
        !trackDisplay &&
        multiPolyline.map((marker, id) => (
          <Marker icon={StartIcon} key={id} position={marker[0]}>
            <Popup minWidth={90}>
              <span onClick={() => toggleTrackDisplay(id)}>
                {"Click here to display this track"}
              </span>
            </Popup>
          </Marker>
        ))}
      {trackDisplay && (
        <>
          <Polyline
            pathOptions={lineOptions}
            positions={multiPolyline[TrackId]}
          />
          {multiPolyline[TrackId].map((marker, id) => {
            switch (id) {
              case 0:
                return (
                  <Marker key={id} icon={StartIcon} position={marker}>
                    <Popup minWidth={90}>
                      <span onClick={() => toggleTrackDisplay(0)}>
                        {"Click here to hide this track !"}
                      </span>
                    </Popup>
                  </Marker>
                );
              case multiPolyline[TrackId].length - 1:
                return (
                  <Marker key={id} icon={FinishIcon} position={marker}>
                    <Popup minWidth={90}>
                      <span onClick={() => toggleTrackDisplay(0)}>
                        {"Click here to hide this track !"}
                      </span>
                    </Popup>
                  </Marker>
                );
              default:
                return (
                  <Marker key={id} position={marker}>
                    <Popup minWidth={90}>
                      <span>
                        {"Click here to hide this track"}
                      </span>
                    </Popup>
                  </Marker>
                );
            }
          })}
        </>
      )}
    </MapContainer>
  );
};
