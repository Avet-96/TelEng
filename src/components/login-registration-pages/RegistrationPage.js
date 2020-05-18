import React, {useState} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import {loginSPageStyle} from './loginStyles/loginStyles';
import {userRegistrationReducers} from '../../store/action/userLoginRegistration';
import {connect} from 'react-redux';


function RegistrationPage(props) {
	const [name, setName] = useState('');
	const [f_name, setFName] = useState('');
	const [year, setYear] = useState('');
	const [password, setPassword] = useState('');
	const [r_password, setRPassword] = useState('');
	const [email, setEmail] = useState('');


	async function setUserData() {
		await props.userRegistrationReducers(name, f_name, year, password, r_password, email);
	}

	return (
		<>
			<View style={styles.login__home}>
				<Text style={styles.login__title}>Registration</Text>
				<View style={styles.login__inputs}>
					<TextInput
						style={styles.input__login}
						value={email}
						onChangeText={email => setEmail(email)}
						placeholder='Enter your email'
					/>
					<TextInput
						style={styles.input__login}
						value={name}
						onChangeText={name => setName(name)}
						placeholder='User Name'
					/>
					<TextInput
						style={styles.input__login}
						value={f_name}
						onChangeText={f_name => setFName(f_name)}
						placeholder='User First Name'
					/>
					<TextInput
						style={styles.input__login}
						value={year}
						onChangeText={year => setYear(year)}
						placeholder='User Year'
					/>
					<TextInput
						style={styles.input__login}
						value={password}
						onChangeText={password => setPassword(password)}
						secureTextEntry={true}
						placeholder='password'
					/>
					<TextInput
						style={styles.input__login}
						secureTextEntry={true}
						value={r_password}
						onChangeText={r_password => setRPassword(r_password)}
						placeholder='Repeat password'
					/>
				</View>
				<View style={styles.login__btn}>
					<View style={styles.registration__btn}>
						<Button
							color={'rgba(248,245,244,0.41)'}
							title="Registration" onPress={setUserData}
						/>
					</View>
				</View>

			</View>
		</>
	);

}

const styles = StyleSheet.create({
	login__home: loginSPageStyle.loginHome,
	login__title: loginSPageStyle.loginTitle,
	login__inputs: loginSPageStyle.loginInputs,
	input__login: loginSPageStyle.inputLogin,
	login__btn: loginSPageStyle.loginBtn,
	btn__login: loginSPageStyle.btnLogin,
	registration__btn: loginSPageStyle.btnRegistration,
});


const mapDispatchToProps = {
	userRegistrationReducers,
};


export default connect(
	null,
	mapDispatchToProps,
)(RegistrationPage);

