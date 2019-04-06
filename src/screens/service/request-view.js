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
import { TouchableHighlight , Alert , Modal , TouchableOpacity,Image, ImageBackground, StatusBar, TextInput,LinearGradient , ToastAndroid} from "react-native";
import TimePicker from 'react-native-simple-time-picker';
class RequestView extends Component {


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
    const {navigate} = this.props.navigation;
    

    handleClick = () => {
        ToastAndroid.show('Successfull', ToastAndroid.SHORT);
        navigate('Home');
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
      <Title style={{color:'black',textAlign:"left",marginBottom:20}}>Review Your Request</Title>
      <View style={{flex: 1, paddingTop:20,padding:10,marginBottom:15,borderRadius:10}}>
        <View>
        <View style={{
          flex: 1, flexDirection: 'row'
        }}>
        <View style={{width: 150}} >
        <Image 
        style={styles.submitOrderimage}
        source={{ uri : itemImage }}
        />
        </View>
        <View style={{width: 150}} >
        <Text>{itemName}</Text>

        <View style={{
          flex: 1, flexDirection: 'row',paddingTop:20,
        }}>
        <View style={{width: 180}} >
        <Text style={styles.textBlue}>Date / Time</Text>
        <Text>{ serviceDate + " " + serviceTime}</Text>
        </View>
        </View>
        <View style={{
          flex: 1, flexDirection: 'row'
        }}>
        <View style={{width: 160}} >
        <Text style={styles.textBlue}>Location</Text>
        <Text>Amman - Jordan</Text>
        </View>
        </View>

        <View style={{
          flex: 1, flexDirection: 'row',paddingTop:20,
        }}>
        <View style={{width: 180}} >
        <Text style={styles.textBlue}>Request Description</Text>
        <Text>{serviceDescription}</Text>
        </View>
        </View>


        <View style={{
          flex: 1, flexDirection: 'row',paddingTop:20,
        }}>
        <View style={{width: 180}} >
        <Text style={styles.textBlue}>Phone Number</Text>
        <Text>{clientPhone}</Text>
        </View>
        </View>


        </View>
        </View>

        
        <Button
        style={styles.submitOrderBtn}
         onPress={() => handleClick(this)}
        title="Submit Order"
        >
        <Text style={styles.submitOrderText}>Submit Order</Text>
        </Button>


        </View>
        </View>
      </Content>
      </Container>
      );
  }
}

export default RequestView;
