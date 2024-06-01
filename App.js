import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  useFonts as useSourcePro,
  SourceSansPro_400Regular,
  SourceSansPro_700Bold,
  SourceSansPro_300Light
} from "@expo-google-fonts/source-sans-pro";

export default function App() {
  const [sourceSansPro] = useSourcePro({
    SourceSansPro_400Regular,
    SourceSansPro_700Bold,
    SourceSansPro_300Light
  });

  if (!sourceSansPro) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    fontFamily: "SourceSansPro_700Bold",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
