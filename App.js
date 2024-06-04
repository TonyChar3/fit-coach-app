import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import styled from "styled-components";
import { StyleSheet, Text, View } from "react-native";
import {
  useFonts as useSourcePro,
  SourceSansPro_400Regular,
  SourceSansPro_700Bold,
  SourceSansPro_300Light,
} from "@expo-google-fonts/source-sans-pro";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";

import { Navigation } from "./src/infrastructure/navigation";

export default function App() {
  const [sourceSansPro] = useSourcePro({
    SourceSansPro_400Regular,
    SourceSansPro_700Bold,
    SourceSansPro_300Light,
  });

  if (!sourceSansPro) {
    return null;
  }

  return (
    <>
      <Navigation />
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    fontFamily: "SourceSansPro_700Bold",
    alignItems: "center",
    justifyContent: "center",
  },
});
