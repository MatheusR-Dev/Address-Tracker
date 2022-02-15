import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '900px'
};

interface CoordsProps {
  lat: number;
  lng:number
}

interface MapCompProps {
  coords: CoordsProps,
  position: CoordsProps
}

function MapComp({coords, position}:MapCompProps) {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyC23QwuPvrhw4h7mAFwlH8oipCTBsoG4Ik"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={coords}
        zoom={15}
      >
      <Marker position={position}/>
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MapComp)
