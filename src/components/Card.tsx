import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { Entypo, Foundation, Feather, MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import foodJson from "../../src/utils/food.json";
import FoodInfo from "./FoodInfo";
import Button from "./Button/Button";
import IconButton from "./IconButton/IconButton";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    padding: 16,
    backgroundColor: "#fdba74cc",
    borderRadius: 24,
    height: "100%",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 16,
    borderRadius: 24,
    paddingHorizontal: 8,
    paddingVertical: 16,
    backgroundColor: "#fff",
    height: "100%",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "auto",
  },
  title: {
    fontSize: 20,
    fontWeight: "500",
  },
  name: { fontSize: 24, fontWeight: "bold" },
  image: { width: "auto", height: 210, resizeMode: "cover" },
  price: { fontSize: 22, fontWeight: "bold" },
  quantityPriceContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  quantityButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: 124,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 9999,
    backgroundColor: "orange",
  },
  infoContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  descriptionContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    paddingHorizontal: 8,
  },
  descriptionTitle: { fontSize: 20, fontWeight: "500" },
  description: { fontSize: 14, color: "gray" },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    paddingHorizontal: 16,
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "auto",
    gap: 8,
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
    padding: 24,
  },
});

interface ICardProps {
  foodJson: typeof foodJson;
}

const Card = (props: ICardProps) => {
  const [isFavority, setIsFavority] = useState(false);
  const [count, setCount] = useState(1);

  const gradientColors = ["#fce0c2", "#fce0c2", "#fce0c2", "#ffff"];

  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.header}>
            <IconButton icon={<Entypo name="chevron-left" size={24} color="black" />} />
            <Text style={styles.title}>Product Details</Text>
            <TouchableOpacity onPress={() => setIsFavority(!isFavority)}>
              <Foundation name="heart" size={36} color={!isFavority ? "lightgray" : "red"} />
            </TouchableOpacity>
          </View>
          <LinearGradient colors={gradientColors} style={styles.cardContainer}>
            <Text style={styles.name}>{props.foodJson.product_name}</Text>
            <Image style={styles.image} source={require("../../assets/steak.png")} />
            <View style={styles.quantityPriceContainer}>
              <View style={styles.quantityButton}>
                <TouchableOpacity onPress={() => setCount((prev) => prev - 1)}>
                  <Feather name="minus" size={24} color={"black"} />
                </TouchableOpacity>
                <Text className="font-semibold text-2xl">{count}</Text>
                <TouchableOpacity onPress={() => setCount((prev) => prev + 1)}>
                  <Feather name="plus" size={24} color={"black"} />
                </TouchableOpacity>
              </View>
              <Text style={styles.price}>{USDollar.format(Number(props.foodJson.price))}</Text>
            </View>
            <View style={styles.infoContainer}>
              <FoodInfo
                icon={<Fontisto name="star" size={18} color="orange" />}
                label={props.foodJson.rating}
              />
              <FoodInfo
                icon={<MaterialCommunityIcons name="fire" size={24} color="red" />}
                label={`${props.foodJson.calories} calories`}
              />
              <FoodInfo
                icon={<MaterialCommunityIcons name="clock" size={20} color="black" />}
                label={props.foodJson.time}
              />
            </View>
          </LinearGradient>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.description}>{props.foodJson.description}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button variant="outlined">Add To Cart</Button>
            <Button variant="solid">Buy Now</Button>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Card;
