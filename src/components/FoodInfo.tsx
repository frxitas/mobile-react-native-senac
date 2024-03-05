import React, { ReactNode } from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  text: {
    color: "grey",
  },
});

interface IFoodInfoProps {
  icon: ReactNode;
  label: string | number;
}

const FoodInfo = ({ icon, label }: IFoodInfoProps) => {
  return (
    <View style={styles.container}>
      {icon}
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

export default FoodInfo;
