import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const list = ({ data }) => {
	return data.map((dataPoint, index) => (
		<View key={index} style={styles.listItem}>
			<Text style={styles.itemText}>{dataPoint}</Text>
		</View>
	));
};

export default list;

const styles = StyleSheet.create({
	listItem: {
		borderRadius: 6,
		paddingHorizontal: 8,
		paddingVertical: 4,
		marginVertical: 4,
		marginHorizontal: 12,
		backgroundColor: '#e2b497',
	},
	itemText: {
		textAlign: 'center',
		fontSize: 16,
		color: '#72063c',
	},
});
