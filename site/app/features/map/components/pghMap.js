import React, {Component} from 'react';
import {GoogleMap, withGoogleMap, withScriptjs} from 'react-google-maps';
import {connect} from 'react-redux';

import {getBusses} from '../../busses/actions';
import {PGH_LOC, GOOGLE_API_KEY} from '../../shared/constants';

const PghGoogleMap = () => (
  <GoogleMap
    defaultZoom={10}
    defaultCenter={PGH_LOC} />
);
const Map = withScriptjs(withGoogleMap(PghGoogleMap));

class PghMap extends Component {
  componentDidMount() {
    this.props.getBusses();
  }

  // render
  renderLoadingElement() {
    return (
      <div style={{height: '100%'}} />
    );
  }

  renderContainerElement() {
    return (
      <div style={{height: '400px', width: '500px'}} />
    );
  }

  renderMapElement() {
    return (
      <div style={{height: '100%'}} />
    );
  }

  render() {
    return (
      <Map
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${GOOGLE_API_KEY}`}
        loadingElement={this.renderLoadingElement()}
        containerElement={this.renderContainerElement()}
        mapElement={this.renderMapElement()} />
    );
  }
}

export default connect(null, {getBusses})(PghMap);
