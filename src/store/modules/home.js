import {
	getHomePriceData,
	getHomeHighScoreData,
	getHomeDiscountData,
	getHomeHotRecommendData,
	getHomeGoForData,
	getHomePlusData,
} from "@/services";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const fetchHomeDataAction = createAsyncThunk(
	"fetchdata",
	//async
	(payload, { dispatch, getState }) => {
		// const res = await getHomePriceData();
		// console.log(res);
		// const res2=await getHomeHighScoreData();

		getHomePriceData().then((res) => {
			dispatch(changePriceInfoAction(res));
		});
		getHomeHighScoreData().then((res) => {
			dispatch(changeHighScoreInfoAction(res));
		});
		getHomeDiscountData().then((res) => {
			dispatch(changeDiscountInfoAction(res));
		});
		getHomeHotRecommendData().then((res) => {
			dispatch(changeRecommendAction(res));
		});
		getHomeGoForData().then((res) => {
			dispatch(changeGoForAction(res));
		});
		getHomePlusData().then((res) => {
			dispatch(changePlusAction(res));
		});
		// return res;
	}
);

const homeSlice = createSlice({
	name: "home",
	initialState: {
		PriceInfo: {},
		HighScoreInfo: {},
		DiscountInfo: {},
		RecommendInfo: {},
		GoForInfo: {},
		PlusInfo: {},
	},
	reducers: {
		changePriceInfoAction(state, { payload }) {
			state.PriceInfo = payload;
		},
		changeHighScoreInfoAction(state, { payload }) {
			state.HighScoreInfo = payload;
		},
		changeDiscountInfoAction(state, { payload }) {
			state.DiscountInfo = payload;
		},
		changeRecommendAction(state, { payload }) {
			state.RecommendInfo = payload;
		},
		changeGoForAction(state, { payload }) {
			state.GoForInfo = payload;
		},
		changePlusAction(state, { payload }) {
			state.PlusInfo = payload;
		},
	},
	extraReducers: {
		// [fetchHomeDataAction.fulfilled](state, { payload }) {
		// 	state.PriceInfo = payload;
		// 	console.log(payload);
		// },
	},
});

export const {
	changePriceInfoAction,
	changeHighScoreInfoAction,
	changeDiscountInfoAction,
	changeRecommendAction,
	changeGoForAction,
	changePlusAction,
} = homeSlice.actions;
export default homeSlice.reducer;
