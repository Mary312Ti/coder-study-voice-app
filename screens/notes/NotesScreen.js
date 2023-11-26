import React, { useEffect, useState } from "react";
import { View, Text, Button, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getNotes } from "../../data/database";
import { TouchableOpacity } from "react-native";
import { baseStyle } from "../../styles/baseStyle";

export default function NotesScreen() {
  const navigation = useNavigation();
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const notesFromDB = await getNotes();
      setNotes(notesFromDB);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const handleAddNote = () => {
    navigation.navigate("AddNote");
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
        onPress={handleAddNote}
      >
        <Text style={{ color: "white" }}>Добавить заметку</Text>
      </TouchableOpacity>
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{borderColor: baseStyle.primary.backgroundColor, borderWidth: 1, borderRadius: 4, gap: 10, marginTop: 10, padding: 20}}>
            <Text>{item.title}</Text>
            <Text>{item.content}</Text>
          </View>
        )}
      />
    </View>
  );
}

//       <Text>Возможные категории заметок</Text>
//       <Text>Проектные заметки</Text>
//       <Text>HTML</Text>
//       <Text>CSS</Text>
//       <Text>Javascript</Text>
//       <Text>Vue.js</Text>
//       <Text>React.js</Text>
//       <Text>Typescript</Text>
//       <Text>Webpack</Text>
//       <Text>Vite</Text>
//       <Text>React-native</Text>
//       <Text>Deploy</Text>
