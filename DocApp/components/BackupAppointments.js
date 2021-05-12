import React, { state, Component } from 'react';
import { View, TouchableOpacity,  Text, ScrollView, StyleSheet } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';


  constructor(props) {
    super(props);
    this.state = {
      HeadTable: ['Medicine name', 'Morning', 'Afternoon', 'Night'],
      DataTable: [
        ["Hello", 
       <View style={styles.checkmark}>
       <Entypo name="circle-with-cross" size={25} color="#B83227" />
       </View>, 
              <View style={styles.checkmark}>
        <AntDesign name="checkcircle" size={25} color="#019031" />
        </View>, 
              <View style={styles.checkmark}> 
        <AntDesign name="checkcircle" size={25} color="#019031" />
        </View>
      ], 
      ["Hello", 
       <View style={styles.checkmark}>
       <Entypo name="circle-with-cross" size={25} color="#B83227" />
       </View>, 
              <View style={styles.checkmark}>
        <AntDesign name="checkcircle" size={25} color="#019031" />
        </View>, 
              <View style={styles.checkmark}> 
        <AntDesign name="checkcircle" size={25} color="#019031" />
        </View>
      ], 
      ["Hello", 
       <View style={styles.checkmark}>
       <Entypo name="circle-with-cross" size={25} color="#B83227" />
       </View>, 
              <View style={styles.checkmark}>
        <AntDesign name="checkcircle" size={25} color="#019031" />
        </View>, 
              <View style={styles.checkmark}> 
        <AntDesign name="checkcircle" size={25} color="#019031" />
        </View>
      ], 
      ["Hello", 
       <View style={styles.checkmark}>
       <Entypo name="circle-with-cross" size={25} color="#B83227" />
       </View>, 
              <View style={styles.checkmark}>
        <AntDesign name="checkcircle" size={25} color="#019031" />
        </View>, 
              <View style={styles.checkmark}> 
        <AntDesign name="checkcircle" size={25} color="#019031" />
        </View>
      ], 
      ]
    }};

  render() {
    return (
      <ScrollView>
      <View>



       <Text style={styles.text}> Dr. {} </Text> 
       <Text style={styles.text}> Address {} </Text>
        <Text style={styles.text}> Date: {} </Text>
        <Table borderStyle={{borderWidth: 1, borderColor: '#000'}}>
        <Row data={this.state.HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
        <Rows data={this.state.DataTable} textStyle={styles.TableText}/>
      </Table>
        
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
    alignItems: "center", 
    justifyContent: "center"
  }
});