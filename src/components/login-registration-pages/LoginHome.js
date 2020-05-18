import React, {Component, useState} from 'react';
import {Button, ImageBackground, StyleSheet, View} from 'react-native';
import RegistrationPage from './RegistrationPage';
import HomeBackgroundPhoto from '../../asets/images/box960x540.jpg';
import {bodyStyle, loginSPageStyle} from './loginStyles/loginStyles';
import LoginPage from './LoginPage';

function LoginHome() {
	const [isRegistration, setIsRegistration] = useState(false);


	return (
		<View style={styles.body}>
			<ImageBackground
				style={{width: '100%', height: '100%', blurRadius: 3}}
				source={HomeBackgroundPhoto}>
				{!isRegistration ?
					<>
						<LoginPage/>
						<View style={styles.registration__btn}>
							<Button
								color={'rgba(248,245,244,0.41)'}
								title="Go to Registration"
								onPress={() => setIsRegistration(true)}
							/>
						</View>
					</> : <RegistrationPage/>}

			</ImageBackground>
		</View>
	);

}

const styles = StyleSheet.create({
	body: bodyStyle,
	registration__btn: loginSPageStyle.goRegistrationPAGe,
});

export default LoginHome;
