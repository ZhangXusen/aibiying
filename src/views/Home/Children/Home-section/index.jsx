import SectionFooter from "@/components/section-footer";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { Section1Style } from "./style";

const HomeSection1 = memo((props) => {
	const { infoData, itemWidth } = props;
	return (
		<Section1Style className="price">
			<SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
			<SectionRooms roomList={infoData.list} itemWidth={itemWidth} />
			<SectionFooter />
		</Section1Style>
	);
});

HomeSection1.propTypes = {
	infoData: PropTypes.object,
};

export default HomeSection1;
