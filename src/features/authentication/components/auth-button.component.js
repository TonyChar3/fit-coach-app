import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function AuthButton({ styling, text, onclick }) {
  return (
    <TouchableOpacity onPress={onclick} style={styles.authButton}>
      <Text style={styling}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  authButton: {
    backgroundColor: "#8C52FF",
    padding: 8,
    margin: 16,
    borderRadius: 10,
  },
});
