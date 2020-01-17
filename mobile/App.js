import React from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My first app with React Native!</Text>
      <Picker
        selectedValue={null}
        style={{height: 50, width: 100}}
        onValueChange={(itemValue, itemIndex) =>
          null
        }>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="PHP" value="js" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fa8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16
  }
});
