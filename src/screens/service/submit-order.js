import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Icon,
  Content,
  Tabs,
  Button,
  Tab,
  Text,
  Right,
  Left,
  Body,
  View,
  TabHeading
} from "native-base";
import styles from "./styles";
import CalendarPicker from 'react-native-calendar-picker';
import { TouchableHighlight , Alert , Modal , TouchableOpacity, ImageBackground, StatusBar, TextInput,LinearGradient , ToastAndroid} from "react-native";
import TimePicker from 'react-native-simple-time-picker';
class SubmitRequest extends Component {


  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId');
    const itemName = navigation.getParam('itemName');
    const itemImage = navigation.getParam('itemImage');
    const serviceTime = navigation.getParam('serviceTime');
    const serviceDate = navigation.getParam('serviceDate');
    const clientLat = navigation.getParam('clientLat');
    const clientLong = navigation.getParam('clientLong');
    const serviceDescription = navigation.getParam('serviceDescription');
    const clientPhone = navigation.getParam('clientPhone');
    const techID = navigation.getParam('techID');


    handleClick = () => {

      if (this.state.selectedStartDate === null){
        ToastAndroid.show('Please select a date', ToastAndroid.SHORT);
      }else if (selectedHours === null){
        ToastAndroid.show('Please select time', ToastAndroid.SHORT);
      }else{
        if(selectedHours > 10){
          timeAmPm = 'pm';
        }else{
          timeAmPm = 'am';
        }
        var serviceTime = selectedHours + ":" + selectedMinutes+":00"+" "+timeAmPm;
        navigate('SubmitOrder',{serviceDescription : serviceDescription , clientLat : clientLat , clientLong : clientLong , clientPhone : clientPhone , itemId: itemId , itemName: itemName, itemImage : itemImage , serviceTime:serviceTime , serviceDate:serviceDate});
      }

    }






    return (
      <Container backgroundColor="#fff">
      <Header style={{backgroundColor: "#ACD8F8",paddingLeft:0,paddingRight:0,paddingBottom:10}}>
      <StatusBar backgroundColor="#ACD8F8"  />
      <Left>
      <Button transparent onPress={() => this.props.navigation.goBack()}>
      <Icon name="arrow-back" />
      </Button>
      </Left>
      <Body>
      <Title>{itemName}</Title>
      </Body>
      </Header>
      <Content padder>

      




      <Title style={{color:'black',textAlign:"left",marginBottom:20}}>Request a Serivces</Title>

      <View>
      <Text style={styles.textBlue}>Choose a date</Text>
      <CalendarPicker
      onDateChange={this.onDateChange}
      />
      </View>

      <View style={{marginBottom:25}}>
      <Text style={styles.textBlue}>Preferred Time For Inspection</Text>
      <TouchableOpacity style={styles.locationContainer} onPress={() => {this.setModalVisible(true);}}>
      <Icon style={styles.locationIcon} name="clock" size={20}/>
      <Text style={styles.locationText}>{this.state.timeSelected === null ? "Select Time" : this.state.selectedHours+ ' : ' +this.state.selectedMinutes}</Text>
      </TouchableOpacity>
      </View>

      <View style={{marginBottom:25}}>
      <Text style={styles.textBlue}>Select Location</Text>
      <TouchableOpacity style={styles.locationContainer} onPress={() => {this.setLocation()}}>
      <Icon style={styles.locationIcon} name="search" size={20}/>
      <Text style={styles.locationText}>Choose Location</Text>
      </TouchableOpacity>
      </View>


      <Modal
      animationType="slide"
      transparent={false}
      visible={this.state.modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={{padding:40}}>
      <View style={styles.timePicker} >
      <TimePicker 
      selectedHours={selectedHours}
      selectedMinutes={selectedMinutes}
      onChange={(hours, minutes) => this.setState({ 
       selectedHours: hours, selectedMinutes: minutes ,timeSelected: true,
     })}
      />
      </View>
      <Button
      style={styles.submitTimeBtn}
      onPress={() => {this.setModalVisible(!this.state.modalVisible);}}
      title="Save Selected Time"
      >
      <Text style={styles.nextBtnTxt}>Save Selected Time</Text>
      </Button>
      </View>
      </Modal>




      <View style={{backgroundColor:'#fff',marginBottom:25}}>
      <Button
      style={styles.nextBtn}
      onPress={() => handleClick(this)}
      title="Next Step"
      >
      <Text style={styles.nextBtnTxt}>Next Step</Text>
      </Button>
      </View>





      </Content>
      </Container>
      );
  }
}

export default SubmitRequest;
