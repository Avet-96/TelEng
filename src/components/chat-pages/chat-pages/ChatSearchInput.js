import React from 'react';
import {TextInput, Text, View, Button, StyleSheet} from 'react-native';
import {SearchInputStyles} from './chat-styles/searchInput';
import {AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import {deleteUserToken, userLoginReducers} from '../../../store/action/userLoginRegistration';

function ChatSearchInput(prop) {
	async function _removeStore() {
		try {
			await AsyncStorage.removeItem('token');
			prop.deleteUserToken(false);
			prop.userLoginReducers('', '');
		} catch (error) {
			// Error saving data
		}
	}


	return (
		<View style={styles.search__input_block}>
			<TextInput
				style={styles.search__input}
				placeholder='Search'
			/>
			<Button title='Closed' onPress={() => _removeStore()}/>

		</View>
	);
}

const styles = StyleSheet.create({
	search__input_block: SearchInputStyles.searchInputBlock,
	search__input: SearchInputStyles.searchInput,
});
const mapStateToProps = (store) => ({
	goToHome: store.userPagesNext.goToHome,
});
const mapDispatchToProps = {
	deleteUserToken,
	userLoginReducers,
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(ChatSearchInput);
