import React, { state, Component } from 'react';
import { View, TouchableOpacity,  Text, ScrollView, StyleSheet } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import DefaultPreference from 'react-native-default-preference';



export default class Prescription extends Component {

  constructor(props) { 

    super(props);

    this.state = {
      token:"",
      PrescriptionList:[],
    }
    
  }


    componentDidMount() {
   
          DefaultPreference.get('LoggedInUserInformation').then(function(value) {
              if(!value == ""){
              
                this.setState({token : value});
                
                try{
                  fetch("http://10.0.2.2:8000/api/prescription/patient/show", {
                      method: 'POST', 
                      mode: "no-cors", 
                      headers: {
                          'Accept': 'application/json', 
                          'Content-Type': 'application/json',
                      }, 
                      body: JSON.stringify({
                          "Appointment_id":this.props.route.params.id,
                          "device_name": "react-app", 
                      })
                    }).then(res=>res.json()).then(resData => {
                      if(resData['code'] == 200)
                      {
                        console.log("resData")
                        console.log(resData['prescriptionData'])
                        console.log("------------------resData--------------- end if ")
                        this.setState({PrescriptionList:resData['prescriptionData']})
                        console.log(this.state.PrescriptionList)
                        console.log("------------------$$$$$$$$$$$$$$$$$$$$$$$$")

                        
                     
                      }
                      console.log("resData")
                      console.log(resData)
                      console.log("------------------resData---------------")
                      
                }); 
              }
              catch(error)
                {
                    alert(error); 
                }                
              }
              else{
                props.navigation.navigate('LoginScreen');
              }
            
          }.bind(this));
        
       
        } 

    
        _renderObject(){
          return Object.entries(this.state.PrescriptionList).map(([key, value], i) => {
            return ( 
              <View>

                <View style={styles.tblRowContainer}>
                  <Text style={styles.tblrow}>{value.Medicine_name}</Text>
                  <Text style={styles.tblrow}>{value.Medicine_quantity}</Text>
                  {
                    value.morning=="1" ? 
                   
       <View style={styles.checkmark}>
        <AntDesign name="checkcircle" size={25} color="#019031" />
        </View> :
        <View style={styles.checkmark}>
        <Entypo name="circle-with-cross" size={30} color="#B83227" />
        </View>
                  }


                  {
                    value.afternoon=="1" ? 
                   
       <View style={styles.checkmark}>
        <AntDesign name="checkcircle" size={25} color="#019031" />
        </View> :
        <View style={styles.checkmark}>
        <Entypo name="circle-with-cross" size={30} color="#B83227" />
        </View>
                  }


                  {
                    value.night=="1" ? 
                   
       <View style={styles.checkmark}>
        <AntDesign name="checkcircle" size={25} color="#019031" />
        </View> :
        <View style={styles.checkmark}>
        <Entypo name="circle-with-cross" size={30} color="#B83227" />
        </View>
                  }
                  
                 
                  </View>
              </View>
            )
          })
        }







  render() {
    return (
      <ScrollView >
      <View>


      <Text style={styles.text}>  {} </Text>
       <Text style={styles.text}> Dr. Ganesh khandare </Text> 
       <Text style={styles.text}> Address Solapur </Text>
        <Text style={styles.text}>  {} </Text>
        
        
      </View>
      <View style={styles.tblHeaderContainer}>
                  <Text style={styles.tblHeader}>Name</Text>
                  <Text style={styles.tblHeader}>Quantity</Text>
                  <Text style={styles.tblHeader}>Morning</Text>
                  <Text style={styles.tblHeader}>Afternoon</Text>
                  <Text style={styles.tblHeader}>Night</Text>
      </View>
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
    padding: 16, 
    paddingTop: 30, 
    backgroundColor: '#ffffff' 
  },
  head: { 
    height: 50, 
    backgroundColor: '#B83227' 
  },
  text: { 
    textAlign: 'center', 
    fontWeight: '200', 
    fontSize: 24, 
    color: "#B83227"
  },
  dataWrapper: { 
    marginTop: -1 
  },
  row: { 
    height: 40, 
    backgroundColor: '#B83227' 
  }, 
  HeadStyle: {
    color: "#AE1438", 
  }, 
  TableText: {
    color: "#B83227", 
    padding: 8, 
    borderColor: "#B83227"
  }, 
  checkmark: {
    flex:1,
    alignItems: "center", 
    justifyContent: "center"
  },
  tblHeader:{
    flex: 1,
    textAlign: 'center', 
    fontWeight:"bold",
    borderWidth:1,
    color:'white',
    borderColor:'white'
    

  },
  tblHeaderContainer:{
    flexDirection:"row", 
    backgroundColor:"green",
    padding:5,
    
  },
  tblRowContainer:{
    flexDirection:"row", 
    flexWrap:"wrap",
    textAlign: 'center', 
    flex:1,
    padding:5,
    color:'white',
  },
  tblrow:{
    flex: 1,
    textAlign: 'center', 
    fontWeight:"bold",
  }
});