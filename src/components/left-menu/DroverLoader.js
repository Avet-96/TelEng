import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {MenuStyle} from './left-menu-style/leftMenuStyle';

export default function DroverLoader() {
	return (
		<>
			<View style={styles.left__menu_block}>
				<Image style={{width: 100, height: 100}} source={require('../../asets/images/user.png')}/>
				<View style={styles.user__info_block}>
					<View>
						<Text>U_Name</Text>
						<Text>L_Name</Text>
					</View>
					<View>
						<Text>U__Age</Text>
					</View>
				</View>

			</View>
		</>
	);
}
const styles = StyleSheet.create({
	left__menu_block: MenuStyle.leftMenuStyle,
	user__info_block: MenuStyle.UserInfoBlock,
});
