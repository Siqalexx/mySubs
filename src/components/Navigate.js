import React from 'react';

import PageConfirmation from './PageConfirmation';
import Auth from './Auth';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function Navigation() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name='Auth'
					component={Auth}
					options={{ title: 'Main' }}
				></Stack.Screen>
				<Stack.Screen
					name='Confirm'
					component={PageConfirmation}
					options={{ title: 'Conf' }}
				></Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
