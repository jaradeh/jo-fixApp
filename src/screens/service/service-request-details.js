import React, { Component } from "react";
import { Image, TouchableOpacity , createStackNavigator, createAppContainer, Button } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Icon,
  Card,
  CardItem,
  Text,
  View,
  Thumbnail,
  Left,
  Body,
  Right
} from "native-base";
import styles from "./styles";
import CalendarPicker from 'react-native-calendar-picker';
const logo = require("../../../assets/logo.png");
const cardImage = require("../../../assets/services/service-1.png");
const cardImage2 = require("../../../assets/services/service-2.png");
const cardImage3 = require("../../../assets/services/service-3.png");
const cardImage4 = require("../../../assets/services/service-4.png");




class ServiceRequestDetails extends Component {
    constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
    onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  }
    render() {
        
        
        return (
      <Container style={styles.container}>
        <Content padder>
        <Title style={{color:'black',textAlign:"left",marginBottom:20}}>Serivces</Title>
            
            <CalendarPicker
          onDateChange={this.onDateChange}
        />
            
              
        </Content>
      </Container>
    );
  }
}

export default ServiceRequestDetails;
