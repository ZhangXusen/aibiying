import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./modules/home";
import EntireReducer from "./modules/entire";
const store = configureStore({
	reducer: {
		home: homeReducer,
		entire: EntireReducer,
	},
});

export default store;
