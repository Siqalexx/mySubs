import { StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ButtonAuth from '../UI/ButtonAuth';
import { useState } from 'react';

function PageConfirmation({ route }) {
	const [isValid, setValid] = useState(true);
	const [code, setCode] = useState('');
	const [buttonActive, setButtonActive] = useState(true);
	return (
		<SafeAreaView style={styles.block}>
			<View style={styles.container}>
				<Text style={styles.title}>Код отправлен на номер</Text>
				<Text style={styles.number}>{route.params.number}</Text>
				<View style={styles.inputBox}>
					<TextInput
						maxLength={4}
						value={code}
						onChangeText={''}
						inputMode={'tel'}
						placeholder='СМС-код'
						enterKeyHint={'enter'}
						style={[styles.input, isValid ? '' : styles.inputError]}
					></TextInput>
					<Text
						style={[styles.textError, isValid ? '' : styles.textErrorVisible]}
					>
						Неверный код
					</Text>
				</View>
				<ButtonAuth></ButtonAuth>
				<StatusBar style='auto' />
			</View>
		</SafeAreaView>
	);
}

export default PageConfirmation;

const styles = StyleSheet.create({
	block: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
	},
	container: {
		alignItems: 'center',
	},
	title: {
		color: '#000',
		fontFamily: 'title-roboto',
		fontWeight: 400,
		fontSize: 24,
		marginTop: 100,
		flexWrap: 'wrap',
	},
	number: {
		fontWeight: 300,
		fontSize: 20,
		fontFamily: 'title-roboto',
		textAlign: 'center',
		marginBottom: 65,
	},
	input: {
		height: 30,
		borderBottomWidth: 1,
		borderBottomColor: '#000',
		borderStyle: 'solid',
		fontFamily: 'title-roboto',
		fontSize: 24,
		width: 128,
		textAlign: 'center',
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
	inputBox: {
		alignItems: 'center',
	},
});
