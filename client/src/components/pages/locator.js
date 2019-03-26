import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import ReactDOM from 'react-dom';
import Navbar from '../navbar';
import Sidebar from '../sidebar';

import CurrentLocation from '../gmap';

export class StoreLocator extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
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

    render() {
        return (
            <div>
                <Navbar />
                <Sidebar />
                <h1>Store Locator Page</h1>
                <div>
                    <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
                        <Marker onClick={this.onMarkerClick} name={'current location'} />
                        <InfoWindow
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}
                            onClose={this.onClose}
                        >
                            <div>
                                <h4>{this.state.selectedPlace.name}</h4>
                            </div>
                        </InfoWindow>
                    </CurrentLocation>
                </div>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBGYr7DPVtqsuuoyqzRuB72bRUI0BbJ2Sg'
})(StoreLocator);