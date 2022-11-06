import PropTypes from "prop-types";
import React, { memo } from "react";
import RoomItem from "../room-item";
import { RoomListStyle } from "./style";

const SectionRooms = memo((props) => {
	const { roomList, itemWidth } = props;
	return (
		<RoomListStyle>
			{roomList?.slice(0, 8)?.map((item) => {
				return <RoomItem itemData={item} key={item.id} itemWidth={itemWidth} />;
			})}
		</RoomListStyle>
	);
});

SectionRooms.propTypes = {
	roomList: PropTypes.array,
};

export default SectionRooms;
