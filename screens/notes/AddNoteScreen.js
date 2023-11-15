import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { db } from '../../data/database';

export default function AddNoteScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleCreateNote = () => {
    db.transaction(tx => {
      tx.executeSql(
        `INSERT INTO notes (title, content) VALUES (?, ?);`,
        [title, content],
        () => navigation.goBack(),
        (_, error) => console.error('Error creating note:', error)
      );
    });
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <TextInput
        placeholder="Заголовок"
        value={title}
        onChangeText={text => setTitle(text)}
      />
      <TextInput
        placeholder="Содержимое"
        value={content}
        onChangeText={text => setContent(text)}
        multiline
        style={{ marginTop: 16, marginBottom: 16, height: 200, borderColor: 'gray', borderWidth: 1 }}
      />
      <Button title="Создать" onPress={handleCreateNote} />
    </View>
  );
}
