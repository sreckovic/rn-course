import React from "react";
import { StyleSheet, View } from "react-native";

import ListItem from "./ListItem/ListItem";

const list = ({ places }) => {
  /*let placesOutput = null;
    if (places) {
      placesOutput = places.map(place => {
        return <Text>{place}</Text>;
      });
    }*/
  const placesOutput = places.map((place, i) => (
    <ListItem key={i} placeName={place} />
  ));

  return <View style={styles.listContainer}>{placesOutput}</View>;
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default list;
