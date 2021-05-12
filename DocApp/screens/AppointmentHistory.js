import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity, 
  Text
} from 'react-native';
import { Card } from 'react-native-elements'; 
import DefaultPreference from 'react-native-default-preference';

const AppointmentHistory = ({navigation}) => {

  return ( 
  <View style={styles.container}>
    <Card containerStyle={styles.cardstyle}>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('Prescription', {title: 'Prescription'}, 
            {
              patient_name: userName,
            })
          }>
          <Text style={styles.categoryBtnTxt}>Sourabh</Text>
          <Text style={styles.categoryBtnTxt}>Booked on: </Text>
          <Text style={styles.categoryBtnTxt}>Appointment Successfull</Text>
        </TouchableOpacity>
        </View>
        </Card>
        <Card containerStyle={styles.cardstyle}>
      <View style={styles.categoryContainer}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate('BookAppointment', {title: 'Book A Appointment'}, 
            {
              patient_name: userName,
            })
          }>
          <Text style={styles.categoryBtnTxt}>Sourabh</Text>
          <Text style={styles.categoryBtnTxt}>Booked on: </Text>
          <Text style={styles.categoryBtnTxt}>Appointment Scheduled on : </Text>
        </TouchableOpacity>
        </View>
        </Card>
  </View>
    
  );
};

export default AppointmentHistory;

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#FFFFFF", 
      flex: 1,
    }, 
    cardstyle: {
      backgroundColor: "#4A7EFB", 
      borderRadius: 0,
      width: "100%", 
    }, 
    cardDetails: {
      fontSize: 12,
      color: '#444',
      alignSelf: 'center',

    },
    cardTitle: {
      fontWeight: 'bold',
      alignSelf: 'center',

    },
    categoryContainer: {
      flexDirection: 'row',
      width: '90%',
      alignSelf: 'center',
      marginTop: 25,
      marginBottom: 10,
    },
    categoryBtn: {
      flex: 1,
      width: '50%',
      alignSelf: 'center',
    },
    categoryBtnTxt: {
      alignSelf: 'center',
      fontSize: 20, 
      color: '#FFFFFF',
    },
  });