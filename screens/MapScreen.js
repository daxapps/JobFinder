import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';

import * as actions from '../actions';

class MapScreen extends Component {
	state = {
		mapLoaded: false,
		region: {
			latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
		}
	}

	componentDidMount() {
		this.setState({ mapLoaded: true });
	}

	onRegionChangeComplete = (region) => {
		this.setState({ region });
	}

	onButtonPress = () => {
		this.props.fetchJobs(this.state.region, () => {
			this.props.navigation.navigate('deck');
		});
	}

	render() {
		if (!this.state.mapLoaded) {
			return (
				<View style={{ flex: 1, justifyContent: 'center'}}>
					<ActivityIndicator size="large" />
				</View>
			);
		}

		return (
			<View style={{ flex: 1 }}>
				<MapView 
					region={this.state.region}
					style={{ flex: 1 }} 
					onRegionChangeComplete={this.onRegionChangeComplete}
				/>
				<View style={styles.buttonContainer}>
					<Button
						large
						title="Search This Area"
						backgroundColor="#009688"
						ison={{ name: 'search' }}
						onPress={this.onButtonPress} 
					/>
				</View>
			</View>
		);
	}
}

const styles = {
	buttonContainer: {
		position: 'absolute',
		bottom: 20,
		left: 0,
		right: 0
	}
}

export default connect(null, actions)(MapScreen);
