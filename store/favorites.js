import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState: {
		ids: [],
	},
	reducers: {
		addFavorite: (state, action) => {
			state.ids.push(action.payload.ids);
		},
		removeFavorite: (state, action) => {
			state.ids.splice(state.ids.indexOf(action.payload.ids), 1);
		},
	},
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
