import React from 'react';
import * as L from 'leaflet';
import { Map, TileLayer } from 'react-leaflet';

type Props = {
};

type State = {
  lat: number,
  lng: number,
  zoom: number
};

class RecapMap extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props)
    this.state = {
      lat: 39.9526,
      lng: -75.1636,
      zoom: 13
    }
  }

  render() {
    const position: L.LatLngExpression = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          subdomains='abcd'
          url='https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.png'
        />
      </Map>
    );
  }
}

export default RecapMap;
