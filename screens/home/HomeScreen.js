import React from 'react';
import { View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  const goToNotes = () => {
    navigation.navigate('Notes');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go to Notes" onPress={goToNotes} />
    </View>
  );
}
