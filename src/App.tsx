import * as React from "react";
import { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends Component {
  public render() {
    return (
      <View style={styles.container}>
        <Text>Your Typescript project is working, aya!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
