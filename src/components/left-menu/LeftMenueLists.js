import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {MenuStyle} from './left-menu-style/leftMenuStyle';
class LeftMenuLists extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		return (
			<View  stayle={styles.menu__list_block}>
				<Text>Home</Text>
				<Text>Settings</Text>
				<Text>Help</Text>
				<Text>(+37494949494)</Text>
				<Text>adminAdmin@mail.ru</Text>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	menu__list_block:MenuStyle.MenuListBlock
});
export default LeftMenuLists;