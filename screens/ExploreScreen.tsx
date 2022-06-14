import * as React from 'react';
import { StyleSheet,ScrollView,TouchableOpacity, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <ScrollView style={styles.myplan}>
      <View style={styles.myplanScreen}>
        <View style={styles.myplanSubScreen}>
        <Text style={styles.myplanScreenText} >Weider (Chest Special)</Text>
        <View style={styles.myplanIcon}>
            <Image source={require('../assets/images/notificationicon.png')} />
            <Text style={styles.myPlanText} >12 Weeks</Text>
          </View>
          <Image source={{uri:'https://getwallpapers.com/wallpaper/full/0/0/3/954342-high-definition-nature-wallpaper-1920x1080-samsung.jpg' }} style={styles.myplanScreenImage} />
          <Text style={styles.myplanScreenText1} >
          Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikimedia Foundation.
          </Text>
          <Text style={styles.myplanScreenText1}>
          Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikimedia Foundation.
          </Text>
          <Text style={styles.myplanScreenText1}>
          Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikimedia Foundation.
          </Text>
          <TouchableOpacity>
            <Text style = {styles.myplanhButton}> INVITE FRIENDS TO JOIN WORKOUT </Text>
         </TouchableOpacity>
        </View>



        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  myplan:{
    marginTop:40,
    backgroundColor:'#F5F7FF',
  },
  myplanScreen:{
    backgroundColor:'#F5F7FF',
    marginVertical:10,
  },
  myplanScreenImage:{
    width:335,
    height:200,
    borderRadius:10,
    marginVertical:10,
    marginHorizontal:20,
  },
  myplanIcon:{
   flex:1,
   flexDirection:"row",
   alignItems:"flex-start",
   marginHorizontal:20,
   marginVertical:5,
   marginBottom:10,
  },
  myplanSubScreen:{
    marginHorizontal:10,
    marginVertical:10,
    borderRadius:10,
  },
  myplanScreenText:{
    marginHorizontal:20,
    marginTop:10,
    marginBottom:5,
    fontSize:18,
  },
  myplanScreenText1:{
    textAlign:"center",
    marginHorizontal:20,
   marginVertical:6,
    fontSize:17,
  },
  myPlanText:{
    fontSize:16,
    marginHorizontal:10,
  },
  myplanhButton:{
    borderRadius:50,
    backgroundColor: '#7f8af0',
    color:"white",
    textAlign:'center',
    fontSize:16,
    paddingVertical:10,
    marginHorizontal:40,
    marginVertical:10,
  },
});
