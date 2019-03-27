import React from 'react';
import ReactDOM from 'react-dom';

const mapStyles = {
    map: {
        position: 'absolute',
        width: '40%',
        height: '50%'
    }
};

export class GoogleMap extends React.Component {
    constructor(props) {
        super(props);

        const { lat, lng } = this.props.initialCenter;
        this.state = {
            CurrentLocation: {
                lat: lat,
                lng: lng
            }
        };
    }

    componentDidMount() {
        if (this.props.centerAroundCurrentLocation) {
            if (navigator && navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(pos => {
                    const coords = pos.coords;
                    this.setState({
                        CurrentLocation: {
                            lat: coords.latitude,
                            lng: coords.longitude
                        }
                    });
                });
            }
        }

        this.loadMap();

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
            this.loadMap();
        }
        if (prevState.CurrentLocation !== this.state.CurrentLocation) {
            this.recenterMap();
        }
    }

    loadMap() {

        if (this.props && this.props.google) {
            // checks if google is available
            const { google } = this.props;
            const maps = google.maps;

            const mapRef = this.refs.map;

            // reference to the actual DOM element
            const node = ReactDOM.findDOMNode(mapRef);

            let { zoom } = this.props;
            const { lat, lng } = this.state.CurrentLocation;
            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign(
                {},
                {
                    center: center,
                    zoom: zoom
                }
            );
            // maps.Map() is constructor that instantiates the map
            this.map = new maps.Map(node, mapConfig);
        };
    };

    recenterMap() {
        const map = this.map;
        const current = this.state.CurrentLocation;

        const google = this.props.google;
        const maps = google.maps;

        if (map) {
            let center = new maps.LatLng(current.lat, current.lng);
            map.panTo(center);
        }
    }

    renderChildren() {
        const { children } = this.props;

        if (!children) return;

        return React.Children.map(children, c => {
            if (!c) return;
            return React.cloneElement(c, {
                map: this.map,
                google: this.props.google,
                mapCenter: this.state.CurrentLocation
            });
        });
    }

    render() {
        const style = Object.assign({}, mapStyles.map);

        return (
            <div>
                <div style={style} ref="map">
                    Loading map...
        </div>
                {this.renderChildren()}
            </div>
        );
    }
}
export default GoogleMap;

GoogleMap.defaultProps = {
    zoom: 10,
    initialCenter: {
        lat: 0,
        lng: 0
    },
    centerAroundCurrentLocation: false,
    visible: true
};