import React, { useEffect, useState } from "react";
import { StyleSheet, Image, Text, View } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";
import { ItemsList } from "../components/Items";
import { useFonts, Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import * as Font from 'expo-font';
import About from "../components/About";

const loadFonts = async () => {
    await Font.loadAsync({
        Montserrat_700Bold, Montserrat_400Regular, Montserrat_600SemiBold, 
       
    });
};
const Home = (props) => {
    useEffect(() => {
        loadFonts();
    }, []);
  
  return (
    <View style={styles.container}>
      <ItemsList navigation={props.navigation}/> 
    <Text style={styles.title}>About Company</Text> 
    <Text style={styles.detail}>
        With an updated motor, and integrated anti-theft tech the maxx scooters
        are custom-tuned for the ultimate riding experience.
        With an updated motor, and integrated anti-theft tech the maxx scooters
      </Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => props.navigation.navigate("Detail")}
      >
        <Text style={styles.text}>Next</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    // marginTop: 100,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#121212",
  },
  img: {
    height: "50%",
    width: "120%",
    resizeMode: "contain",
  },
  title: {
    color: "#FFF",
    fontFamily: "Montserrat_700Bold",
    fontSize: 30,
    marginTop: 0,
  },
  detail: {
    color: "#FFF",
    fontFamily: "Montserrat_400Regular",
    fontSize: 18,
    textAlign: "justify",
    paddingHorizontal: 20,
    marginBottom: 50,
    lineHeight: 30,
    marginTop: 10,
    alignItems:"center"
  },
  btn: {
    marginTop: 40,
    marginBottom:10,
    backgroundColor: "#E2443B",
    paddingHorizontal: 140,
    paddingVertical: 10,
    borderRadius: 30,
  },
  text: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 30,
    color: "#FFF",
  },
});
