import { configureStore } from '@reduxjs/toolkit';

import favoritesSlice from './favorites';

const store = configureStore({
	reducer: {
		favoriteMeal: favoritesSlice,
	},
});
export default store;
