import React, { Component } from 'react'
import DatePicker from 'react-native-datepicker'
 
export default class ConfirmAppointment extends Component {
  constructor(props){
    super(props)
    this.state = {date:"2016-05-15"}
  }; 
 
  render(){
    return (

        <DatePicker
        style={{width: 400}}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute', 
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
        }}
        onDateChange={(date) => {this.setState({date: date})}}
      />
    )
  }
}