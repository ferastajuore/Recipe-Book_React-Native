import React from 'react';
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native';

const categoryGridTitle = ({ title, color, onPress }) => {
	return (
		<View style={styles.gridItem}>
			<Pressable
				android_ripple={{ color: '#CCC' }}
				style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
				onPress={onPress}
			>
				<View style={[styles.innerContainer, { backgroundColor: color }]}>
					<Text style={styles.title}>{title}</Text>
				</View>
			</Pressable>
		</View>
	);
};

export default categoryGridTitle;

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 16,
		height: 150,
		borderRadius: 4,
		elevation: 4,
		backgroundColor: '#FFF',
		shadowColor: 'black',
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
		overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
	},
	button: {
		flex: 1,
	},
	buttonPressed: {
		opacity: 0.5,
	},
	innerContainer: {
		flex: 1,
		padding: 16,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 18,
	},
});
