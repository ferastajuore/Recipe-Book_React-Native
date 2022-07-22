import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

import CategoryGridTitle from '../components/categoryGridTitle';
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = ({ navigation }) => {
	const renderCategoyItem = (itemData) => {
		return navigation.navigate('Meals OverView', {
			categoryId: itemData.id,
		});
	};

	return (
		<View>
			<FlatList
				data={CATEGORIES}
				keyExtractor={(item) => item.id}
				renderItem={({ item }) => {
					return (
						<CategoryGridTitle
							title={item.title}
							color={item.color}
							onPress={renderCategoyItem.bind(this, item)}
						/>
					);
				}}
				numColumns={2}
			/>
		</View>
	);
};

export default CategoriesScreen;

const styles = StyleSheet.create({});
