import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const add = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.placeInput}
        placeholder="An Awesome place"
        value={props.placeName}
        onChangeText={props.placeNameChanged}
      />
      <Button
        style={styles.placeButton}
        onPress={props.placeSubmit}
        title="Add"
        accessibilityLabel="Add An Awesome place"
      />
    </View>
  );
};

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

export default add;
