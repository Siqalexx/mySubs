import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import Navigation from './src/components/Navigate';

export default function App() {
	const [fontsLoaded] = useFonts({
		'title-roboto': require('./assets/fonts/TitleRoboto.ttf'),
		inter_light: require('./assets/fonts/inter_light.ttf'),
	});
	if (!fontsLoaded) {
		return <Text>LOADING</Text>;
	}
	return <Navigation></Navigation>;
}
