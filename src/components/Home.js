import React, {useState, useEffect} from 'react';
import ChatHome from './chat-pages/ChatHome';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Button} from 'react-native';
import LoginHome from './login-registration-pages/LoginHome';

import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import ChatSearchInput from './chat-pages/chat-pages/ChatSearchInput';
import {deleteUserToken} from '../store/action/userLoginRegistration';

const Stack = createStackNavigator();

function Home(props) {

	const [isLogin, setLogin] = useState(true);
	const [token, setToken] = useState('');


	async function _retrieveData() {
		try {
			const value = await AsyncStorage.getItem('token');
			setToken(value);

		} catch (error) {

		}
	}
	if (!props.goToHome) {
		props.deleteUserToken(true);
	}
	useEffect(() => {
		if (props.userLoginData.length === undefined) {
			props.userLoginData.data.status === 'Ok' ? _retrieveData() : '';
		}else {
			_retrieveData()
		}
		setTimeout(() => {
			if (typeof token === 'string' && token.length > 0 && props.goToHome === true) {
				setLogin(false);
			} else {
				setLogin(true);
			}
		}, 200);
	});


	return (<>
			<NavigationContainer>
				{isLogin ? <LoginHome/>
				: <Stack.Navigator>
						<Stack.Screen
							name="Chat"
							component={ChatHome}
							options={{
								title: 'User Name',
								headerStyle: {
									backgroundColor: '#f4511e',
								},
								headerTintColor: '#fff',
								headerTitleStyle: {
									fontWeight: 'bold',
								},
								headerRight: () => (
									<Button
										onPress={() => alert('This is a button!')}
										title="Info"
										color="#fff"
									/>
								),
							}}
						/>
						<Stack.Screen
							name='UserPage'
							component={ChatSearchInput}
							options={{
								title: 'User Page',
								headerStyle: {
									backgroundColor: '#f4511e',
								},
								headerTintColor: '#fff',
								headerTitleStyle: {
									fontWeight: 'bold',
								},
							}}
						/>
					</Stack.Navigator>}
			</NavigationContainer>
		</>);

}

const mapStateToProps = (store) => ({
	userLoginData: store.userLoginRegistration.userLoginData,
	goToHome: store.userPagesNext.goToHome,
});
const mapDispatchToProps = {
	deleteUserToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
