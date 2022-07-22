import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const subtitle = ({ children }) => {
	return (
		<View style={styles.subtitleContainer}>
			<Text style={styles.subtitle}>{children}</Text>
		</View>
	);
};

export default subtitle;

const styles = StyleSheet.create({
	subtitle: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#ba6690',
		textAlign: 'center',
	},
	subtitleContainer: {
		padding: 6,
		marginHorizontal: 12,
		marginVertical: 4,
		borderBottomColor: '#ba6690',
		borderBottomWidth: 2,
	},
});
