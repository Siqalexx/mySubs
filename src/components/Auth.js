import { StatusBar } from 'expo-status-bar';

import React, { useEffect, useState } from 'react';
import {
	Button,
	SafeAreaView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import ButtonAuth from '../UI/ButtonAuth';

export default function Auth({ navigation }) {
	const [number, setNumber] = useState('');
	const [isValid, setValid] = useState(true);
	const [buttonActive, setButtonActive] = useState(true);
	let formattedInput = '';

	const changeNumber = e => {
		setValid(true);
		formattedInput = '';
		let inputValueNumber = e.replace(/\D/g, '');
		console.log(!inputValueNumber);
		if (!inputValueNumber) {
			return setNumber('');
		}
		if (inputValueNumber[0] == '9') inputValueNumber = '7' + inputValueNumber;

		formattedInput =
			inputValueNumber[0] == '8'
				? '8'
				: inputValueNumber[0] == '7'
				? '+7'
				: '+7' + ' (' + inputValueNumber;
		if (inputValueNumber.length > 1) {
			formattedInput += ' (' + inputValueNumber.substring(1, 4);
		}
		if (inputValueNumber.length >= 5) {
			formattedInput += ') ' + inputValueNumber.substring(4, 7);
		}
		if (inputValueNumber.length >= 8) {
			formattedInput += '-' + inputValueNumber.substring(7, 9);
		}
		if (inputValueNumber.length >= 10) {
			formattedInput += '-' + inputValueNumber.substring(9, 11);
		}
		setNumber(formattedInput);
	};

	const handleClick = () => {
		if (number.length == 18) navigation.navigate('Confirm', { number });
		else {
			setValid(false);
		}
	};

	return (
		<SafeAreaView style={styles.block}>
			<View>
				<Text style={styles.title}>Введите номер телефона</Text>
				<Text style={styles.subtitle}>Чтобы следить за подписками </Text>
				<View>
					<TextInput
						maxLength={18}
						value={number}
						onChangeText={changeNumber}
						inputMode={'tel'}
						enterKeyHint={'enter'}
						style={[styles.input, isValid ? '' : styles.inputError]}
					></TextInput>
					<Text
						style={[styles.textError, isValid ? '' : styles.textErrorVisible]}
					>
						Номер введён неправильно
					</Text>
				</View>
				<ButtonAuth
					handleClick={handleClick}
					buttonActive={buttonActive}
				></ButtonAuth>
				<StatusBar style='auto' />
			</View>
		</SafeAreaView>
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
	input: {
		height: 30,
		borderBottomWidth: 1,
		borderBottomColor: '#000',
		borderStyle: 'solid',
		fontFamily: 'title-roboto',
		fontSize: 24,
		width: 252,
	},
	inputError: {
		color: 'red',
	},
	textError: {
		color: '#000',
		fontFamily: 'title-roboto',
		fontWeight: 300,
		fontSize: 16,
		marginTop: 20,
		display: 'none',
	},
	textErrorVisible: {
		display: 'flex',
	},
});
