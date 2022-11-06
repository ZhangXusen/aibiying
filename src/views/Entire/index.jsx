import Header from "@/components/app-header";
import { fetchRoomListAction } from "@/store/modules/entire";
import React, { memo } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import EntireFilter from "./Children/Entire-Filter";
import EntirePagination from "./Children/Entire-Pagination";
import EntireRooms from "./Children/Entire-Rooms";
import { EntireStyle } from "./style";

const Entire = memo(() => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchRoomListAction());
	}, [dispatch]);
	return (
		<EntireStyle>
			<Header />
			<EntireFilter />
			<EntireRooms />
			<EntirePagination />
		</EntireStyle>
	);
});

export default Entire;
