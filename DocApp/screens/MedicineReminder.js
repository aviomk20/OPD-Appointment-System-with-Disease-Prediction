// import React from 'react';
// import {
//   View,
//   StyleSheet,
//   StatusBar,
//   ScrollView,
//   TouchableOpacity, 
//   Text
// } from 'react-native';

// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// import { useTheme } from '@react-navigation/native';
// import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

// import { Card } from 'react-native-elements'; 

// const MedicineReminder = ({navigation}) => {
//   const theme = useTheme();

//   constructor(props) {
//     super(props);
//     this.state = {
//       tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
//       tableData: [
//         ['1', '2', '3', '4'],
//         ['a', 'b', 'c', 'd'],
//         ['1', '2', '3', '456\n789'],
//         ['a', 'b', 'c', 'd']
//       ]
//     }
//   }; 

//   return (
//     <ScrollView style={styles.container}>
//     <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
//     <View style={styles.container}>
//         <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
//           <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
//           <Rows data={state.tableData} textStyle={styles.text}/>
//         </Table>
//       </View>
//     <Text>Medicine Name</Text>

//         <Text>Morning</Text>
//         <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
//           <View style={styles.categoryIcon}>
//             <MaterialIcons name="done" size={25} color="#4A7EFB" />
//           </View>
//         </TouchableOpacity>
//         <Text>Afternoon</Text>

//         <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
//           <View style={styles.categoryIcon}>
//             <MaterialIcons name="done" size={25} color="#4A7EFB" />
//           </View>
//         </TouchableOpacity>
//         <Text>Night</Text>

//         <TouchableOpacity style={styles.categoryBtn} onPress={() => {}}>
//           <View style={styles.categoryIcon}>
//             <MaterialIcons name="done" size={25} color="#4A7EFB" />
//           </View>
//         </TouchableOpacity>


    
//       </ScrollView>
//   );
// };

// export default MedicineReminder;


// const styles = StyleSheet.create({
//   sliderContainer: {
//     height: 200,
//     width: '90%',
//     marginTop: 10,
//     justifyContent: 'center',
//     alignSelf: 'center',
//     borderRadius: 8,
//   },
//   slide: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'transparent',
//     borderRadius: 8,
//   },
//   sliderImage: {
//     height: '100%',
//     width: '100%',
//     alignSelf: 'center',
//     borderRadius: 8,
//   },
//   categoryContainer: {
//     flexDirection: 'row',
//     width: '90%',
//     alignSelf: 'center',
//     marginTop: 25,
//     marginBottom: 10,
//   },
//   categoryBtn: {
//     flex: 1,
//     width: '30%',
//     marginHorizontal: 0,
//     alignSelf: 'center',
//   },
//   categoryIcon: {
//     borderWidth: 0,
//     alignItems: 'center',
//     justifyContent: 'center',
//     alignSelf: 'center',
//     width: 70,
//     height: 70,
//     backgroundColor: '#FFFFFF' /* '#FF6347' */,
//     borderRadius: 50,
//   },
//   categoryBtnTxt: {
//     alignSelf: 'center',
//     marginTop: 5,
//     color: '#FFFFFF',
//   },
//   cardsWrapper: {
//     marginTop: 20,
//     width: '90%',
//     alignSelf: 'center',
//   },
//   card: {
//     height: 100,
//     marginVertical: 10,
//     flexDirection: 'row',
//     shadowColor: '#999',
//     shadowOffset: {width: 0, height: 1},
//     shadowOpacity: 0.8,
//     shadowRadius: 2,
//     elevation: 5,
//   },
//   cardImgWrapper: {
//     flex: 1,
//   },
//   cardImg: {
//     height: '100%',
//     width: '100%',
//     alignSelf: 'center',
//     borderRadius: 8,
//     borderBottomRightRadius: 0,
//     borderTopRightRadius: 0,
//   },
//   cardInfo: {
//     flex: 2,
//     padding: 10,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderLeftWidth: 0,
//     borderBottomRightRadius: 8,
//     borderTopRightRadius: 8,
//     backgroundColor: '#fff',
//   },
//   cardTitle: {
//     fontWeight: 'bold',
//   },
//   cardDetails: {
//     fontSize: 12,
//     color: '#444',
//   },
//   cardstyle: {
//     backgroundColor: "#4A7EFB", 
//     borderRadius: 80,
//   }, 
//   container: {
//     backgroundColor: "#FFFFFF", 
//     flex: 1,
//   },
//   sliderContainer: {
//     height: 200,
//     width: '90%',
//     marginTop: 10,
//     justifyContent: 'center',
//     alignSelf: 'center',
//     borderRadius: 8,
//   },
//   slide: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'transparent',
//     borderRadius: 8,
//   },
//   sliderImage: {
//     height: '100%',
//     width: '100%',
//     alignSelf: 'center',
//     borderRadius: 8,
//   },
//   categoryContainer: {
//     flexDirection: 'row',
//     width: '90%',
//     alignSelf: 'center',
//     marginTop: 25,
//     marginBottom: 10,
//   },
//   categoryBtn: {
//     flex: 1,
//     width: '30%',
//     marginHorizontal: 0,
//     alignSelf: 'center',
//   },
//   categoryIcon: {
//     borderWidth: 0,
//     alignItems: 'center',
//     justifyContent: 'center',
//     alignSelf: 'center',
//     width: 70,
//     height: 70,
//     backgroundColor: '#FFFFFF' /* '#FF6347' */,
//     borderRadius: 50,
//   },
//   categoryBtnTxt: {
//     alignSelf: 'center',
//     marginTop: 5,
//     color: '#FFFFFF',
//   },
//   cardsWrapper: {
//     marginTop: 20,
//     width: '90%',
//     alignSelf: 'center',
//   },
//   card: {
//     height: 100,
//     marginVertical: 10,
//     flexDirection: 'row',
//     shadowColor: '#999',
//     shadowOffset: {width: 0, height: 1},
//     shadowOpacity: 0.8,
//     shadowRadius: 2,
//     elevation: 5,
//   },
//   cardImgWrapper: {
//     flex: 1,
//   },
//   cardImg: {
//     height: '100%',
//     width: '100%',
//     alignSelf: 'center',
//     borderRadius: 8,
//     borderBottomRightRadius: 0,
//     borderTopRightRadius: 0,
//   },
//   cardInfo: {
//     flex: 2,
//     padding: 10,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderLeftWidth: 0,
//     borderBottomRightRadius: 8,
//     borderTopRightRadius: 8,
//     backgroundColor: '#fff',
//   },
//   cardTitle: {
//     fontWeight: 'bold',
//   },
//   cardDetails: {
//     fontSize: 12,
//     color: '#444',
//   },
//   cardstyle: {
//     backgroundColor: "#4A7EFB", 
//     borderRadius: 80,
//   }
// });