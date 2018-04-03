import React from "react";
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker
} from "react-google-maps";
import { withProps, compose } from "recompose";

const Map = compose(
    withProps({
        googleMapURL:
            "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyB56wLr_etPh937ZhLEle1Us5oS_SgcCyA",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `300px`, width: `300px` }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
)(props => (
    <GoogleMap
        className="mask"
        defaultZoom={16}
        defaultCenter={{ lat: props.lat, lng: props.lng }}
        defaultOptions={{
            styles: {
                border: `1px solid black`
            }
        }}
    >
        {props.isMarkerShown && (
            <Marker position={{ lat: props.lat, lng: props.lng }} />
        )}
    </GoogleMap>
));

export default Map;
