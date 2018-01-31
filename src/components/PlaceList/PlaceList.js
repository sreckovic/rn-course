import React from "react";
import { StyleSheet, ScrollView, FlatList } from "react-native";

import ListItem from "./ListItem/ListItem";

const placeList = ({ places, onItemSelected }) => {
  /*let placesOutput = null;
    if (places) {
      placesOutput = places.map(place => {
        return <Text>{place}</Text>;
      });
    }*/
  /*
  const placesOutput = places.map((place, i) => (
    <ListItem
      key={i}
      placeName={place}
      onItemPressed={() => onItemDeleted(i)}
    />
  ));
  */

  //return <ScrollView style={styles.listContainer}>{placesOutput}</ScrollView>;
  return (
    <FlatList
      style={styles.listContainer}
      data={places}
      renderItem={info => (
        <ListItem
          placeName={info.item.name}
          placeImage={info.item.image}
          onItemPressed={() => onItemSelected(info.item.key)}
        />
      )}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default placeList;
