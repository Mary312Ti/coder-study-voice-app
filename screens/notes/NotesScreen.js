import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getNotes } from "../../data/database";

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
      <Button title="Добавить заметку" onPress={handleAddNote} />
      <FlatList
        data={notes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
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