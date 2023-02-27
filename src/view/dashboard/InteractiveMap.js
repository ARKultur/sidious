import React, {useState} from "react";
import Map, {Marker} from 'react-map-gl';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {Box, Button, Modal, TextField, Typography} from "@mui/material";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function InteractiveMap()
{
  const [lng] = useState(127.02);
  const [lat] = useState(37.53);
  const [zoom] = useState(9);
  const [data, setData] = useState({lng: 0, lat: 0});

  // eslint-disable-next-line import/no-webpack-loader-syntax, import/no-unresolved
  mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

  const [open, setOpen] = React.useState(false);
  const handleOpen = (evt) =>  {
    setData(evt.lngLat);
    setOpen(true);
  }
  const handleClose = () => setOpen(false);

  return (
    <>
      <Map
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: zoom
        }}
        style={{width: '100vw', height: '100vh'}}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken="pk.eyJ1IjoiY3B0bmZpc2giLCJhIjoiY2xhOWlsazhjMDkwYTNxdDV6OXdtbmttNSJ9.a3hG_UE-lcUZbnCLTrTQYA"
        onDblClick={handleOpen}
        doubleClickZoom={false}
      >
      <Marker longitude={126.95} latitude={37.50}/>
      </Map>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add new place
          </Typography>
          <TextField
            id="node-title"
            label="Title"
            variant="standard"
          />
          <TextField
            id="node-desc"
            label="Description"
            variant="standard"
          />
          <TextField
            id="node-lng"
            label="Longitude"
            variant="standard"
            defaultValue={data.lng}
          />
          <TextField
            id="node-lat"
            label="Latitude"
            variant="standard"
            defaultValue={data.lat}
          />
          <Button
            variant="contained"
            onClick={() => handleClose()}
          >Cancel</Button>
          <Button
            variant="contained"
          >Next</Button>
        </Box>
      </Modal>
    </>
  )
}