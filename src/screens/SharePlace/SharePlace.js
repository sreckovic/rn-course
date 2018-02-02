import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import PlaceInput from "../../components/PlaceInput/PlaceInput";
import * as actions from "../../store/actions/index";

class SharePlaceScreen extends Component {
  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };

  render() {
    return (
      <View>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: placeName => dispatch(actions.addPlace(placeName)),
    onDeletePlace: () => dispatch(actions.deletePlace())
  };
};

export default connect(null, mapDispatchToProps)(SharePlaceScreen);
