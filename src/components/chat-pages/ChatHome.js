import React, {Component} from 'react';
import {DrawerLayoutAndroid} from 'react-native';
import DroverLoader from '../left-menu/DroverLoader';
import ChatSearchInput from './chat-pages/ChatSearchInput';

export default function ChatHome() {
	return (
		<DrawerLayoutAndroid
			drawerWidth={300}
			drawerPosition='left'
			renderNavigationView={() => <DroverLoader/>}>
			<ChatSearchInput/>
		</DrawerLayoutAndroid>
	);
}


