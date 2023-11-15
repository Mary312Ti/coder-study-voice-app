import React from 'react';
import { View, Text } from 'react-native';

export default function NotesScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Возможные категории заметок</Text>
      <Text>Проектные заметки</Text>
      <Text>HTML</Text>
      <Text>CSS</Text>
      <Text>Javascript</Text>
      <Text>Vue.js</Text>
      <Text>React.js</Text>
      <Text>Typescript</Text>
      <Text>Webpack</Text>
      <Text>Vite</Text>
      <Text>React-native</Text>
      <Text>Deploy</Text>
      <Text></Text>
    </View>
  );
}
