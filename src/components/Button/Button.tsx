import React, { ReactNode } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface IButtonProps {
  children: ReactNode;
  variant: "solid" | "outlined";
}

const styles = StyleSheet.create({
  base: {
    width: "50%",
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 16,
  },
  solid: {
    backgroundColor: "orange",
  },
  outlined: {
    borderColor: "orange",
    borderWidth: 1,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});

const Button = ({ children, variant, ...rest }: IButtonProps) => {
  return (
    <TouchableOpacity style={{ ...styles.base, ...styles[variant] }} {...rest}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
