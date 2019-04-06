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



class MyOrders extends Component {
    render() {
        
        
        return (
      <Container style={styles.container}>
        <Content padder>
        <Title style={{color:'black',textAlign:"left",marginBottom:20}}>My Orders</Title>
            
                    <View>
                    <Text style={{textAlign: 'center'}}> No Orders Yet !</Text>
                    </View>
            
              
        </Content>
      </Container>
    );
  }
}

export default MyOrders;
