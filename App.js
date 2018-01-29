import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Add from "./src/components/Add/Add";
import List from "./src/components/List/List";

export default class App extends Component {
  state = {
    placeName: "",
    places: []
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
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Add
          placeName={this.state.placeName}
          placeNameChanged={this.placeNameChangedHandler}
          placeSubmit={this.placeSubmitHandler}
        />
        <List places={this.state.places} />
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
