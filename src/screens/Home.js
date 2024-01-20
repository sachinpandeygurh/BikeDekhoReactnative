import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";

// import { TouchableOpacity } from "react-native-gesture-handler";
// import { ItemsList } from "../components/Items";
// import {
//   useFonts,
//   Montserrat_400Regular,
//   Montserrat_600SemiBold,
//   Montserrat_700Bold,
// } from "@expo-google-fonts/montserrat";
// import * as Font from "expo-font";
// import About from "../components/About";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LocationComponent from "../components/Location";
import Carusel from "../components/Carusel";
import Categoury from "../components/Categoury";
import SubCategoury from "../components/SubCategoury";

const loadFonts = async () => {
  // await Font.loadAsync({
  //   Montserrat_700Bold,
  //   Montserrat_400Regular,
  //   Montserrat_600SemiBold,
  // });
};
const Home = (props) => {
  // useEffect(() => {
  //   loadFonts();
  // }, []);



  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={{ marginTop: 75 }}>
        <LocationComponent />
        <Carusel />
        <Categoury/>

        <SubCategoury />
      </ScrollView>

      <Footer />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#E4E4E4",
    position: "relative",
  },
  img: {
    height: "50%",
    width: "120%",
    resizeMode: "contain",
  },
  title: {
    color: "#FFF",
    //  fontFamily: "Montserrat_700Bold",
    fontSize: 30,
    marginTop: 0,
  },
  detail: {
    color: "#FFF",
    //  fontFamily: "Montserrat_400Regular",
    fontSize: 18,
    textAlign: "justify",
    paddingHorizontal: 20,
    marginBottom: 50,
    lineHeight: 30,
    marginTop: 10,
    alignItems: "center",
  },
  btn: {
    // marginTop: 40,
    marginBottom: 10,
    backgroundColor: "#E2443B",
    paddingHorizontal: 140,
    paddingVertical: 10,
    borderRadius: 30,
  },
  text: {
    //  fontFamily: "Montserrat_600SemiBold",
    fontSize: 30,
    color: "#FFF",
  },
});
