import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Category = () => {
  const categoryItems = [
    { id: 1, img: require("../img/mobile_catg.jpg"), name: "Mobile" },
    { id: 2, img: require("../img/fashion.jpeg"), name: "Fashion" },
    { id: 3, img: require("../img/HomeDecor.jpg"), name: "Home & Decor" },
    { id: 4, img: require("../img/Appliances.jpg"), name: "Appliances" },
    { id: 5, img: require("../img/HealthBeauty.jpg"), name: "Grocery" },
    { id: 6, img: require("../img/electronics.jpg"), name: "Electronics" },
    // { id: 8, img: require("../img/sport.jpg"), name: "Sports" },
    // { id: 100, img: require("../img/home-category-48.png"), name: "All Categories" },
  
  ];
  
  return (
    <View style={styles.container}>
    <Text style={styles.customText}>Categories</Text>
    <View style={styles.cardContainer}>
      {categoryItems.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image style={styles.img} source={item.img} />
          <Text style={styles.name}>{item.name}</Text>
        </View>
      ))}
    </View>
  </View>
  
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#fff",
    paddingVertical:20,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  customText: {
    fontWeight: "bold",
    fontSize: 30,
    // fontVariant: ["small-caps"],
    // textDecorationLine: "line-through",
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
    marginTop: 20,
  },
  card: {
    width: 89,
    height: 90,
    alignItems: "center",
  },
  img: {
    width: 50,
    height: 50,
    borderRadius: 15,
  },
  name: {
    fontSize: 12,
    color: "#6A6A6A",
    marginTop: 5,
  },
});

export default Category;
