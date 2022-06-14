import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react';
import { StyleSheet,ScrollView, Image,TouchableOpacity, } from 'react-native';


import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function HomeScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <ScrollView style={styles.HomeScreen}>
      
      {/* Home Page header */}
         
         <View style={styles.header}>
             <Image source={require('../assets/images/userimage.png')} style={styles.userimage}  />
                  <View style={styles.sub_header}>
                      <Text style={styles.title}>Hello Himanshu Singh,</Text>
                      <Text>Things looks alright</Text>
                  </View>
                  <View style={styles.icons}>
                  <Image source={require('../assets/images/searchicon.png')} style={styles.icon} />
                  <Image source={require('../assets/images/messageicon.png')} style={styles.icon1} />
                  <Image source={require('../assets/images/notificationicon.png')} style={styles.icon} />
                  </View>
         </View> 

          {/* First Tab */}
         <ScrollView horizontal>
             <View style={styles.subheader1}>
                  <View style={styles.subheader1view}>
                  <Image source={require('../assets/images/watchlive.png')} style={styles.icon_header1} />
                          <Text style={styles.subheader1text}>Watch live</Text>
                  </View>

                  <View style={styles.subheader1view} >
                    <TouchableOpacity style={styles.subheaderTouch} onPress={() => navigation.navigate('GetCoach')}>
                  <Image source={require('../assets/images/getacoach.png')} style={styles.icon_header1} />
                            <Text style={styles.subheader1text}>Get a Coach</Text>
                            </TouchableOpacity>
                  </View>

                  <View style={styles.subheader1view}>
                  <TouchableOpacity style={styles.subheaderTouch} onPress={() => navigation.navigate('MyPlan')}>
                  <Image source={require('../assets/images/myplan.png')} style={styles.icon_header1}/>
                            <Text style={styles.subheader1text}>My Plan</Text>
                            </TouchableOpacity>
                  </View>

                  <View style={styles.subheader1view}>
                  <Image source={require('../assets/images/shop.png')} style={styles.icon_header1} />
                            <Text style={styles.subheader1text}>Shop</Text>
                  </View>

                  <View style={styles.subheader1view}>
                  <Image source={require('../assets/images/watchlive.png')}  style={styles.icon_header1} />
                          <Text style={styles.subheader1text}>Watch live</Text>
                  </View>

                  <View style={styles.subheader1view}>
                  <Image source={require('../assets/images/getacoach.png')}  style={styles.icon_header1} />
                            <Text style={styles.subheader1text}>Get a Coach</Text>
                  </View>

                  <View style={styles.subheader1view}>
                  <Image source={require('../assets/images/myplan.png')}  style={styles.icon_header1} />
                            <Text style={styles.subheader1text}>My Plan</Text>
                  </View>

                  <View style={styles.subheader1view}>
                  <Image source={require('../assets/images/shop.png')}  style={styles.icon_header1} />
                            <Text style={styles.subheader1text}>Shop</Text>
                  </View>
             </View>
          </ScrollView>


            {/* Second Tab */}
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


            {/* Third Tab */}
          <View style={styles.thirdTab}>
              <View  style={styles.third_Tab_curve}>
                  <View style={styles.subheader3view}>
                    <View  style={styles.subheader3viewicons1}>
                      <FontAwesome style={styles.icon} name="code" />
                    </View>
                  <View >
                  <Text style={styles.subheader3viewtext} >TODAY</Text>
              </View>
        <View style={styles.subheader3viewicons2}>
          <FontAwesome style={styles.icon} name="code" />
        </View>
      </View>
      </View>
      <View style={styles.subheader3view22}>
      <View >
          <Text style={styles.subheader3viewtext1}>1317</Text>
          <Text style={styles.subheader3viewtext2}>Eaten</Text>
        </View>
        <View >
          <FontAwesome style={styles.icon} name="code" />
        </View>
        <View >
        <Text style={styles.subheader3viewtext1}>768</Text>
        <Text style={styles.subheader3viewtext12}>Burned</Text>
        </View>
      </View>
      </View>


      <View style={styles. WorkoutTab}>
      <View >
            <Text style={styles.workoutTitle}>WORKOUT PLAN</Text>
          </View>
        <View style={styles.workoutAddTab}>
        <FontAwesome style={styles.workoutButton} name="plus"></FontAwesome>
          <Text style={styles.workoutTitle2}>VIEW PLAN</Text>
        </View>
      </View>
    
     <View style={styles.workoutdetailtab}>
      <Text style={styles.workoutdetailtext_1}>Today, 7:30 PM</Text>
      <Text style={styles.workoutdetailtext_2}>Chest,Trap,Tricep,Abs</Text>
      <View style={styles.workoutdetail3}>
        <View  style={styles.workoutdetail3_1}>
          <FontAwesome style={styles.workoutdetailbutton_2} name="bell"></FontAwesome>
          <Text style={styles.workoutdetailtext_3}>60 Min</Text></View> 
          <View style={styles.workoutdetail3_1}>
          <FontAwesome style={styles.workoutdetailbutton_2} name="bell"></FontAwesome>
          <Text style={styles.workoutdetailtext_3}>On</Text>
          </View>      
      </View>
     </View>


    
      <View style={styles. WorkoutTab}>
      <View >
            <Text style={styles.workoutTitle}>BREAKFAST</Text>
          </View>
        <View style={styles.workoutAddTab}>
        <FontAwesome style={styles.workoutButton} name="plus"></FontAwesome>
          <Text style={styles.workoutTitle2}>VIEW PLAN</Text>
        </View>
      </View>
    
     <View style={styles.workoutdetailtab}>
      <Text style={styles.workoutdetailtext_1}>Today, 7:30 PM</Text>
      <Text style={styles.workoutdetailtext_2}>Chest,Trap,Tricep,Abs</Text>
      <View style={styles.workoutdetail3}>
        <View  style={styles.workoutdetail3_1}>
          <FontAwesome style={styles.workoutdetailbutton_2} name="bell"></FontAwesome>
          <Text style={styles.workoutdetailtext_3}>60 Min</Text></View> 
          <View style={styles.workoutdetail3_1}>
          <FontAwesome style={styles.workoutdetailbutton_2} name="bell"></FontAwesome>
          <Text style={styles.workoutdetailtext_3}>On</Text>
          </View>      
      </View>
     </View>
     
     

    </ScrollView>
  );
}

