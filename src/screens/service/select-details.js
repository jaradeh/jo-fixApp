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
import { TouchableOpacity,ImageBackground, StatusBar, TextInput,LinearGradient , ToastAndroid} from "react-native";
import TimePicker from 'react-native-simple-time-picker';

class SelectServiceDetails extends Component {


constructor(props){
    super(props)

    this.state = {
      clientPhone: '',
      serviceDescription : '',
      clientLocation : '',
    }
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
    const {navigate} = this.props.navigation;
    const clientPhone = this.state.clientPhone;
    const serviceDescription = this.props.serviceDescription;
    handleClick = () => {

      if (this.state.clientPhone === ''){
        ToastAndroid.show('Please insert your phone number', ToastAndroid.SHORT);
      }else{
      navigate('Tech',{serviceDescription : serviceDescription , clientLat : clientLat , clientLong : clientLong , clientPhone : clientPhone , itemId: itemId , itemName: itemName, itemImage : itemImage , serviceTime:serviceTime , serviceDate:serviceDate});
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


      <View style={{marginBottom:25}}>
      <Text style={styles.textBlue}>Additonal Information</Text>
      <TextInput style={styles.discriptionInput} onChangeText={(serviceDescription) => this.setState({serviceDescription})} placeholder={'Describe your issue here ...'} numberOfLines={10} multiline={true}  />
      </View>


      


      <View style={{marginBottom:25}}>
      <Text style={styles.textBlue}>Phone number</Text>
      <View style={styles.searchSection}>
      <Icon style={styles.searchIcon} name="call" size={20} color="#000"/>
      <TextInput
      style={styles.inputPhone}
      placeholder={'Insert your phone number'}
      keyboardType={'phone-pad'}
      onChangeText={(clientPhone) => this.setState({clientPhone})}
      underlineColorAndroid="transparent"
      />
      </View>
      </View>

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

  export default SelectServiceDetails;
