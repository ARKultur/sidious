import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import {
  
  requestOrganisationJourneys,
} from "../redux-action/JourneyAction";

import MarkerService from "../API/Marker";


export const MarkerMap = ({ markers }) => {
  const [trackDisplay, setTrackDisplay] = useState(false);
  const [TrackId, setTrackId] = useState(0);
  const journeyStates = useSelector((state) => state.rootReducer.journeyReducer);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const organisationId = localStorage.getItem("organisationId");
  const [journeys, setJourneys] = useState([]);
  const [node_array, setNodeArray] = useState([])


  useEffect(() => {
    if (organisationId !== "null" && token) {
      dispatch(requestOrganisationJourneys({token, organisationId}));
      setJourneys(journeyStates.journeys);
    }
  }, []);

  

  useEffect (() => {
    if (journeyStates.journeys !== journeys) {
      setJourneys(journeyStates.journeys);
      const concatJourneys = Promise.all(journeyStates.journeys.map(async (journey) => {
        const nodes = await MarkerService.getJourneyMarkers(token, journey.uuid);
        if (nodes) {
          return nodes
        } else {return null}
      }))
      concatJourneys.then(result => {
        setNodeArray(result)
      });
    }
  }, [journeyStates.journeys]);

  console.log(node_array)
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

  const extract_node_cord = (journey_nodes) => {
    if (journey_nodes) {
      const myCord = []
      journey_nodes.map((journey) => {
        myCord.push([journey.node.latitude, journey.node.longitude])
      })
      return myCord
    }
    return []
  }

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
      {node_array &&
        !trackDisplay &&
        node_array.map((nodes, id) => (
          <>
            { nodes && 
              <Marker icon={StartIcon} key={id} position={[nodes[0].node.latitude, nodes[0].node.longitude]}>
              <Popup minWidth={90}>
                <span onClick={() => toggleTrackDisplay(id)}>
                  {"Click here to display this track"}
                </span>
              </Popup>
            </Marker>
            } 
          </>
        ))}
      {trackDisplay && (
        <>
          <Polyline
            pathOptions={lineOptions}
            positions={extract_node_cord(node_array[TrackId])}
          />
          {node_array[TrackId].map((marker, id) => {
            switch (id) {
              case 0:
                return (
                  <Marker key={id} icon={StartIcon} position={[marker.node.latitude, marker.node.longitude]}>
                    <Popup minWidth={90}>
                      <span onClick={() => toggleTrackDisplay(0)}>
                        {"Click here to hide this track !"}
                      </span>
                    </Popup>
                  </Marker>
                );
              case node_array[TrackId].length - 1:
                return (
                  <Marker key={id} icon={FinishIcon} position={[marker.node.latitude, marker.node.longitude]}>
                    <Popup minWidth={90}>
                      <span onClick={() => toggleTrackDisplay(0)}>
                        {"Click here to hide this track !"}
                      </span>
                    </Popup>
                  </Marker>
                );
              default:
                return (
                  <Marker key={id} position={[marker.node.latitude, marker.node.longitude]}>
                    {/*<Popup minWidth={90}>
                      <span>
                        {"Click here to hide this track"}
                      </span>
                </Popup>*/}
                  </Marker>
                );
            }
          })}
        </>
      )}
    </MapContainer>
  );
};
