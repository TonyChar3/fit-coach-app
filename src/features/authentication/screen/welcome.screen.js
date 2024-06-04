import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";

export const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.welcomeWrapper}>
      <SafeArea style={styles.welcomeContainer}>
        <Image
          source={{
            uri: "https://ik.imagekit.io/bqofr3ncj/Projects/Fit%20(1).png?updatedAt=1717430956550",
          }}
          style={styles.welcomeLogoImage}
        />
        <View>
          <TouchableOpacity
            style={styles.welcomeConnectButton}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={styles.connectButtonText}>Connect</Text>
          </TouchableOpacity>
        </View>
      </SafeArea>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1a1919",
  },
  welcomeContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeLogoImage: {
    width: 200,
    height: 200,
  },
  welcomeConnectButton: {
    backgroundColor: "#8C52FF",
    padding: 8,
    margin: 16,
    borderRadius: 10,
  },
  connectButtonText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#ffffff",
  },
});
