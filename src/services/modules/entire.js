import Request from "../request";

export function getEntireCurrentPage() {
	return Request.get({
		url: "",
	});
}
export function getEntireRoomList(offset = 0, size = 20) {
	return Request.get({
		url: "entire/list",
		params: { offset: offset, size: size },
	});
}
