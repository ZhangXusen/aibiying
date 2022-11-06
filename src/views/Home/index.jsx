import Footer from "@/components/app-footer";
import Header from "@/components/app-header";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section-tabs";

import { fetchHomeDataAction } from "@/store/modules/home";
import React, { memo, useCallback, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import HomeBanner from "./Children/Home-banner";
import HomeGoFor from "./Children/Home-gofor";
import HomeSection1 from "./Children/Home-section";
import HomeSection2 from "./Children/Home-section2";
import HomeSection3 from "./Children/Home-section3";
import { HomeWrapper } from "./style";
const Home = memo(() => {
	const dispatch = useDispatch();
	//从redux获取数据
	const {
		PriceInfo,
		HighScoreInfo,
		DiscountInfo,
		RecommendInfo,
		GoForInfo,
		PlusInfo,
	} = useSelector((state) => {
		// console.log(state);
		return {
			PriceInfo: state.home.PriceInfo,
			HighScoreInfo: state.home.HighScoreInfo,
			DiscountInfo: state.home.DiscountInfo,
			RecommendInfo: state.home.RecommendInfo,
			GoForInfo: state.home.GoForInfo,
			PlusInfo: state.home.PlusInfo,
		};
	}, shallowEqual);
	// 派发异步事件：发生网络请求
	useEffect(() => {
		dispatch(fetchHomeDataAction("xxx"));
	}, [dispatch]);

	return (
		<HomeWrapper>
			<Header />
			<HomeBanner />
			<div className="content">
				{/* DiscountInfo不为空时渲染 */}
				{Object.keys(DiscountInfo).length && (
					<HomeSection2 infoData={DiscountInfo} />
				)}
				{Object.keys(RecommendInfo).length && (
					<HomeSection2 infoData={RecommendInfo} />
				)}
				{Object.keys(GoForInfo).length && <HomeGoFor infoData={GoForInfo} />}
				{Object.keys(PriceInfo).length && <HomeSection1 infoData={PriceInfo} />}
				{Object.keys(HighScoreInfo).length && (
					<HomeSection1 infoData={HighScoreInfo} />
				)}
				{Object.keys(PlusInfo).length && <HomeSection3 infoData={PlusInfo} />}
			</div>

			<Footer />
		</HomeWrapper>
	);
});

export default Home;
