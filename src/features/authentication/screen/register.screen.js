import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { TextInput } from "react-native-paper";
import AuthButton from "../components/auth-button.component";

export const RegisterScreen = ({ navigation }) => {
  const [show_password, setShowPassword] = React.useState(false);
  return (
    <View style={styles.registerWrapper}>
      <SafeArea style={styles.registerContainer}>
        <View style={styles.registerFormWrapper}>
          <Image
            source={{
              uri: "https://ik.imagekit.io/bqofr3ncj/Projects/Fit%20(1).png?updatedAt=1717430956550",
            }}
            style={styles.registerLogo}
          />

          <View style={styles.registerFormContainer}>
            <TextInput
              mode="outlined"
              placeholderTextColor={"#ffffff"}
              placeholder="user name"
              textColor="#ffffff"
              activeOutlineColor="#ffffff"
              outlineColor="#ffffff"
              style={{ backgroundColor: "transparent", marginBottom: 8 }}
            />
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

            {/* Password Inputs container */}
            <View style={styles.passwordInputsContainer}>
              <TextInput
                mode="outlined"
                placeholderTextColor={"#ffffff"}
                placeholder="new password"
                textColor="#ffffff"
                activeOutlineColor="#ffffff"
                outlineColor="#ffffff"
                style={{ backgroundColor: "transparent" }}
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

            <View style={styles.registerButtonContainer}>
              <AuthButton
                styling={styles.registerButtonText}
                onclick={() => navigation.navigate("Email confirmation")}
                text={"Create account"}
              />
              <View style={styles.registerRedirectContainer}>
                <Text style={styles.alreadyConnectedText}>
                  Already connected ?
                </Text>
                <Text
                  onPress={() => navigation.navigate("Login")}
                  style={styles.loginText}
                >
                  Log in
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
  registerWrapper: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#1a1919",
  },
  registerContainer: {
    flex: 1,
    width: "100%",
    alignContent: "center",
    justifyContent: "center",
  },
  registerLogo: {
    width: 60,
    height: 60,
    padding: 8,
    marginLeft: "auto",
    marginRight: "auto",
  },
  registerFormWrapper: {
    flex: 1,
    alignContent: "center",
    marginTop: 16,
  },
  registerFormContainer: {
    alignContent: "center",
    justifyContent: "center",
    width: "90%",
    marginTop: 26,
    marginLeft: "auto",
    marginRight: "auto",
    padding: 6,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
  },
  registerButtonContainer: {
    marginTop: 16,
  },
  registerButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  passwordInputsContainer: {
    marginTop: 35,
  },
  registerRedirectContainer: {
    padding: 8,
    marginRight: "auto",
    marginLeft: "auto",
    display: "flex",
    flexDirection: "row",
  },
  alreadyConnectedText: {
    color: "#ffffff",
    fontWeight: "300",
    marginRight: 10,
  },
  loginText: {
    color: "#ffffff",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
