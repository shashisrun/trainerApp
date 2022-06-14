import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet,ScrollView,StatusBar,TouchableWithoutFeedback  } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabThreeScreen() {
  return (
  <ScrollView style={{marginTop: 40}}>
     <TouchableWithoutFeedback>
       <Text style={{fontSize: 20}} >Show Popup</Text>
     </TouchableWithoutFeedback>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  
});
