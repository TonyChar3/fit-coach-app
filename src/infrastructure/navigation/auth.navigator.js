import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { WelcomeScreen } from "../../features/authentication/screen/welcome.screen";
import { LoginScreen } from "../../features/authentication/screen/login.screen";
import { RegisterScreen } from "../../features/authentication/screen/register.screen";
import { ForgotPasswordScreen } from "../../features/authentication/screen/forgot-password.screen";
import { PasswordResetScreen } from "../../features/authentication/screen/password-reset.screen";
import EmailConfirmation from "../../features/authentication/screen/email-confirmation.screen";

const Stack = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Email confirmation" component={EmailConfirmation} />
      <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} />
      <Stack.Screen name="Password reset" component={PasswordResetScreen} />
    </Stack.Navigator>
  );
};
