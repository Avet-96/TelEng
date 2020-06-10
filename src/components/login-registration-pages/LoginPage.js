import React, {useState} from 'react';
import {AsyncStorage} from 'react-native';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';
import {loginSPageStyle} from './loginStyles/loginStyles';
import {connect} from 'react-redux';
import {userLoginReducers} from '../../store/action/userLoginRegistration';




function LoginPage(props, {navigation}) {
	const [email, onChangeEmail] = useState('');
	const [password, onChangePassword] = useState('');


	async function handelPress() {
		await props.userLoginReducers(email, password);

	}

	async function _storeToken(token) {
		try {
			await AsyncStorage.setItem('token', token);
		} catch (error) {
			alert(error);
		}
	}




	if (props.userLoginData.length !== 0) {
		props.userLoginData.data.status === 'Ok' ?
			_storeToken(props.userLoginData.data.token): '';
	}


	return (
		<View style={styles.login__home}>
			<Text style={styles.login__title}>Log In</Text>
			<View style={styles.login__inputs}>
				<TextInput
					style={styles.input__login}
					onChangeText={email => onChangeEmail(email)}
					value={email}
					placeholder='Enter user email or login'
				/>
				<TextInput
					style={styles.input__login}
					secureTextEntry={true}
					onChangeText={password => onChangePassword(password)}
					placeholder='Enter user password'
				/>
			</View>
			<View style={styles.login__btn}>
				<View style={styles.btn__login}>
					<Button
						color={'rgba(248,245,244,0.41)'}
						title="Log In"
						onPress={() => handelPress()}
					/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	login__home: loginSPageStyle.loginHome,
	login__title: loginSPageStyle.loginTitle,
	login__inputs: loginSPageStyle.loginInputs,
	input__login: loginSPageStyle.inputLogin,
	login__btn: loginSPageStyle.loginBtn,
	btn__login: loginSPageStyle.btnLogin,
});

const mapStateToProps = (store) => ({
	userLoginData: store.userLoginRegistration.userLoginData,
});

const mapDispatchToProps = {
	userLoginReducers,
};


export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(LoginPage);

