import React, { useState } from "react";
import { View, TextInput, Button, TouchableOpacity, Text } from "react-native";
import { db } from "../../data/database";
import TagsComponent from "../../components/notes/tags";
import { baseStyle } from "../../styles/baseStyle.js";

export default function AddNoteScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedTags, setSelectedTags] = useState([]); //состояние для выбр тэгов

  const handleCreateNote = () => {
    db.transaction((tx) => {
      tx.executeSql(
        `INSERT INTO notes (title, content) VALUES (?, ?);`,
        [title, content],
        (_, { insertId }) => {
          //получение Id создаваемой заметки
          attachTagsToNote(insertId); // прикрепляем тэги к заметке
          navigation.goBack();
        },
        (_, error) => console.error("Error creating note:", error)
      );
    });
  };

const attachTagsToNote = (noteId) => {
db.transaction(tx => {
  selectedTags.forEach(tag => {
    tx.executeSql(
      'INSERT INTO note_tags (note_id, tag_name) VALUE (?, ?);',
      [noteId, tag],
      (_, {insertId}) => console.log(`Tag ${tag} attached to note ${noteId}`),
      (_, error) => console.error('Error attaching tag to note:', error)
    )
  })
})
};

const handleTagPress = (tag) => {
  if (selectedTags.includes(tag)) {
    //если тэг уже выбран удаляем его из списка
    setSelectedTags(selectedTags.filter(selectedTag => selectedTag !== tag));
  } else if (selectedTags.length < 3) {
    //если количество выбранных тэгов < 3 добавляем новый тэг
    setSelectedTags([...selectedTags, tag]);
    //добавить логику для предупреждения если выбр > 3 
  }
}

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        placeholder="Заголовок"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        placeholder="Содержимое"
        value={content}
        onChangeText={(text) => setContent(text)}
        multiline
        style={{
          marginTop: 16,
          marginBottom: 16,
          height: 200,
          borderColor: "gray",
          borderWidth: 1,
        }}
      />
      <TagsComponent selectedTags={selectedTags} onTagPress={handleTagPress} />
      <TouchableOpacity
        style={{ marginTop: 20, backgroundColor: baseStyle.primary.backgroundColor, padding: 8, borderRadius: 5, padding: 14, alignItems: "center" }}
        onPress={handleCreateNote}
      >
        <Text style={{ color: "white" }}>Создать</Text>
      </TouchableOpacity>
    </View>
  );
}
