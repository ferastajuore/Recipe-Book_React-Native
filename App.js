import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';

// import { store } from './store/favorites';
import store from './store/reducer';

import {
	CategoriesScreen,
	MealsOverviewScreen,
	MealDetailScreen,
	FavoritesScreen,
} from './screens';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: '#72063c' },
				headerTintColor: 'white',
				headerTitleAlign: 'center',
				sceneContainerStyle: { backgroundColor: '#2a0116' },
				drawerContentStyle: { backgroundColor: '#8e084b' },
				drawerInactiveTintColor: 'white',
				drawerActiveTintColor: '#2a0116',
				drawerActiveBackgroundColor: '#e2b497',
			}}
		>
			<Drawer.Screen
				name="Meals Categories"
				component={CategoriesScreen}
				options={{
					title: 'All Categoroies',
					drawerIcon: ({ color, size }) => {
						return <Ionicons name="list" color={color} size={size} />;
					},

					// drico
				}}
			/>
			<Drawer.Screen
				name="FavoritesScreen"
				component={FavoritesScreen}
				options={{
					title: 'Favorites',
					drawerIcon: ({ color, size }) => {
						return <Ionicons name="star" color={color} size={size} />;
					},
				}}
			/>
		</Drawer.Navigator>
	);
};

export default function App() {
	return (
		<>
			<Provider store={store}>
				<StatusBar style="light" />
				<NavigationContainer>
					<Stack.Navigator
						screenOptions={{
							headerStyle: { backgroundColor: '#72063c' },
							headerTintColor: 'white',
							headerTitleAlign: 'center',
							contentStyle: { backgroundColor: '#2a0116' },
						}}
					>
						<Stack.Screen
							name="Drawer Screen"
							component={DrawerNavigator}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen name="Meals OverView" component={MealsOverviewScreen} />
						<Stack.Screen name="Meals Detail" component={MealDetailScreen} />
					</Stack.Navigator>
				</NavigationContainer>
			</Provider>
		</>
	);
}
