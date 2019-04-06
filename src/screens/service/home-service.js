import React, { Component } from "react";
import { FlatList, ActivityIndicator , Image, TouchableOpacity , createStackNavigator, createAppContainer, Button } from "react-native";
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

const logo = require("../../../assets/logo.png");
const cardImage = require("../../../assets/services/service-1.png");
const cardImage2 = require("../../../assets/services/service-2.png");
const cardImage3 = require("../../../assets/services/service-3.png");
const cardImage4 = require("../../../assets/services/service-4.png");




class HomeService extends Component {
    
    constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }
    componentDidMount(){
    return fetch('http://admin.jo-fix.com/api/getservices')
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
        if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

        
        return (
      <Container style={styles.container}>
          
          
          
          <Content padder>
          
        <Title style={{color:'black',textAlign:"left",marginBottom:20}}>Serivces</Title>
          
        <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <TouchableOpacity onPress={() => this.props.navigation.AppNavigator()}>
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
      </Container>
    );
  }
}

export default HomeService;
