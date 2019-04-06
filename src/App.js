import React, { Component } from "react";
import { Root } from "native-base";
// import { StackNavigator, DrawerNavigator } from "react-navigation";
import { createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";

import Home from "./screens/home/";
import HomeServiceQuestions from "./screens/service/home-service_questions/";
import SelectTech from "./screens/service/select-tech/";
import SelectServiceDetails from "./screens/service/select-details/";
import RequestView from "./screens/service/request-view/";
import SubmitRequest from "./screens/service/submit-order/";

const MainNavigator = createStackNavigator(
{
	Home: {screen: Home},
	Question: {screen: HomeServiceQuestions},
	Tech: {screen: SelectTech},
	selectDetails: {screen: SelectServiceDetails},
	RequestView: {screen: RequestView},
	SubmitRequest: {screen: SubmitRequest},
},
{
	initialRouteName: "Home",
	headerMode: 'none',
	navigationOptions: {
		headerVisible: false,
	}
}
);
const App = createAppContainer(MainNavigator);

export default App;