import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { MapView } from 'expo';

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
				/>
			</View>
		);
	}
}

export default MapScreen;