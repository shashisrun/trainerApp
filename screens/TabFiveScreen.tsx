import { FontAwesome } from '@expo/vector-icons';
import React, { useState } from 'react';
import {FlatList, StyleSheet,ScrollView, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

const styles = StyleSheet.create({
  More_Tab:{
    marginTop:40,
    backgroundColor:"#F5F7FF",
  },
  More_Tab_userimage: {
    height: 50,
    width: 50,
    marginHorizontal: 10,
    borderRadius: 50,
  },
  More_Tabtitle: {
    marginVertical: 7,
    fontSize:18,
  },
  More_Tab_profile:{
    alignItems:"center",
    backgroundColor:"#F5F7FF",
  },
  More_Tab_profile1:{
    backgroundColor:"#F5F7FF",
    alignItems:'center',
  },
  More_Tab_sub_profile1:{
    backgroundColor:"#F5F7FF",
  },
  More_Tab_sub_profile2:{
    backgroundColor:"#F5F7FF",
  },
  More_Tab_sub_profile3:{
    backgroundColor:"#F5F7FF",
  },
  More_Tab_text:{
   fontSize:16,
   fontWeight:"bold",
  },
  More_Tab_view: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-around',
    textAlign:'center',
    paddingVertical: 10,
    backgroundColor:"#F5F7FF",
  },
  subheader2: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5F7FF',
    marginVertical: 15,
    marginHorizontal:14,
  },
  subheader2view:{
    marginHorizontal:2,
    paddingVertical:20,
    padding: 15,
    minWidth:180,
    textAlign:'center',
    borderRadius:10,
  },
  subheader2view1:{
    marginHorizontal:2,
    paddingVertical:20,
    padding: 15,
    minWidth:180,
    textAlign:'center',
    borderRadius:10,
  },
  subheader2subview:{
    flex: 1,
    flexDirection: 'row',
  },
  subheader2text:{
    fontSize: 24,
    paddingTop: 13,
  },
  subheader2subtext:{
    fontSize: 24,
    paddingTop: 13,
  },
  subheader2subtext2:{
    paddingHorizontal: 5,
    paddingTop: 22,
  },
  container: {
    flex: 1,
    paddingVertical: 22,
   },
   container_text:{
     paddingHorizontal: 20,
     paddingBottom:10,
    fontSize: 24,
   },
   item: {
     paddingVertical: 14,
     paddingHorizontal: 20,
     fontSize: 16,
   },
});
const FlatListBasics = () => {
  return (
    <ScrollView style={styles.More_Tab}>
       <View>
      <View style={styles.More_Tab_profile}>
        <Image source={{ uri: 'https://picsum.photos/200/200' }} style={styles.More_Tab_userimage}  />
          <Text style={styles.More_Tabtitle}>Hello Himanshu Singh</Text>
          </View>
          <View style={styles. More_Tab_view}>
      <View style={styles. More_Tab_profile1} >
      <Text style={styles.More_Tab_text}>245</Text>
          <Text style={styles.More_Tab_text2}>Following</Text>
        </View>
        <View  style={styles. More_Tab_profile1}>
        <Text style={styles.More_Tab_text}>4,679</Text>
            <Text style={styles.More_Tab_text2}>Followers</Text>
        </View>
        <View  style={styles. More_Tab_profile1} >
        <Text style={styles.More_Tab_text}>23,6k</Text>
            <Text style={styles.More_Tab_text2}>likes recieved</Text>
        </View>
      </View>
         </View>
         <View style={styles.subheader2}>
        <View style={styles.subheader2view}>
        <Text>Your goal</Text>
        <Text style={styles.subheader2text} >Gain weight</Text>
        </View>
        <View style={styles.subheader2view1}>
        <Text>Last weight,Jan22</Text>
        <View style={styles.subheader2subview}>
        <Text style={styles.subheader2subtext}>75</Text>
        <Text style={styles.subheader2subtext2}>kg</Text>
        </View>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.container_text}>Menu</Text>
      <FlatList
        data={[
          {key: 'Edit Profile'},
          {key: 'Change Goal'},
          {key: 'My Progress Photo'},
          {key: 'Blog Bookmark'},
          {key: 'Invite friend and family'},
          {key: 'Graph'},
          {key: 'Apps & Devices'},
          {key: 'My Food and Recipes'},
          {key: 'Help'},
          {key: 'Settings'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
    </ScrollView>
  );
}
export default FlatListBasics;