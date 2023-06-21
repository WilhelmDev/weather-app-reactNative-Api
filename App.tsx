import { StatusBar } from 'expo-status-bar';
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import FormWeather from './src/components/FormWeather';
import { useState } from 'react';

export default function App() {

  const hideKeyboard = () => {
    Keyboard.dismiss()
  }

  return (
      <TouchableWithoutFeedback onPress={() => hideKeyboard()}>
        <View style={styles.app}>
          <StatusBar style="auto" />

            <View style={styles.content}>

                <FormWeather />

            </View>

        </View>
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  app:{
    flex:1,
    backgroundColor:'rgb(71,149,212)',
    justifyContent:'center'
  },
  content:{
    marginHorizontal:'4%'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
