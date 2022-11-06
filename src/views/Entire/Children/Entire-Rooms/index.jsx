import RoomItem from "@/components/room-item";
import classNames from "classnames";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { RoomsStyle } from "./style";

const EntireRooms = memo((props) => {
	// 从redux获取roomlist数据
	const { roomList, totalRoomList, isLoading } = useSelector((state) => {
		return {
			roomList: state.entire.roomList,
			totalRoomList: state.entire.totalRoomList,
			isLoading: state.entire.isLoading,
		};
	}, shallowEqual);

	return (
		<RoomsStyle>
			<h1 className="title">共{totalRoomList}处</h1>
			<div className="room-list">
				{roomList.map((item) => {
					return (
						<RoomItem itemData={item} itemWidth="20%" key={item._id}></RoomItem>
					);
				})}
			</div>
			<div className={classNames({ "room-cover": isLoading })}></div>
			{/* {isLoading && <div className="room-cover"></div>} */}
		</RoomsStyle>
	);
});

EntireRooms.propTypes = {};

export default EntireRooms;
