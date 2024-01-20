import React, { Component } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import {
  AntDesign,
  Feather,
  EvilIcons,
} from "@expo/vector-icons";
import {  FontAwesome5} from "@expo/vector-icons" 

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.footerContainer}>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconWrapper}>
            <AntDesign name="home" size={24} color="black" />
            <Text style={styles.iconText}>Home</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconWrapper}>
            <AntDesign name="dropbox" size={24} color="black" />
            <Text style={styles.iconText}>Categories</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconWrapper}>
            <Feather name="bell" size={24} color="black" />
            <View style={styles.notificationContainer}>
              <Text style={styles.notificationCount}>01</Text>
            </View>
            <Text style={styles.iconText}>Notifications</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconWrapper}>
            <FontAwesome5 name="user-circle" size={24} color="black" />
            <Text style={styles.iconText}>Account</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.iconWrapper}>
            <EvilIcons name="cart" size={24} color="black" />
            <Text style={styles.iconText}>Cart</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footerContainer: {
    width: "100%",
    backgroundColor: "white",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    bottom: -10,
  },
  iconContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  iconWrapper: {
    alignItems: "center",
  },
  notificationContainer: {
    position: "relative",
  },
  notificationCount: {
    fontSize: 9,
    padding: 3,
    fontWeight:"900",
    backgroundColor: "red",
    color: "white",
    borderRadius: 10,
    position: "absolute",
    top: -30,
    right: -20,
  },
  iconText: {
    fontSize: 9,
    fontWeight: "bold",
  },
});
