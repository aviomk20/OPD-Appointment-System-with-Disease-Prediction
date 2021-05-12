import React, { Component } from 'react';
import { View, Text,StyleSheet,ScrollView,TouchableOpacity } from 'react-native';
import DefaultPreference from 'react-native-default-preference';
import { Card } from 'react-native-elements'; 


export default class MyAppoinment extends Component {
    
    constructor(props) { 

        super(props);
    
        this.state = {
          token:"",
          appointmentList:[],
        }
        
      }
    
      componentDidMount() {
      
          
      //  console.log("Start")
      
          DefaultPreference.get('LoggedInUserInformation').then(function(value) {
              if(!value == ""){
                console.log("value")
                console.log(value)
                // console.log(typeof(value))
                this.setState({token : value});
                // console.log("token")
                // console.log(this.state.token)
                // console.log("this.state.token")
                // console.log( typeof( this.state.token))
                try{
                  fetch("http://10.0.2.2:8000/api/myappointment", {
                      method: 'POST', 
                      mode: "no-cors", 
                      headers: {
                          'Accept': 'application/json', 
                          'Content-Type': 'application/json',
                          'Authorization': 'Bearer '+value,
                      }, 
                      body: JSON.stringify({
                          "device_name": "react-app", 
                      })
                    }).then(res=>res.json()).then(resData => {
                      if(resData['code'] == 200)
                      {
                         console.log("resData");
                         console.log(resData);
                        this.setState({appointmentList:resData['appointment']})
                         console.log("appointment");
                         console.log(this.state.appointmentList);
                         console.log("type of appointment");
                         console.log(typeof( this.state.appointmentList));
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
                    // console.log("else alert");
                    alert(error); 
                }                
              }
              else{
                props.navigation.navigate('LoginScreen');
              }
            
          }.bind(this));
        
       
        } 
        
        _renderObject(){
          return Object.entries(this.state.appointmentList).map(([key, value], i) => {
            return (
              
              <Card containerStyle={styles.cardstyle}   key={key}>

                <View style={{flexDirection:"row"}}>
                  <View style={{flexDirection:"row"}}>
                 
                    <Text> {++i}  </Text>
                    <Text> Patient Name: {value.patient_name} </Text>
                  </View>
                  
               </View>
               <View>
               
               <Text> Reason:  {value.reason} </Text>
               
               
               
               </View>
               {value.appointment_status == 4 ? 
               <View style={styles.viewContainer}>
               <TouchableOpacity
                    style={styles.categoryBtn}
                    onPress={() =>
                      this.props.navigation.navigate('Prescription', {
   id: value.Appointment_id 
})                            }>   
          <Text style={styles.viewContainerText}>View Prescription</Text>
                  </TouchableOpacity>
                  </View>
                  :
                  <></>
                  }
              </Card>
            )
          })
        }

  render() {
    return (
      
      <ScrollView>
      <View style={styles.container}>
				{this._renderObject()}
        </View>
      </ScrollView>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor: "#FFFFFF", 
    padding: 5,

  },
  
  cardstyle: {
    backgroundColor: "#4A7EFB", 
    borderRadius: 8,
    width: "90%"
    
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#FFFFFF',
    alignItems:"center",
    justifyContent:"center",
    left:0,
  },
  viewContainer:{
    alignItems:"flex-end",
    justifyContent:"flex-end",
    marginTop:-15,
  }, 
  viewContainerText: {
    color: "#fff", 
    padding: 8,
  }

})