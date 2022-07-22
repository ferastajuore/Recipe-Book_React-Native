import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import MealItem from './mealItem';

const MealsList = ({ items }) => {
	// console.log(items.id);
	return (
		<View style={styles.mealsContainer}>
			<FlatList
				data={items}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => {
					return <MealItem {...item} />;
				}}
			/>
		</View>
	);
};

export default MealsList;

const styles = StyleSheet.create({
	mealsContainer: {
		flex: 1,
		padding: 16,
	},
});
