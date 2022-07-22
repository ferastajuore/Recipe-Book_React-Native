import { useLayoutEffect } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import MealItem from '../components/mealList/mealItem';
import MealsList from '../components/mealList/mealsList';
import { MEALS, CATEGORIES } from '../data/dummy-data';

const MealsOverviewScreen = ({ route, navigation }) => {
	const catId = route.params.categoryId;

	const displayedMeals = MEALS.filter((mealItem) => {
		return mealItem.categoryIds.indexOf(catId) >= 0;
	});

	useLayoutEffect(() => {
		const categoryTitle = CATEGORIES.find((item) => item.id === catId).title;

		navigation.setOptions({
			title: categoryTitle,
		});
	}, [navigation, catId]);

	return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({});
