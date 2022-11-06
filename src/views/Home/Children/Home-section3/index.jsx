import ScrollView from "@/base-ui/scroll-view";
import RoomItem from "@/components/room-item";
import SectionFooter from "@/components/section-footer";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { HomeSection3Style } from "./style";

const HomeSection3 = memo((props) => {
	const { infoData } = props;
	return (
		<HomeSection3Style>
			<SectionHeader
				title={infoData.title}
				subtitle={infoData.subtitle}
				subtitleColor={infoData.subtitle}
			/>
			<div className="room-list">
				<ScrollView>
					{infoData.list.map((item) => {
						return <RoomItem itemData={item} itemWidth="20%" key={item.id} />;
					})}
				</ScrollView>
			</div>
			<SectionFooter />
		</HomeSection3Style>
	);
});

HomeSection3.propTypes = {
	infoData: PropTypes.object,
};

export default HomeSection3;
