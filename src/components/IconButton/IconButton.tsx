import React, { ReactNode } from "react";
import { Entypo } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";

interface IIconButtonProps {
  icon: ReactNode;
}

const styles = StyleSheet.create({
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    height: 36,
    width: 36,
    shadowColor: "lightgrey",
    shadowOpacity: 10,
    shadowOffset: { width: 1, height: 2 },
    shadowRadius: 4,
    backgroundColor: "#ffffff",
  },
});

const IconButton = ({ icon }: IIconButtonProps) => {
  return <TouchableOpacity style={styles.base}>{icon}</TouchableOpacity>;
};

export default IconButton;
