import { fetchRoomListAction } from "@/store/modules/entire";
import { Pagination } from "@mui/material";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { PaginationStyle } from "./style";

const EntirePagination = memo((props) => {
	const { totalRoomList, currentPage, roomList } = useSelector((state) => {
		return {
			totalRoomList: state.entire.totalRoomList,
			currentPage: state.entire.currentPage,
			roomList: state.entire.roomList,
		};
	}, shallowEqual);

	const dispatch = useDispatch();
	const totalPage = Math.ceil(totalRoomList / 20);
	const startCount = currentPage * 20 + 1;
	const endCount = (currentPage + 1) * 20;

	function pageChangeHandler(event, pageCount) {
		window.scrollTo(0, 0);
		console.log(event, pageCount);
		dispatch(fetchRoomListAction(pageCount - 1));
	}
	return (
		<PaginationStyle>
			{roomList.length && (
				<div className="info">
					<Pagination count={totalPage} onChange={pageChangeHandler} />
					<div className="desc">
						第 {startCount} - {endCount} 个房源，共超过{totalRoomList}个
					</div>
				</div>
			)}
		</PaginationStyle>
	);
});

EntirePagination.propTypes = {};

export default EntirePagination;
