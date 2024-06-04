import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { TextInput } from "react-native-paper";
import AuthButton from "../components/auth-button.component";
import { AntDesign } from "@expo/vector-icons";

export const ForgotPasswordScreen = ({ navigation }) => {
  return (
    <View style={styles.forgotPasswordWrapper}>
      <SafeArea style={styles.forgotPasswordContainer}>
        <View style={styles.forgotPasswordTextContainer}>
          <Text style={styles.title}>You forgot your password ?</Text>
          <Text style={styles.message}>
            Enter your email address below in order to receive a password reset
            access in your inbox.
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            mode="outlined"
            placeholderTextColor={"#ffffff"}
            placeholder="email"
            textColor="#ffffff"
            activeOutlineColor="#ffffff"
            outlineColor="#ffffff"
            style={{ backgroundColor: "transparent", width: "100%" }}
          />
        </View>
        <AuthButton
          styling={styles.resetButtonText}
          text={"Send Email"}
          onclick={() => navigation.navigate("Password reset")}
        />
        <TouchableOpacity
          style={styles.cancelButtonContainer}
          onPress={() => navigation.navigate("Login")}
        >
          <AntDesign
            name="caretleft"
            size={20}
            color="#ffffff"
            style={{ marginRight: 6 }}
          />
          <Text style={styles.cancelButtonText}>cancel</Text>
        </TouchableOpacity>
      </SafeArea>
    </View>
  );
};

const styles = StyleSheet.create({
  forgotPasswordWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1a1919",
  },
  forgotPasswordContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  forgotPasswordTextContainer: {
    width: "100%",
    padding: 16,
    margin: 6,
  },
  inputContainer: {
    width: "90%",
    padding: 8,
  },
  cancelButtonContainer: {
    padding: 6,
    textAlign: "left",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  resetButtonText: {
    width: 200,
    padding: 4,
    textAlign: "center",
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 30,
    padding: 8,
  },
  message: {
    color: "#ffffff",
    padding: 6,
    textAlign: "left",
  },
  cancelButtonText: {
    color: "#ffffff",
    fontSize: 18,
  },
});
