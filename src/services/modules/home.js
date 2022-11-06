import Request from "../request";

export function getHomePriceData() {
	return Request.get({
		url: "/home/goodprice",
	});
}

export function getHomeHighScoreData() {
	return Request.get({
		url: "/home/highscore",
	});
}

export function getHomeDiscountData() {
	return Request.get({
		url: "home/discount",
	});
}

export function getHomeHotRecommendData() {
	return Request.get({
		url: "home/hotrecommenddest",
	});
}

export function getHomeGoForData() {
	return Request.get({
		url: "home/longfor",
	});
}

export function getHomePlusData() {
	return Request.get({
		url: "home/plus",
	});
}