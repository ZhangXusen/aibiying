import {
	CHANGE_CURRENT_PAGE,
	CHANGE_LOADING,
	CHANGE_ROOM_LIST,
	CHANGE_TOTAL_ROOM_LIST,
} from "./constants";

const initialState = {
	currentPage: 1, //当前页码
	roomList: [], //房间列表
	totalRoomList: 0, //总数据
	isLoading: false,
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case CHANGE_CURRENT_PAGE:
			return { ...state, currentPage: action.currentPage };
		case CHANGE_ROOM_LIST:
			return { ...state, roomList: action.roomList };
		case CHANGE_TOTAL_ROOM_LIST:
			return { ...state, totalRoomList: action.totalRoomList };
		case CHANGE_LOADING:
			return { ...state, isLoading: action.isLoading };
		default:
			return state;
	}
}

export default reducer;
