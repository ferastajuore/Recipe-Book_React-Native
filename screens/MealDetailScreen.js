import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import List from '../components/mealDetail/list';
import Subtitle from '../components/mealDetail/subtitle';
import MealDetails from '../components/mealDetails';
import IconButton from '../components/IconButton';
import { MEALS } from '../data/dummy-data';
import { addFavorite, removeFavorite } from '../store/favorites';

const MealDetailScreen = ({ route, navigation }) => {
	const favoriteMealIds = useSelector((state) => state.favoriteMeal.ids);
	const dispatch = useDispatch();

	const mealId = route.params.mealId;

	const selectMeals = MEALS.find((meal) => meal.id === mealId);

	const mealIsFavorites = favoriteMealIds.includes(mealId);

	const headerButtonPressHandler = () => {
		if (mealIsFavorites) {
			dispatch(removeFavorite({ ids: mealId }));
		} else {
			dispatch(addFavorite({ ids: mealId }));
		}
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return (
					<IconButton
						icon={mealIsFavorites ? 'star' : 'star-outline'}
						color="white"
						onPress={headerButtonPressHandler}
					/>
				);
			},
		});
	}, [navigation, headerButtonPressHandler]);

	return (
		<ScrollView style={styles.rootContainer}>
			<Image source={{ uri: selectMeals.imageUrl }} style={styles.imageStyle} />
			<Text style={styles.title}>{selectMeals.title}</Text>

			<MealDetails
				duration={selectMeals.duration}
				complexity={selectMeals.complexity}
				affordability={selectMeals.affordability}
				textStyle={styles.detailText}
			/>

			<View style={styles.listOutContainer}>
				<View style={styles.listContainer}>
					<Subtitle>Ingredients</Subtitle>

					<List data={selectMeals.ingredients} />

					<Subtitle>Steps</Subtitle>

					<List data={selectMeals.steps} />
				</View>
			</View>
		</ScrollView>
	);
};

export default MealDetailScreen;

const styles = StyleSheet.create({
	rootContainer: {
		marginBottom: 30,
	},
	imageStyle: {
		width: '100%',
		height: 350,
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center',
		margin: 10,
	},
	detailText: {
		color: 'white',
	},
	listOutContainer: {
		alignItems: 'center',
	},
	listContainer: {
		width: '80%',
	},
});
