import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ButtonAuth({ handleClick, buttonActive }) {
	return (
		<TouchableOpacity
			disabled={buttonActive ? false : true}
			onPress={() => {
				handleClick();
			}}
		>
			<View style={[styles.button]}>
				<Text style={[styles.subtitle, styles.buttonText]}>Продолжить</Text>
			</View>
		</TouchableOpacity>
	);
}
const styles = StyleSheet.create({
	block: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
	},
	title: {
		color: '#000',
		fontFamily: 'title-roboto',
		fontWeight: 700,
		fontSize: 36,
		marginTop: 100,
		width: 262,
	},
	subtitle: {
		color: '#000',
		fontFamily: 'inter_light',
		fontWeight: 300,
		fontSize: 16,
		marginTop: 12,
		marginBottom: 32,
	},

	button: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#000',
		marginTop: 20,
		borderRadius: 14,
		height: 50,
		width: 252,
	},
	buttonText: {
		color: '#fff',
		marginTop: 0,
		marginBottom: 0,
		fontSize: 24,
	},
});
