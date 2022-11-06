import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import { Rating } from "@mui/material";
import { Carousel } from "antd";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { useRef } from "react";
import { RoomItemStyle } from "./style";

const RoomItem = memo((props) => {
	// console.log(props);
	const { itemData, itemWidth = "25%" } = props;
	const CarouselRef = useRef();
	function BtnClick(isRight = true) {
		isRight ? CarouselRef.current.next() : CarouselRef.current.prev();
	}
	return (
		<RoomItemStyle
			itemWidth={itemWidth}
			DescColor={itemData.verify_info.text_color}
		>
			<div className="inner">
				{/* <div className="cover">
					<img src={itemData.picture_url} alt="1" />
				</div> */}
				<div className="swiper">
					<div className="control">
						<div className="btn left" onClick={(e) => BtnClick(false)}>
							<IconArrowLeft height={30} width={30} />
						</div>
						<div className="btn right" onClick={(e) => BtnClick()}>
							<IconArrowRight height={30} width={30} />
						</div>
					</div>
					<Carousel dots={false} ref={CarouselRef}>
						{itemData?.picture_urls?.map((item) => {
							return (
								<div className="cover" key={item}>
									<img src={item} alt="1" />
								</div>
							);
						})}
					</Carousel>
				</div>
				<div className="desc">{itemData.verify_info.messages.join(" · ")}</div>
				<div className="name">{itemData.name}</div>
				<div className="price">￥{itemData.price}/晚</div>
			</div>
			<div className="bottom">
				<Rating
					value={itemData.start_rating ?? 5}
					precision={0.5}
					readOnly
					sx={{ fontSize: "12px", color: itemData.star_rating_color }}
				/>
				<span className="count"> {itemData.reviews_count}</span>
				{itemData?.bottom_info && (
					<span className="extra">· {itemData?.bottom_info?.content}</span>
				)}
			</div>
		</RoomItemStyle>
	);
});

RoomItem.propTypes = {
	itemData: PropTypes.object,
};

export default RoomItem;
