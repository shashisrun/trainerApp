import * as React from 'react';
import { StyleSheet,ScrollView,TouchableOpacity, Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function GetCoachScreen({}) {
  return (
    <ScrollView style={styles.coach}>
      <View style ={styles.CoachScreenBottom}>
      <View style = {styles.CoachScreen}>
     <View style = {styles.CoachSubScreen}>
     <Image source={{ uri:'http://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images.jpg'}}  style={styles.coach_image} />
     <Text  style = {styles.CoachText1}>Coach Name</Text>
     <Text  style = {styles.CoachText2}>Joined 1year</Text>
     <TouchableOpacity>
            <Text style = {styles.CoachButton}>  Message </Text>
         </TouchableOpacity>
     </View>
     <View style = {styles.CoachSubScreen}>
     <Image source={require('../assets/images/CoachImage.png')}  style={styles.coach_image} />
     <Text  style = {styles.CoachText1}>Coach Name</Text>
     <Text  style = {styles.CoachText2}>Joined 1year</Text>
     <TouchableOpacity>
            <Text style = {styles.CoachButton}>  Message </Text>
         </TouchableOpacity>
     </View>
     </View>

     <View style = {styles.CoachScreen}>
     <View style = {styles.CoachSubScreen}>
     <Image source={require('../assets/images/CoachImage.png')}  style={styles.coach_image} />
     <Text  style = {styles.CoachText1}>Coach Name</Text>
     <Text  style = {styles.CoachText2}>Joined 1year</Text>
     <TouchableOpacity>
            <Text style = {styles.CoachButton}>  Message </Text>
         </TouchableOpacity>
     </View>
     <View style = {styles.CoachSubScreen}>
     <Image source={require('../assets/images/CoachImage.png')}  style={styles.coach_image} />
     <Text  style = {styles.CoachText1}>Coach Name</Text>
     <Text  style = {styles.CoachText2}>Joined 1year</Text>
     <TouchableOpacity>
            <Text style = {styles.CoachButton}>  Message </Text>
         </TouchableOpacity>
     </View>
     </View>

     <View style = {styles.CoachScreen}>
     <View style = {styles.CoachSubScreen}>
     <Image source={require('../assets/images/CoachImage.png')}  style={styles.coach_image} />
     <Text  style = {styles.CoachText1}>Coach Name</Text>
     <Text  style = {styles.CoachText2}>Joined 1year</Text>
     <TouchableOpacity>
            <Text style = {styles.CoachButton}>  Message </Text>
         </TouchableOpacity>
     </View>
     <View style = {styles.CoachSubScreen}>
     <Image source={require('../assets/images/CoachImage.png')}  style={styles.coach_image} />
     <Text  style = {styles.CoachText1}>Coach Name</Text>
     <Text  style = {styles.CoachText2}>Joined 1year</Text>
     <TouchableOpacity>
            <Text style = {styles.CoachButton}>  Message </Text>
         </TouchableOpacity>
     </View>
     </View>

     <View style = {styles.CoachScreen}>
     <View style = {styles.CoachSubScreen}>
     <Image source={require('../assets/images/CoachImage.png')}  style={styles.coach_image} />
     <Text  style = {styles.CoachText1}>Coach Name</Text>
     <Text  style = {styles.CoachText2}>Joined 1year</Text>
     <TouchableOpacity>
            <Text style = {styles.CoachButton}>  Message </Text>
         </TouchableOpacity>
     </View>
     <View style = {styles.CoachSubScreen}>
     <Image source={require('../assets/images/CoachImage.png')}  style={styles.coach_image} />
     <Text  style = {styles.CoachText1}>Coach Name</Text>
     <Text  style = {styles.CoachText2}>Joined 1year</Text>
     <TouchableOpacity>
            <Text style = {styles.CoachButton}>  Message </Text>
         </TouchableOpacity>
     </View>
     </View>

     <View style = {styles.CoachScreen}>
     <View style = {styles.CoachSubScreen}>
     <Image source={require('../assets/images/CoachImage.png')}  style={styles.coach_image} />
     <Text  style = {styles.CoachText1}>Coach Name</Text>
     <Text  style = {styles.CoachText2}>Joined 1year</Text>
     <TouchableOpacity>
            <Text style = {styles.CoachButton}>  Message </Text>
         </TouchableOpacity>
     </View>
     <View style = {styles.CoachSubScreen}>
     <Image source={require('../assets/images/CoachImage.png')}  style={styles.coach_image} />
     <Text  style = {styles.CoachText1}>Coach Name</Text>
     <Text  style = {styles.CoachText2}>Joined 1year</Text>
     <TouchableOpacity>
            <Text style = {styles.CoachButton}>  Message </Text>
         </TouchableOpacity>
     </View>
     </View>
     </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  coach:{
    paddingTop:40,
    backgroundColor: '#F5F7FF',
  },
  CoachText1:{
    textAlign:'center',
    fontSize:20,
    fontWeight:"bold",
    marginVertical:10,
  },
  CoachText2:{
    textAlign:'center',
    fontSize:15,
    marginBottom:10,
  },
  CoachButton:{
    borderRadius:10,
    paddingVertical:6,
    backgroundColor: '#7f8af0',
    color:"white",
    textAlign:'center',
    marginVertical:10,
    fontSize:18,
  },
  CoachScreen:{
   flex:1,
   flexDirection:"row",
   backgroundColor: '#F5F7FF',
  },
  CoachSubScreen:{
  marginHorizontal:10,
  marginVertical:10,
  padding:10,
  borderRadius:10,
  },
  CoachScreenBottom:{
   marginBottom:50,
  },
  coach_image:{
    width:154,
    height:154,
    borderRadius:5,
  }
});
