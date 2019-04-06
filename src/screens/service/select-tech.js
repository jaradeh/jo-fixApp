import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Content,
  Tabs,
  Tab,
  Text,
  Right,
  Left,
  Body,
  View,
  TabHeading
} from "native-base";
import styles from "./styles";
import { Image,TouchableOpacity,ImageBackground, StatusBar, TextInput,FlatList} from "react-native";
class SelectTech extends Component {



  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      techID : '',
    }
  }
  componentDidMount(){
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 1);
    let data = {
      method: 'POST',
      credentials: 'same-origin',
      mode: 'same-origin',
      body: JSON.stringify({
        itemId: itemId
      }),
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json'
      }
    }
    return fetch('http://admin.jo-fix.com/api/gettechs',data)
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson.data,
      }, function(){

      });

    })
    .catch((error) =>{
      console.error(error);
    });
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


    const {navigate} = this.props.navigation;
    

    handleClick = (receivedId) => {
        this.setState({techID: receivedId});
        const techID = this.state.techID;
        navigate('RequestView',{itemId: itemId , itemName: itemName, itemImage : itemImage,  serviceTime:serviceTime , serviceDate:serviceDate ,clientLat : clientLat , clientLong : clientLong ,  serviceDescription : serviceDescription , clientPhone : clientPhone, techID:techID });
    }


    return (
      <Container backgroundColor="#ccc">
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
      <Title style={{color:'black',textAlign:"left",marginBottom:20}}>Select a Technician</Title>
      <View style={{flex: 1, paddingTop:20}}>
      <FlatList
      data={this.state.dataSource}
      renderItem={({item}) => <TouchableOpacity onPress={() => handleClick(item.id)}>
      <View>
      <Image 
      style={styles.image}
      source={{uri: item.image}}
      />
      <View style={styles.textContainer}>
      <Text style={styles.textBlack}>{item.name}</Text>
      <Text style={styles.textBlue}>Experience : {item.experience} Yesrs / Orders Acheived : {item.profession}</Text>
      </View>
      </View>
      </TouchableOpacity>}
      keyExtractor={({id}, index) => id}
      />
      </View>
      </Content>
      </Container>
      );
  }
}

export default SelectTech;
