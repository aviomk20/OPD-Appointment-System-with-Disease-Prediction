import React, { useState } from 'react';
import {View, StyleSheet,Button, Text,  Image, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input} from 'react-native-elements';
import Submitstyles from '../styles/Submitstyles';
import InputsStyles from '../styles/InputsStyles';
import DefaultPreference from 'react-native-default-preference';
import DatePicker from 'react-native-datepicker';

const BookAppointment = props => {
  const [Reason, setReason] = useState('');
  const [Name, setName] = useState('');
  const [dateofbirth, setDateofbirth] = useState(new Date());
  const [token,setToken] =useState();

  const BookAppointmentFunction = () => {
      if(Name.length>0 || Reason.length>0)
      {
        DefaultPreference.get('LoggedInUserInformation').then(function(value) {
          if(!value == ""){
            setToken(value);
            console.log(value)
          }
          else{
            props.navigation.navigate('LoginScreen');
          }
         
     

        try{
          fetch("http://10.0.2.2:8000/api/bookappointment/create", {
              method: 'POST', 
              mode: "no-cors", 
              credentials: 'include',

              headers: {
                  'Accept': 'application/json', 
                  'Authorization': 'Bearer ' +value,
                  'Content-Type': 'application/json',
                  
              }, 

              body: JSON.stringify({
                  "patient_name" : Name, 
                  "reason" : Reason, 
                  "Time_and_Date":dateofbirth,
                  "device_name": "react-app", 
              })
          }).then(res=>res.json()).then(resData => {
              if(resData['code'] == 200)
              {
                console.log("resData");
                console.log(resData);
                alert("Appoinment booked sucessfully")
              }
              else
              {
                console.log("else resData");
                console.log(resData);
              }
          }); 
      }
      catch(error)
      {
          alert(error); 
      }
    });        
    }
    
      else
      {
        alert("Please fill appointment details"); 
      }


      }
        return (

        <ScrollView style={{backgroundColor: '#FFFFFF'}}>
   <View style={styles.container}>


        <View style={InputsStyles.container}>
                 <DatePicker style={styles.calenderContainer}
                 
        
        date={dateofbirth}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="1950-05-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0,
          },
          dateInput: {
            marginLeft: 36,
          },
          dateText:{
            color: '#2B2C85',
            fontWeight: 'bold',
          },
          datePickerCon:{
              color:"blue"
          }
          
        }}
        
        onDateChange={dateofbirth=> setDateofbirth(dateofbirth)}
      />
                </View>

       
            <View style={{marginTop: 20}} />
            <View style={[InputsStyles.container]}>
            <Input style={InputsStyles.inputContainer}
            placeholder= "Name"
            onChangeText={Name => setName(Name)}

            inputContainerStyle={InputsStyles.inputContainer}
            inputStyle={InputsStyles.inputText}
            leftIcon= {
            <Icon 
            name="user"
            size={22}
            />
            }
            />
            </View>


            <View style={{marginTop: 20}} />
            <View style={[InputsStyles.container]}>
            <Input style={InputsStyles.inputContainer}
            placeholder= "Reason"
            onChangeText={Reason => setReason(Reason)}

            inputContainerStyle={InputsStyles.inputContainer}
            inputStyle={InputsStyles.inputText}
            leftIcon= {
            <Icon 
            name="user"
            size={22}
            />
            }
            />
            </View>
            <View style={{marginTop: 50}} />
            <TouchableOpacity style={Submitstyles.container} onPress={BookAppointmentFunction}>
                    <Text style={Submitstyles.submitText}> Book Appointment </Text>
                </TouchableOpacity>

</View>

        </ScrollView>
    );
};
export default BookAppointment; 

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: "#FFFFFF", 
      justifyContent: 'center', 
  },
  calenderContainer:{
    width: '90%',
    borderWidth: 0,
  },
  image: {
      width: 400,
      height: 250,
      marginVertical: 10
  },
  textTitle: {
      fontFamily: 'Foundation',
      fontSize: 40,
      marginVertical: 10,
  },
  textBody: {
      fontFamily: 'Foundation',
  
      fontSize: 16
  }, 
  imageContainer: {
      width: 200, 
      height: 200
  }
});