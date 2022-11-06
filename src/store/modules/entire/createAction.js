import { getEntireRoomList } from "@/services/modules/entire";
import * as actionTypes from "./constants";

export const changeCurrentPageAction = (currentPage) => {
	return {
		type: actionTypes.CHANGE_CURRENT_PAGE,
		currentPage,
	};
};

export const changeRoomListAction = (roomList) => {
	return {
		type: actionTypes.CHANGE_ROOM_LIST,
		roomList,
	};
};

export const changeTotalRoomList = (totalRoomList) => {
	return {
		type: actionTypes.CHANGE_TOTAL_ROOM_LIST,
		totalRoomList,
	};
};

export const changeLoadingAction = (isLoading) => {
	return {
		type: actionTypes.CHANGE_LOADING,
		isLoading,
	};
};

export const fetchRoomListAction = (page = 0) => {
	return async (dispatch, getState) => {
		dispatch(changeLoadingAction(true));
		//修改当前页码
		dispatch(changeCurrentPageAction(page));
		const currentPage = getState().entire.currentPage;
		//根据页码获取最新数据
		const res = await getEntireRoomList(currentPage * 20);
		console.log(res);
		dispatch(changeLoadingAction(false));
		//将最新数据保存到store
		const roomList = res.list;
		const totalRoomList = res.totalCount;
		dispatch(changeRoomListAction(roomList));
		dispatch(changeTotalRoomList(totalRoomList));
	};
};
