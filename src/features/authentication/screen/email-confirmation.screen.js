import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { theme } from "../../../infrastructure/theme";

import AuthButton from "../components/auth-button.component";

export default function EmailConfirmation() {
  const [email_sent, setEmailSent] = React.useState(false);

  React.useEffect(() => {
    if (email_sent) {
      setTimeout(() => {
        setEmailSent(false);
      }, 5000);
    }
  }, [email_sent]);

  return (
    <View style={styles.emailConfirmationWrapper}>
      <SafeArea style={styles.emailConfirmationContainer}>
        <View>
          <Text style={styles.title}>Confirm your email address</Text>
          <Text style={styles.message}>
            An email has been sent to your inbox in order to confirm the email
            address given.
          </Text>
        </View>

        {/* Email sent alert message */}
        <View style={email_sent ? styles.alertShow : styles.alertHidden}>
          <Text style={styles.alert}>
            A new email has been sent to your inbox.
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <AuthButton
            styling={styles.confirmEmailButtonText}
            text={"Confirm Email"}
            onPress={() => null}
          />
          <TouchableOpacity
            onPress={() => {
              setEmailSent(true);
            }}
          >
            <Text style={styles.newEmailButtonText}>Send a new email</Text>
          </TouchableOpacity>
        </View>
      </SafeArea>
    </View>
  );
}

const styles = StyleSheet.create({
  emailConfirmationWrapper: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#1a1919",
  },
  emailConfirmationContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  alertShow: {
    display: "flex",
    fontWeight: "bold",
    padding: 8,
  },
  alertHidden: {
    display: "none",
  },
  buttonContainer: {
    display: "flex",
    alignItems: "center",
    margin: 8,
  },
  confirmEmailButtonText: {
    padding: 6,
    fontWeight: "bold",
    fontSize: 20,
    color: "#ffffff",
    textAlign: "center",
  },
  newEmailButtonText: {
    fontWeight: "bold",
    fontSize: 15,
    textDecorationLine: "underline",
    color: "#ffffff",
    textAlign: "center",
  },
  title: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 35,
    padding: 8,
  },
  message: {
    color: "#ffffff",
    padding: 6,
    textAlign: "left",
    fontSize: 16,
  },
  alert: {
    color: `${theme.darkTheme.text.success}`,
    fontWeight: "bold",
    fontSize: 16,
  },
});
