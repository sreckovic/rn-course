import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

class PlaceInput extends Component {
  state = {
    placeName: ""
  };

  placeNameChangedHandler = value => {
    this.setState({
      placeName: value
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }
    /*
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
    */

    this.props.onPlaceAdded(this.state.placeName);
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          placeholder="An Awesome place"
          value={this.state.placeName}
          onChangeText={this.placeNameChangedHandler}
        />
        <Button
          style={styles.placeButton}
          //onPress={() => this.onPlaceAdded(this.state.placeName)}
          onPress={this.placeSubmitHandler}
          title="Add"
          accessibilityLabel="Add An Awesome place"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});

export default PlaceInput;
