import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";
//import placeImage from "./src/assets/pexels-photo-221471.jpeg";
import PlaceDetail from "./src/components/PlaceDetail/PlaceDetail";
import * as actions from "./src/store/actions/index";

class App extends Component {
  /*state = {
    places: [],
    selectedPlace: null
  };*/

  placeAddedHandler = placeName => {
    /*this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          name: placeName,
          //image: placeImage
          image: {
            uri:
              "https://static.pexels.com/photos/221471/pexels-photo-221471.jpeg"
          }
        })
      };
    });*/
    this.props.onAddPlace(placeName);
  };

  /*placeDeletedHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== key;
        })
      };
    });
  };*/

  placeDeletedHandler = () => {
    /*this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });*/
    this.props.onDeletePlace();
  };

  modalClosedHandler = () => {
    /*this.setState({
      selectedPlace: null
    });*/
    this.props.onDeselectPlace();
  };

  placeSelectedHandler = key => {
    /*this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      };
    });*/
    this.props.onSelectPlace(key);
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.props.selectedPlace}
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList
          places={this.props.places}
          onItemSelected={this.placeSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: name => dispatch(actions.addPlace(name)),
    onDeletePlace: () => dispatch(actions.deletePlace()),
    onSelectPlace: key => dispatch(actions.selectPlace(key)),
    onDeselectPlace: () => dispatch(actions.deselectPlace())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
