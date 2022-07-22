import React from 'react';
import { Image, Pressable, StyleSheet, Text, View, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MealDetails from '../mealDetails';

const mealItem = ({ title, imageUrl, duration, complexity, affordability, id }) => {
	const navigation = useNavigation();

	const selectMealItemHandler = () => {
		navigation.navigate('Meals Detail', {
			mealId: id,
		});
	};

	return (
		<View style={styles.mealItem}>
			<Pressable android_ripple={{ color: '#CCC' }} onPress={selectMealItemHandler}>
				<View style={styles.innerContainer}>
					<View>
						<Image source={{ uri: imageUrl }} style={styles.imageStyle} />
						<Text style={styles.text}>{title}</Text>
					</View>

					<MealDetails
						duration={duration}
						complexity={complexity}
						affordability={affordability}
					/>
				</View>
			</Pressable>
		</View>
	);
};

export default mealItem;

const styles = StyleSheet.create({
	mealItem: {
		margin: 16,
		borderRadius: 8,
		backgroundColor: 'white',
		elevation: 4,
		shadowColor: 'black',
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
	},
	innerContainer: {
		borderRadius: 8,
		overflow: 'hidden',
	},
	imageStyle: {
		width: '100%',
		height: 200,
	},
	text: {
		fontWeight: 'bold',
		fontSize: 18,
		textAlign: 'center',
		margin: 8,
	},
	details: {
		flexDirection: 'row-reverse',
		alignItems: 'center',
		justifyContent: 'center',
		padding: 8,
	},
	detailItem: {
		marginHorizontal: 4,
		fontSize: 12,
	},
});
