import React from "react";
import { View, Button, TouchableOpacity, Text } from "react-native";
import { baseStyle } from "../../styles/baseStyle";

export default function HomeScreen({ navigation }) {
  const goToNotes = () => {
    navigation.navigate("Notes");
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: baseStyle.primary.backgroundColor,
          padding: 8,
          borderRadius: 5,
          padding: 14,
          alignItems: "center",
        }}
        onPress={goToNotes}
      >
        <Text style={{ color: "white" }}>Перейти к заметкам</Text>
      </TouchableOpacity>
    </View>
  );
}
