import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import Mobile from "./SubCategoury/mobile";
import Fashion from "./SubCategoury/Fashion";
import HomenDecor from "./SubCategoury/HomenDcor";
import Appliances from "./SubCategoury/Appliances";
import Electronics from "./SubCategoury/Electronics";
import Grocery from "./SubCategoury/Grocery";

export default function SubCategoury() {
  const categoryItems = [
    { id: 1, img: require("../img/mobile_catg.jpg"), name: "Mobile" },
    { id: 8, img: require("../img/sport.jpg"), name: "Sports" },
    { id: 2, img: require("../img/electronics.jpg"), name: "Electronics" },
    { id: 5, img: require("../img/fashion.jpeg"), name: "Fashion" },
    { id: 3, img: require("../img/HomeDecor.jpg"), name: "Home & Decor" },
    { id: 5, img: require("../img/HealthBeauty.jpg"), name: "Health & Beauty" },
    { id: 6, img: require("../img/Appliances.jpg"), name: "Appliances" },
    {
      id: 100,
      img: require("../img/home-category-48.png"),
      name: "All Categories",
    },
  ];

  return (
    <View>
      <Mobile />
      <Fashion />
      <HomenDecor />
      <Appliances/>
      <Grocery/>
      <Electronics/>
      
    </View>
  );
}
