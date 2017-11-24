import { AsyncStorage } from "react-native";
import { Facebook } from 'expo';

import {
	FACEBOOK_LOGIN_SUCCESS,
	FACEBOOK_LOGIN_FAIL
} from './types';

export const facebookLogin = () => async dispatch => {
	let token = await AsyncStorage.getItem('fb_token');

	if (token) {
		// dispatch an action saying FB login is done
		dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
	} else {
		// start up FB Login process
		doFacebookLogin(dispatch);
	}
};

const doFacebookLogin = async dispatch => {
	// get token from FB
	let { type, token } = await Facebook.logInWithReadPermissionsAsync('131132000918455', {
		permissions: ['public_profile']
	});

	if (type === 'cancel') {
		return dispatch({ type: FACEBOOK_LOGIN_FAIL });
	}

	await AsyncStorage.setItem('fb_token', token);
	dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};