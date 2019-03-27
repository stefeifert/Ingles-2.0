import React, { Component } from "react";
import { GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import ReactDOM from "react-dom";
import Navbar from "../navbar";
import Sidebar from "../sidebar";
import axios from "axios";

import CurrentLocation from "../gmap";

// GOOGLE PLACES URL, RETURNS JSON LIST OF INGLES MARKETS
// https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=33.776302,%20-84.390012&radius=24140.2&type=store&keyword=ingles+market&key=AIzaSyBGYr7DPVtqsuuoyqzRuB72bRUI0BbJ2Sg

export class StoreLocator extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    storeLocations: []
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  componentDidMount() {
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=33.776302,%20-84.390012&radius=24140.2&type=store&keyword=ingles+market&key=AIzaSyBGYr7DPVtqsuuoyqzRuB72bRUI0BbJ2Sg`
      )
      .then(response => {
        this.setState({
          storeLocations: response.data.results
        });
      });
  }

  render() {
    return (
      <div>
        <Navbar />
        <Sidebar />
        <h1>Store Locator Page</h1>
        <div>
          <CurrentLocation
            centerAroundCurrentLocation
            google={this.props.google}
          >
            {this.state.storeLocations.map(store => (
              <Marker
                position={store.geometry.location}
                onClick={this.onMarkerClick}
                name={store.name}
                placeId={store.place_id}
                key={store.place_id}
              >
              </Marker>
            ))}
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
                <a target='_blank' href={'https://www.google.com/maps/place/?q=place_id:' + this.state.selectedPlace.placeId}>Directions</a>
                <p>{this.state.selectedPlace.place_id}</p>
              </div>
            </InfoWindow>
          </CurrentLocation>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBGYr7DPVtqsuuoyqzRuB72bRUI0BbJ2Sg"
})(StoreLocator);
