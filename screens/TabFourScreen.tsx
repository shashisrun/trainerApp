import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react';
import { ScrollView, StyleSheet,  Image } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabFourScreen() {
  return (
      <ScrollView  style={styles.tools} >
            <Text style={styles.tools_text}>Tools</Text>
    <View style={styles.tools_grid}>
           <View style={styles.tools_grid1}>
           <Image source={require('../assets/images/progress.png')}  style={styles.tools_grid_icon}/>
           <Text style={styles.tools_grid_text}>Progress Tracker</Text>
           </View>
           <View style={styles.tools_grid2}>
           <Image source={require('../assets/images/google.png')}  style={styles.tools_grid_icon}/>
           <Text style={styles.tools_grid_text}>Google Fit</Text>
           </View>    
     </View>

     <View style={styles.tools_grid}>
           <View style={styles.tools_grid1}>
           <Image source={require('../assets/images/diet.png')}  style={styles.tools_grid_icon}/>
           <Text style={styles.tools_grid_text}>Diet Tool</Text>
           </View>
           <View style={styles.tools_grid2}>
           <Image source={require('../assets/images/training.png')}  style={styles.tools_grid_icon}/>
           <Text style={styles.tools_grid_text}>Training Tool</Text>
           </View>    
     </View>

     <View style={styles.tools_grid}>
           <View style={styles.tools_grid1}>
           <Image source={require('../assets/images/BMR.png')}  style={styles.tools_grid_icon}/>
           <Text style={styles.tools_grid_text}>BMR Calculator</Text>
           </View>
           <View style={styles.tools_grid2}>
           <Image source={require('../assets/images/bodyfat.png')}  style={styles.tools_grid_icon}/>
           <Text style={styles.tools_grid_text}>Body Fat Calculator</Text>
           </View>    
     </View>

     <View style={styles.tools_grid}>
           <View style={styles.tools_grid1}>
           <Image source={require('../assets/images/goal.png')}  style={styles.tools_grid_icon}/>
           <Text style={styles.tools_grid_text}>Goal Calculator</Text>
           </View>
           <View style={styles.tools_grid2}>
           <Image source={require('../assets/images/macro.png')}  style={styles.tools_grid_icon}/>
           <Text style={styles.tools_grid_text}>Macro Calculator</Text>
           </View>    
     </View>

     <View style={styles.tools_grid}>
           <View style={styles.tools_grid1}>
           <Image source={require('../assets/images/calories.png')}  style={styles.tools_grid_icon}/>
           <Text style={styles.tools_grid_text}>Calories Calculator</Text>
           </View>
           <View style={styles.tools_grid2}>
           <Image source={require('../assets/images/1rm.png')}  style={styles.tools_grid_icon}/>
           <Text style={styles.tools_grid_text}>1RM Calculator</Text>
           </View>    
     </View>

     <View style={styles.tools_grid}>
           <View style={styles.tools_grid1}>
           <Image source={require('../assets/images/reminder.png')}  style={styles.tools_grid_icon}/>
           <Text style={styles.tools_grid_text}>Remainder</Text>
           </View> 
     </View>
     </ScrollView>
  );
}

const styles = StyleSheet.create({
      tools:{
            marginTop:40,
            backgroundColor: '#F5F7FF',
      },
      tools_text:{
       fontSize:20,
       marginHorizontal:20,
      },
    tools_grid1:{
        width:170,
        height:115,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"#fff",
        marginHorizontal:10,
        marginVertical:15,
        borderRadius:10,
        elevation: 5,
      },
      tools_grid2:{
       width:170,
       height:115,
       alignItems:"center",
       justifyContent:"center",
       backgroundColor:"#fff",
       marginHorizontal:10,
        marginVertical:15,
        borderRadius:10,
        elevation: 5,
     },
     tools_grid:{
      flexDirection:"row",
      paddingHorizontal:6,
      backgroundColor: '#F5F7FF',
     },
     tools_grid_icon:{
      fontSize:50,
     },
     tools_grid_text:{
       fontSize:15,
      },
});
