import React from "react";
import { View, Button, TouchableOpacity, Text } from "react-native";
import { baseStyle } from "../../styles/baseStyle";
import Micropfone from "../../assets/Microphone.svg";
import TimingIcon from "../../assets/TimingIcon.svg";
import Map from "../../assets/Map.svg";

export default function HomeScreen({ navigation }) {
  const goToNotes = () => {
    navigation.navigate("Notes");
  };

  return (
    <View style={{ alignItems: "center",  }}>
    <View style={{flexDirection: "row", alignItems: "center"}}>
      <Micropfone width={120} height={120} />
      <TouchableOpacity
        style={{
          backgroundColor: baseStyle.primary.backgroundColor,
          borderRadius: 5,
          padding: 14,
          height: 50,
          alignItems: "center",

        }}
        onPress={goToNotes}
      >
        <Text style={{ color: "white" }}>Перейти к заметкам</Text>
      </TouchableOpacity>
    </View>
      
      <View style={{flexDirection: "row", gap: 20}}>
        <TouchableOpacity
          style={{
            alignItems: "center",
            backgroundColor: baseStyle.onTertiary.backgroundColor,
            borderWidth: 2,
            borderRadius: 5,
            borderColor: baseStyle.primary.backgroundColor,
            marginTop: 20,
            width: 130,
            height: 130,
          }}
        >
          <TimingIcon width={100} height={100} />
          <Text style={{ paddingBottom: 10 }}>Помодоро</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            alignItems: "center",
            backgroundColor: baseStyle.onTertiary.backgroundColor,
            borderWidth: 2,
            borderRadius: 5,
            borderColor: baseStyle.primary.backgroundColor,
            marginTop: 20,
            width: 130,
            height: 130,
          }}
        >
          <Map width={100} height={100} />
          <Text style={{ paddingBottom: 10 }}>Дорожная карта</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
