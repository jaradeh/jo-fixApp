import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text,
  TabHeading,
  Tabs,
  Tab,
  View
} from "native-base";
import { ImageBackground, StatusBar } from "react-native";
import styles from "./styles";

import HomeService from "../service/home-service"
import MyOrders from "../service/my-orders"
import Alerts from "../service/alerts"

class Header6 extends Component {
  render() {
    return (
      <Header style={{backgroundColor: "#ACD8F8",paddingLeft:35,paddingRight:35,paddingBottom:10}}>
      <StatusBar backgroundColor="#ACD8F8"  />
          <Body>
            <Title>JO-FIX</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="search" />
            </Button>
          </Right>
        </Header>
    );
  }
}

export default Header6;
