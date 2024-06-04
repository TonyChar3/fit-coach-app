import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { TextInput } from "react-native-paper";

import AuthButton from "../components/auth-button.component";

export const PasswordResetScreen = ({ navigation }) => {
  const [show_password, setShowPassword] = React.useState(false);
  return (
    <View style={styles.passwordResetWrapper}>
      <SafeArea style={styles.passwordResetContainer}>
        <Image
          source={{
            uri: "https://ik.imagekit.io/bqofr3ncj/Projects/Fit%20(1).png?updatedAt=1717430956550",
          }}
          style={styles.passwordResetLogo}
        />
        <View style={styles.passwordResetTitleContainer}>
          <Text style={styles.title}>New password</Text>
          <Text style={styles.message}>
            Please enter a new password and confirm it.
          </Text>
        </View>
        <View style={styles.passwordInputsContainer}>
          <TextInput
            mode="outlined"
            placeholderTextColor={"#ffffff"}
            placeholder="new password"
            textColor="#ffffff"
            activeOutlineColor="#ffffff"
            outlineColor="#ffffff"
            style={{ backgroundColor: "transparent" }}
            left={<TextInput.Icon icon="lock" style={{ color: "#ffffff" }} />}
            right={
              <TextInput.Icon
                icon={show_password ? "eye" : "eye-off"}
                style={{ color: "#ffffff" }}
                onPress={() =>
                  setShowPassword((show_password) => !show_password)
                }
              />
            }
            secureTextEntry={show_password ? false : true}
          />
          <TextInput
            mode="outlined"
            placeholderTextColor={"#ffffff"}
            placeholder="confirm password"
            textColor="#ffffff"
            activeOutlineColor="#ffffff"
            outlineColor="#ffffff"
            style={{ backgroundColor: "transparent", marginTop: 16 }}
            left={
              <TextInput.Icon
                icon="check"
                style={{ color: "#ffffff", margin: 4 }}
              />
            }
            secureTextEntry={show_password ? false : true}
          />
        </View>
        <View>
          <AuthButton
            styling={styles.passwordResetButtonText}
            text={"Reset Now"}
            onclick={() => navigation.navigate("Login")}
          />
        </View>
      </SafeArea>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordResetWrapper: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#1a1919",
  },
  passwordResetContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  passwordResetTitleContainer: {
    width: "100%",
    margin: 8,
  },
  passwordInputsContainer: {
    width: "90%",
    margin: 8,
  },
  passwordResetButtonText: {
    padding: 4,
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 20,
  },
  passwordResetLogo: {
    width: 60,
    height: 60,
    padding: 8,
    marginLeft: "auto",
    marginRight: "auto",
  },
  title: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 30,
    padding: 8,
    textAlign: "center",
  },
  message: {
    color: "#ffffff",
    padding: 6,
    textAlign: "center",
  },
});