const styles = StyleSheet.create({
 
  HomeScreen: {
    marginTop:40,
    marginBottom:20,
    backgroundColor: "#F5F7FF"
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: "#F5F7FF"
  },
  sub_header: {
    backgroundColor:"#F5F7FF"
  },
  title: {
    fontWeight: 'bold',
    marginTop: 7,
  },
  icons:{
    flexDirection: 'row',
    marginLeft: 'auto',
    backgroundColor:"#F5F7FF",
  },
  icon: {
    fontSize: 20,
    marginHorizontal: 10,
    fontWeight: 'bold',
    marginVertical: 14,
  },
  icon1: {
    fontSize: 20,
    marginHorizontal: 10,
    fontWeight: 'bold',
    marginVertical: 17,
  },
  userimage: {
    height: 50,
    width: 50,
    marginHorizontal: 15,
    borderRadius: 50,
    borderColor:"white",
    borderWidth:3,
  },
  subheader1: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5F7FF',
    paddingHorizontal:7,
    paddingVertical:10,
  },
  subheader1view:{
    paddingVertical:5,
    marginTop:20,
    borderRadius:10,
    marginHorizontal:10,
    minWidth:80,
    maxHeight:67,
    textAlign:'center',
    alignItems:"center",
    justifyContent:"center"
  },
  icon_header1:{
    marginTop:5,
    marginBottom:5,
  },
  subheader1text:{
    textAlign:'center',
    marginBottom:5,
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
    borderTopLeftRadius:15, 
    borderBottomLeftRadius:15,
  },
  subheader2view1:{
    marginHorizontal:2,
    paddingVertical:20,
    padding: 15,
    minWidth:180,
    textAlign:'center',
    borderTopRightRadius:15, 
    borderBottomRightRadius:15,
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
  subheader3view: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-around',
    textAlign:'center',
    paddingVertical: 10,
    borderRadius:10

  },
  subheader3view22: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-around',
    textAlign:'center',
    paddingVertical:30,
    borderBottomRightRadius:12,
    borderBottomLeftRadius:12,
    
  },
  subheader3viewtext:{
    fontSize: 18,
  },
  subheader3viewtext1:{
    paddingTop: 10,
    fontSize: 27,
    textAlign: 'center',
  },
  subheader3viewtext2:{
    textAlign: 'center',
    color:'grey'
  },
  subheader3viewtext12:{
    textAlign: 'center',
    color:'grey'
  },
  thirdTab:{
   marginHorizontal:10,
   backgroundColor: '#F5F7FF',
  },
  third_Tab_curve:{
   borderTopRightRadius: 15,
   borderTopLeftRadius: 15,
   marginHorizontal:0,
  },
  WorkoutTab:{
    flex: 1,
    flexDirection: 'row',
    marginHorizontal:10,
    marginTop:20,
    paddingVertical:10,
    paddingHorizontal:10,
    borderRadius:5,
  },
  workoutTitle:{
    fontSize:17,
    paddingVertical:4,
  },
  workoutAddTab: {
    flexDirection: 'row',
    marginLeft: 'auto'
  },
  workoutTitle2:{
    fontSize:12,
    marginLeft: 'auto',
    paddingVertical:5,
    color:'red',
  },
  workoutButton:{
    paddingHorizontal:5,
    paddingVertical:6,
    color:"red" 
  },
  workoutdetailtab:{
   flex:1,
   flexDirection:"column",
   padding:10,
   paddingVertical:20,
   marginVertical:5,
   marginHorizontal:10,
   borderRadius:5,
  },
  workoutdetailtext_1:{
   color:"grey",
   paddingVertical:5,
   paddingHorizontal:10,
  },
  workoutdetailtext_2:{
    color:"black",
    paddingVertical:5,
    fontSize:27,
    paddingHorizontal:10,
    marginBottom:5,
   },
   workoutdetail3:{
    flex: 2,
    flexDirection: 'row',
   },
   workoutdetail3_1:{
    flexDirection: 'row',
    marginHorizontal:10,
   },
   workoutdetailbutton_2:{
    color:"grey",
   paddingVertical:7,
   
   },
   workoutdetailtext_3:{
   color:"grey",
   paddingVertical:3,
   paddingHorizontal:3,
   },
   subheaderTouch:{
   alignItems:"center",
   },
});
