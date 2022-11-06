import SectionFooter from "@/components/section-footer";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTabs from "@/components/section-tabs";
import PropTypes from "prop-types";
import React, { memo, Suspense, useCallback, useState } from "react";
import { Section2Style } from "./style";

const HomeSection2 = memo((props) => {
	const { infoData } = props;

	//tabs数据转换
	const tabsTitle = infoData.dest_address?.map((item) => item.name);
	const initTabName = Object.keys(infoData.dest_list)[0]; //默认选中的tabName
	const [currentTabName, setCurrentTabName] = useState(initTabName);
	const tabClickHandler = useCallback((idx, item) => {
		setCurrentTabName(item);
	}, []);
	return (
		<Section2Style>
			<div className="discount">
				<SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
				<SectionTabs tabTitles={tabsTitle} tabClick={tabClickHandler} />

				<SectionRooms
					roomList={infoData.dest_list?.[currentTabName]}
					itemWidth={"33.3333%"}
				/>
				<SectionFooter name={currentTabName} color={"#008489"} />
			</div>
		</Section2Style>
	);
});

HomeSection2.propTypes = {
	infoData: PropTypes.object,
};

export default HomeSection2;
