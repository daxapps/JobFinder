import React, { Component } from "react";
import { View, Text, Platform } from "react-native";
import { Button } from "react-native-elements";

class ReviewScreen extends Component {
	static navigationOptions = props => {
		const { navigation } = props;
		const { navigate } = navigation;
		// headerTitleStyle if for android phones
		return {
			headerTitle: "Review Jobs",
			headerRight: (
				<Button
					title="Settings"
					onPress={() => navigate("settings")}
					backgroundColor="rgba(0,0,0,0)"
					color="rgba(0, 125, 125, 1)"
				/>
			),
			headerTitleStyle: {
				marginTop: Platform.OS === "android" ? 24 : 0
			}
		};
	};

	render() {
		return (
			<View>
				<Text>ReviewScreen</Text>
				<Text>ReviewScreen</Text>
				<Text>ReviewScreen</Text>
				<Text>ReviewScreen</Text>
				<Text>ReviewScreen</Text>
				<Text>ReviewScreen</Text>
			</View>
		);
	}
}

export default ReviewScreen;
