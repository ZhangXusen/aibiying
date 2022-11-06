import PropTypes from "prop-types";
import React, { memo } from "react";
import filterData from "@/assets/data/filter-data.json";
import { FilterStyle } from "./style";
import { useState } from "react";
import classNames from "classnames";
const EntireFilter = memo((props) => {
	const [selectedItem, setSelectedItem] = useState([]);
	function itemClick(item) {
		const newItems = [...selectedItem];
		if (newItems.includes(item)) {
			const itemIndex = newItems.findIndex((filterItem) => filterItem === item);
			newItems.splice(itemIndex, 1);
			//如果已经选中则删除元素
		} else {
			newItems.push(item);
		}

		setSelectedItem(newItems);
	}
	return (
		<FilterStyle>
			<div className="filter">
				{filterData.map((item, index) => {
					return (
						<div
							className={classNames("filter-item", {
								active: selectedItem.includes(item),
							})}
							key={index}
							onClick={(e) => itemClick(item)}
						>
							{item}
						</div>
					);
				})}
			</div>
		</FilterStyle>
	);
});

EntireFilter.propTypes = {};

export default EntireFilter;
