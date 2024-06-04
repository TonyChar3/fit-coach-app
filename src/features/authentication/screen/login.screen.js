import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import AntDesign from "@expo/vector-icons/AntDesign";
import { TextInput } from "react-native-paper";

import AuthButton from "../components/auth-button.component";

export const LoginScreen = ({ navigation }) => {
  const [show_password, setShowPassword] = React.useState(false);

  return (
    <View style={styles.loginWrapper}>
      <SafeArea style={styles.loginContainer}>
        <View style={styles.loginFormWrapper}>
          <Image
            source={{
              uri: "https://ik.imagekit.io/bqofr3ncj/Projects/Fit%20(1).png?updatedAt=1717430956550",
            }}
            style={styles.loginLogo}
          />

          <View style={styles.loginFormContainer}>
            <TouchableOpacity onPress={() => null} style={styles.googleButton}>
              <Text>
                <AntDesign name="google" size={32} color="white" />
              </Text>
            </TouchableOpacity>

            <View style={styles.contiueWithContainer}>
              <View style={styles.continueWithDivider}></View>
              <Text style={styles.continueWithText}>Or continue with</Text>
              <View style={styles.continueWithDivider}></View>
            </View>

            <View>
              <TextInput
                mode="outlined"
                placeholderTextColor={"#ffffff"}
                placeholder="email"
                textColor="#ffffff"
                activeOutlineColor="#ffffff"
                outlineColor="#ffffff"
                style={{ backgroundColor: "transparent" }}
                left={
                  <TextInput.Icon icon="email" style={{ color: "#ffffff" }} />
                }
              />
              <TextInput
                mode="outlined"
                placeholderTextColor={"#ffffff"}
                placeholder="password"
                textColor="#ffffff"
                activeOutlineColor="#ffffff"
                outlineColor="#ffffff"
                style={{ backgroundColor: "transparent", marginTop: 16 }}
                left={
                  <TextInput.Icon icon="lock" style={{ color: "#ffffff" }} />
                }
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
            </View>
            <View style={styles.forgotPasswordContainer}>
              <Text
                onPress={() => navigation.navigate("Forgot Password")}
                style={styles.forgotPasswordText}
              >
                Forgot password ?
              </Text>
            </View>
            <View style={styles.connectButtonContainer}>
              <AuthButton
                styling={styles.connectButtonText}
                onclick={() => null}
                text={"Connect"}
              />
              <View style={styles.registerRedirectContainer}>
                <Text style={styles.noAccountYetText}>No account yet ?</Text>
                <Text
                  onPress={() => navigation.navigate("Register")}
                  style={styles.registerText}
                >
                  Create a new account here
                </Text>
              </View>
            </View>
          </View>
        </View>
      </SafeArea>
    </View>
  );
};

const styles = StyleSheet.create({
  loginWrapper: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#1a1919",
  },
  loginContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
  },
  loginFormWrapper: {
    flex: 1,
    alignContent: "center",
    marginTop: 8,
  },
  loginFormContainer: {
    height: "65%",
    alignContent: "center",
    justifyContent: "center",
    width: "90%",
    marginTop: 16,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 6,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  loginLogo: {
    width: 80,
    height: 80,
    padding: 8,
    marginLeft: "auto",
    marginRight: "auto",
  },
  googleButton: {
    display: "flex",
    alignItems: "center",
    padding: 10,
    borderRadius: 6,
    borderColor: "#ffffff",
    borderWidth: 1,
    alignContent: "center",
  },
  contiueWithContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    marginTop: 8,
    marginBottom: 8,
  },
  continueWithDivider: {
    width: 80,
    height: 0.8,
    backgroundColor: "#ffffff",
  },
  continueWithText: {
    padding: 6,
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
  loginInput: {
    borderColor: "#ffffff",
    fontWeight: 700,
  },
  forgotPasswordContainer: {
    width: "100%",
    padding: 10,
    alignItems: "flex-end",
  },
  forgotPasswordText: {
    color: "#ffffff",
    fontWeight: "light",
  },
  connectButtonContainer: {
    width: "100%",
    padding: 16,
    alignItems: "center",
  },
  connectButtonText: {
    width: 200,
    padding: 4,
    textAlign: "center",
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
  registerRedirectContainer: {
    width: "100%",
    padding: 8,
    display: "flex",
    flexDirection: "row",
  },
  noAccountYetText: {
    color: "#ffffff",
    fontWeight: "300",
    marginRight: 10,
  },
  registerText: {
    color: "#ffffff",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
