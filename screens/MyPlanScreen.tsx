import * as React from 'react';
import { StyleSheet,ScrollView,TouchableOpacity, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function MyPlanScreen() {
  return (
    <ScrollView style={styles.myplan}>
      <View style={styles.myplanScreen}>
        <View style={styles.myplanSubScreen}>
        <TouchableOpacity>
          <Image source={{uri:'https://getwallpapers.com/wallpaper/full/0/0/3/954342-high-definition-nature-wallpaper-1920x1080-samsung.jpg' }} style={styles.myplanScreenImage} />
          </TouchableOpacity>
          <Text style={styles.myplanScreenText} >Weider (Chest Special)</Text>
          <View style={styles.myplanIcon}>
            <Image source={require('../assets/images/notificationicon.png')} />
            <Text style={styles.myPlanText} >12 Weeks</Text>
          </View>
        </View>

        <TouchableOpacity>
        <View style={styles.myplanSubScreen}>
          <Image source={{uri:'http://www.thewowstyle.com/wp-content/uploads/2015/01/Nature-pictures-2.jpg' }} style={styles.myplanScreenImage} />
          <Text style={styles.myplanScreenText} >Weider (Chest Special)</Text>
          <View style={styles.myplanIcon}>
            <Image source={require('../assets/images/notificationicon.png')} />
            <Text style={styles.myPlanText} >12 Weeks</Text>
          </View>
        </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
        <View style={styles.myplanSubScreen}>
          <Image source={{uri:'https://getwallpapers.com/wallpaper/full/0/0/3/954342-high-definition-nature-wallpaper-1920x1080-samsung.jpg' }} style={styles.myplanScreenImage} />
          <Text style={styles.myplanScreenText} >Weider (Chest Special)</Text>
          <View style={styles.myplanIcon}>
            <Image source={require('../assets/images/notificationicon.png')} />
            <Text style={styles.myPlanText} >12 Weeks</Text>
          </View>
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <View style={styles.myplanSubScreen}>
          <Image source={{uri:'https://getwallpapers.com/wallpaper/full/0/0/3/954342-high-definition-nature-wallpaper-1920x1080-samsung.jpg' }} style={styles.myplanScreenImage} />
          <Text style={styles.myplanScreenText} >Weider (Chest Special)</Text>
          <View style={styles.myplanIcon}>
            <Image source={require('../assets/images/notificationicon.png')} />
            <Text style={styles.myPlanText} >12 Weeks</Text>
          </View>
        </View>
        </TouchableOpacity>

        </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  myplan:{
    paddingTop:40,
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
    marginTop:20,
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
  myPlanText:{
    fontSize:16,
    marginHorizontal:10,

  },
});
