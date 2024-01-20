import React, { useEffect, useState } from "react";
import { StyleSheet, Image, Text, View, ScrollView, ToastAndroid } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import { useFonts, Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import * as Font from 'expo-font';
import { TouchableOpacity } from "react-native";

const loadFonts = async () => {
    await Font.loadAsync({
        Montserrat_700Bold, Montserrat_400Regular, Montserrat_600SemiBold, 
       
    });
};



const Detail = (props) => {
  const [isHeart , setIsHeart]=useState(false)
  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      'sorry! This product color options are not available now',
      ToastAndroid.LONG,
      ToastAndroid.CENTER,
    );
  };
  const [heartSize, setHeartSize] = useState(10);

  useEffect(() => {
    if (isHeart) {
      const intervalId = setInterval(() => {
        setHeartSize((prevSize) => Math.max(prevSize + 5, 40)); 
        loadFonts()
      }, 150);

      setTimeout(() => {
        clearInterval(intervalId);
      }, 4000); 
    }
  }, [isHeart]);

  useEffect(() => {
    loadFonts();
}, [useFonts]);
// console.log(heartSize);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>props.navigation.goBack()}>
          <Feather name="chevron-left" color="#FFF" size={25} />
        </TouchableOpacity>
        <Feather name="shopping-cart" color="#FFF" size={25} />
      </View>
      <View style={{ position: "absolute", top: 0, zIndex: -1, top: 150 }}>
      <FontAwesome name={isHeart? "heart": ""}   color={heartSize>=165? "green" : "red"}size={heartSize} />
    </View>

      <Image source={require("../img/c_logo.png")} style={styles.img} />
      <View style={styles.cont3}>
        <ScrollView style={{paddingTop: 0 , paddingBottom: 0}}>
        <Text style={styles.title}>Maxx Scooter</Text>
        <Text style={styles.subtitle}>Model S1</Text>
        <View style={styles.cont2}>
          <Text style={{ ...styles.title, flex: 2, marginTop: 0 }}>Colors</Text>
          <View style={styles.selected}>
            <View style={styles.c1}  />
          </View>
          <TouchableOpacity style={styles.c2}  onPress={() => showToastWithGravity()}/>
          <TouchableOpacity style={styles.c3}  onPress={() => showToastWithGravity()}/>
        </View>
        <Text style={styles.text}>
          <Text style={{fontWeight:"900"}}>About: </Text>
          Lorem ipsum dolor sit amet, consectutur adipsing elit, sed do eiusmod
          tempor inciduent ut labore et dolore magna
        </Text>
          </ScrollView>
        <View style={styles.cont1}>
          <FontAwesome name={isHeart? "heart": "heart-o"}  color={isHeart? 'red' : '#000'} size={25} onPress={()=> setIsHeart(!isHeart , setHeartSize(0))} />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => props.navigation.navigate("Home")}
          >
            <Text style={styles.btnText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#121212",
  },
  title: {
    fontSize: 25,
    fontFamily: "Montserrat_700Bold",
    marginTop: 30,
  },
  subtitle: {
    fontSize: 20,
    color: "#474747",
    marginTop: 10,
    fontFamily: "Montserrat_400Regular",
  },
  text: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 18,
    paddingRight: 80,
    // lineHeight: 25,
    textAlign: "justify"
  },
  btn: {
    backgroundColor: "#E2443B",
    paddingHorizontal: 60,
    paddingVertical: 12,
    borderRadius: 30,
  },
  btnText: {
    fontFamily: "Montserrat_600SemiBold",
    fontSize: 20,
    color: "#FFF",
  },
  cont1: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    marginTop: 40,
    marginBottom: 40,
  },
  c3: {
    height: 20,
    width: 20,
    borderRadius: 15,
    backgroundColor: "#529CC0",
  },
  c2: {
    height: 20,
    width: 20,
    borderRadius: 15,
    backgroundColor: "#529C47",
    marginHorizontal:10
  },
  c1: {
    height: 20,
    width: 20,
    borderRadius: 15,
    backgroundColor: "#E2443B",
  },
  selected: {
    borderColor: "#E2443B",
    height: 30,
    width: 30,
    borderRadius: 24,
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  cont2: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 25,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  img: {
    height: "45%",
    width: "50%",
  },
  cont3: {
    flex: 1,
    backgroundColor: "#FFF",
    width: "100%",
    borderTopLeftRadius: 50, 
    borderTopRightRadius: 50, 
    paddingHorizontal: 20,
    overflow: "hidden"
  },
});
