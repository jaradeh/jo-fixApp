import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Icon,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Body,
  Right,
  ImageBackground,
  View,
  StatusBar,
  Button,
  H3,
  Text,
  TabHeading,
  Tabs,
  Tab
} from "native-base";
import { Image, TouchableOpacity, createStackNavigator, createAppContainer,FlatList,ActivityIndicator,ToastAndroid } from "react-native";

import styles from "./styles";

import MyOrders from "../service/my-orders"
import Alerts from "../service/alerts"
import Header6 from "../Header/6";

const launchscreenBg = require("../../../assets/launchscreen-bg.png");
const launchscreenLogo = require("../../../assets/logo-kitchen-sink.png");

class Home extends Component {


    constructor(props){
        super(props);
        this.state ={ 
          isLoading: true,
        }
    }
    componentDidMount(){
        this.fetchData();
    }
    
    fetchData = async () => {
      await fetch('http://admin.jo-fix.com/api/getservices')
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

       const {navigate} = this.props.navigation;


       return (

        <Container style={styles.container}>

        <Header6 /> 




        <Tabs>
        <Tab
        heading={
          <TabHeading>
          <Icon name="search"  style={styles.icon}/>
          <Text>Explore</Text>
          </TabHeading>
      }
      >
      <Content padder>

      <Title style={{color:'black',textAlign:"left",marginBottom:20}}>Serivces</Title>

      <View style={{flex: 1, paddingTop:20}}>
      <FlatList
      data={this.state.dataSource}
      renderItem={({item}) => <TouchableOpacity onPress={() => navigate('Question', {itemId: item.id , itemName: item.name, itemImage : item.image})}>
      <View>
      <Image 
      style={styles.image}
      source={{uri: item.image}}
      />
      <View style={styles.textContainer}>
      <Text style={styles.textBlack}>{item.name}</Text>
      </View>
      </View>
      </TouchableOpacity>}
      keyExtractor={({id}, index) => id}
      />
      </View>


      </Content>
      </Tab>
      <Tab
      heading={
          <TabHeading>
          <Icon name="cart" style={styles.icon} />
          <Text>My Orders</Text>
          </TabHeading>
      }
      >
      <MyOrders />
      </Tab>
      <Tab
      heading={
          <TabHeading>
          <Icon name="notifications" style={styles.icon} />
          <Text>Alerts</Text>
          </TabHeading>
      }
      >
      <Alerts />
      </Tab>
      </Tabs>




      </Container>
      );
  }
}

export default Home;
