import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/home/HomeScreen';
import NotesScreen from './screens/notes/NotesScreen';
import AddNoteScreen from './screens/notes/AddNoteScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Notes" component={NotesScreen} />
        <Stack.Screen name='AddNote' component={AddNoteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


