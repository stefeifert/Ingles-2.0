import React, { Component } from "react";
import { GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
// import ReactDOM from "react-dom";
import Navbar from "../navbar";
import Sidebar from "../sidebar";
import axios from "axios";

import CurrentLocation from "../gmap";

export class StoreLocator extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    storeLocations: [],
    currentLocation: {
      lat: 0,
      lng: 0
    }
  };

  setCurrentLocation = location => {
    this.setState({
      currentLocation: location
    });
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentLocation !== this.state.currentLocation) {
      const { lat, lng } = this.state.currentLocation;
      axios.get(`/api/locations?lat=${lat}&lng=${lng}`).then(response => {
        this.setState({
          storeLocations: response.data
        });
      });
    }
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
            setCurrentLocation={this.setCurrentLocation}
            currentLocation={this.state.currentLocation}
          >
            {this.state.storeLocations.map(store => (
              <Marker
                position={store.geometry.location}
                onClick={this.onMarkerClick}
                name={store.name}
                placeId={store.place_id}
                key={store.place_id}
              />
            ))}
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
              onClose={this.onClose}
            >
              <div>
                <h4>{this.state.selectedPlace.name}</h4>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={
                    "https://www.google.com/maps/place/?q=place_id:" +
                    this.state.selectedPlace.placeId
                  }
                >
                  Directions
                </a>
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
