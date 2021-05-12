import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import photo from '../assets/photo.jpg';


const DoctorProfileScreen = ({navigation}) => {
  const theme = useTheme();

  return (
    <>
    <View style={styles.container}>
        <Image style={styles.image} source={photo}/>
        <Text style={styles.name}>
            Dr. Ganesh Khandare
        </Text>

        <Text style={{ fontSize: 25}}>
          MBBS, MD Medicine
        </Text>

        <Text  >
            Timing from 12:00 pm to 5:00 pm
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate('BookAppointment', {title: 'Book A Appointment'})}>
            <Text style={styles.text}>
                Book a appointment with Dr. Ganesh Khandare
            </Text>
        </TouchableOpacity>
    </View>
    </>
  );
};

export default DoctorProfileScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF", 
    flex: 1,
    alignItems: "center", 
    justifyContent: "space-around"
  }, 
  image: {
      width: "40%", 
      height: "40%", 
      borderRadius: 10, 
      borderWidth: 6, 
      borderColor: "#2F363F"
  }, 
  name : {
      fontFamily: "Roboto", 
      fontSize: 30
  }, text: {
    fontSize: 20, 
    marginTop: 30, 
    color: "#F2a365", 
    paddingHorizontal: 40, 
    paddingVertical: 10, 
    borderColor: "#2F363F", 
    borderRadius: 5, 
    borderWidth: 3, 
    fontWeight: "bold"
  }

});