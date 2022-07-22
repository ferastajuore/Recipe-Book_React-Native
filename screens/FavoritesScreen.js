import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { useSelector } from 'react-redux';
import MealsList from '../components/mealList/mealsList';
import { MEALS } from '../data/dummy-data';

const FavoritesScreen = () => {
	const favoriteMealIds = useSelector((state) => state.favoriteMeal.ids);

	const favoriteMeals = MEALS.filter((meal) => favoriteMealIds.includes(meal.id));

	if (favoriteMeals.length === 0) {
		return (
			<View style={styles.rootContainer}>
				<Text style={styles.text}>You have no favorite meals yet.</Text>
			</View>
		);
	}

	return <MealsList items={favoriteMeals} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#FFF',
	},
});
