/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component , useState  } from "react";
import { Platform, StyleSheet, Text, View, Alert, ScrollView, TouchableOpacity} from "react-native";
import {Picker} from '@react-native-community/picker';
import Submitstyles from '../styles/Submitstyles';
import qs from 'querystring'


const l1=['back_pain','constipation','abdominal_pain','diarrhoea','mild_fever','yellow_urine',
    'yellowing_of_eyes','acute_liver_failure','fluid_overload','swelling_of_stomach',
    'swelled_lymph_nodes','malaise','blurred_and_distorted_vision','phlegm','throat_irritation',
    'redness_of_eyes','sinus_pressure','runny_nose','congestion','chest_pain','weakness_in_limbs',
    'fast_heart_rate','pain_during_bowel_movements','pain_in_anal_region','bloody_stool',
    'irritation_in_anus','neck_pain','dizziness','cramps','bruising','obesity','swollen_legs',
    'swollen_blood_vessels','puffy_face_and_eyes','enlarged_thyroid','brittle_nails',
    'swollen_extremeties','excessive_hunger','extra_marital_contacts','drying_and_tingling_lips',
    'slurred_speech','knee_pain','hip_joint_pain','muscle_weakness','stiff_neck','swelling_joints',
    'movement_stiffness','spinning_movements','loss_of_balance','unsteadiness',
    'weakness_of_one_body_side','loss_of_smell','bladder_discomfort','foul_smell_of urine',
    'continuous_feel_of_urine','passage_of_gases','internal_itching','toxic_look_(typhos)',
    'depression','irritability','muscle_pain','altered_sensorium','red_spots_over_body','belly_pain',
    'abnormal_menstruation','dischromic _patches','watering_from_eyes','increased_appetite','polyuria','family_history','mucoid_sputum',
    'rusty_sputum','lack_of_concentration','visual_disturbances','receiving_blood_transfusion',
    'receiving_unsterile_injections','coma','stomach_bleeding','distention_of_abdomen',
    'history_of_alcohol_consumption','fluid_overload','blood_in_sputum','prominent_veins_on_calf',
    'palpitations','painful_walking','pus_filled_pimples','blackheads','scurring','skin_peeling',
    'silver_like_dusting','small_dents_in_nails','inflammatory_nails','blister','red_sore_around_nose',
    'yellow_crust_ooze']



const DiseasePredictionScreen = () => {


   const [disease, setDisease] = useState('')
   const [answer,setAnswer] =useState('')

   const addDisease =(itemValue) =>{
    
    setDisease(disease+itemValue+"\n")
    
  }

  const predict= ()=>{
    try{
      fetch("http://10.0.2.2:5000/predict", {
          method: 'POST', 
          mode: "no-cors", 
          headers: {
              'Accept': 'application/json', 
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          }, 
          body: qs.stringify({ 
              "diseaseList" : disease,  
          })
      }).then(res=>res.json()).then(resData => {
          console.log(resData['DecisionTree_disease']) 
          
          if(resData['DecisionTree_disease'] == resData['randomforest_disease']
              && resData['randomforest_disease'] == resData['NaiveBayes_disease'])
          {
            setAnswer(resData['DecisionTree_disease']+ "\n")
          }

          else if(resData['DecisionTree_disease'] == resData['randomforest_disease'])
          {
            setAnswer(resData['DecisionTree_disease']+ "\n"
                      +resData['NaiveBayes_disease']+"\n")
          }
          else if(resData['NaiveBayes_disease'] == resData['randomforest_disease'])
          {
            setAnswer(resData['DecisionTree_disease']+ "\n"
                      +resData['NaiveBayes_disease']+"\n")
          }
          else if(resData['NaiveBayes_disease'] == resData['DecisionTree_disease'])
          {
            setAnswer(resData['DecisionTree_disease']+ "\n"
                      +resData['randomforest_disease']+"\n")
          }
          else{
          setAnswer(resData['DecisionTree_disease']+"\n"
                    +resData['randomforest_disease']+"\n"
                    +resData['NaiveBayes_disease']+"\n" )
          }
      }); 
  }
  catch(error)
  {
      alert(error); 
  }



  }
  
    return (
      <ScrollView>
      <View style={styles.container}>
      
     {
       answer ?
       <View style={styles.ansContainer}>
       <Text style={styles.anstext}>
       {answer}
       </Text>
     </View> :
       <View></View>     
     }
     


      <View style={styles.dropdownContainer}>
             <Picker selectedValue={disease}
             onValueChange={(itemValue, itemIndex) => addDisease(itemValue)}
             
         >
         {
           l1.map((item,index)=>(
             <Picker.Item label={item} value={item} key={index} />
           ))
         }

          </Picker>
    </View>
    <View style={styles.ViewContainer}>
      <Text style={styles.ViewText}>{disease}</Text>
      </View>

      <TouchableOpacity style={styles.btnContainer} onPress={()=> predict()}>
      
        <Text style={Submitstyles.submitText}> Predict </Text>

      </TouchableOpacity>

      </View>
</ScrollView>
    )

}
export default  DiseasePredictionScreen ;
const styles = StyleSheet.create({
  container:{
    flex:1,
    
  },
  ViewText: {
    fontSize: 20,
    margin: 10,
    fontWeight: "bold",
    color:"white",
    textTransform:"uppercase",
  },
  ViewContainer:{
    
    width:"80%",
    padding:"6%",
    margin:"10%",
    alignItems:"center",
    justifyContent:"center",
    marginTop:20,
    backgroundColor:"#4A7EFB",
    borderRadius:5,
  },
  dropdownContainer:{
    margin:"10%",
    marginTop:20,
    borderColor:"#4A7EFB",
    borderWidth:2,
  },
  menuContent: {
    color: "#000",
    fontWeight: "bold",
    padding: 2,
    fontSize: 20
  },
  btnContainer:{
    width:"80%",
    
    margin:"10%",
    alignItems:"center",
    justifyContent:"center",
    marginTop:5,
    backgroundColor:"green",
    borderRadius:5,
  },
  ansContainer:{
    width:"80%",
    margin:"10%",
    alignItems:"center",
    justifyContent:"center",
    marginTop:5,
    backgroundColor:"red",
    borderRadius:5,
  },
  anstext:{
    fontSize: 22, 
        fontWeight: 'bold', 
        color: 'white', 
        alignSelf: 'center', 
        marginVertical: 10
  },
});
