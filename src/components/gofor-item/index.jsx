import PropTypes from "prop-types";
import React, { memo } from "react";
import { GoForItemStyle } from "./style";

const GoForItem = memo((props) => {
	const { itemData } = props;
	return (
		<GoForItemStyle>
			<div className="inner">
				<div className="item-info">
					<img src={itemData.picture_url} className="cover" alt="" />
					<div className="bg-cover"></div>

					<div className="info">
						<div className="city">{itemData.city}</div>
						<div className="price">均价 {itemData.price}</div>
					</div>
				</div>
			</div>
		</GoForItemStyle>
	);
});

GoForItem.propTypes = {
	itemData: PropTypes.object,
};

export default GoForItem;
