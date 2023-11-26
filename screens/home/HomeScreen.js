import React from "react";
import { View, Button, TouchableOpacity, Text} from "react-native";
import { baseStyle } from "../../styles/baseStyle";
import Micropfone from '../../assets/Microphone.svg'

export default function HomeScreen({ navigation }) {
  const goToNotes = () => {
    navigation.navigate("Notes");
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    <Micropfone width={120} height={120}/>
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
