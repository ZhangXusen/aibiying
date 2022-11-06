import ScrollView from "@/base-ui/scroll-view";
import classnames from "classnames";
import PropTypes from "prop-types";
import React, { memo, useState } from "react";
import { SectionTabsStyle } from "./style";

const SectionTabs = memo((props) => {
	const { tabTitles = [], tabClick } = props;
	const [currentIndex, setCurrentIndex] = useState(0);
	function itemClick(idx, item) {
		setCurrentIndex(idx);
		tabClick(idx, item);
	}
	return (
		<SectionTabsStyle>
			<ScrollView>
				{tabTitles.map((tab, idx) => {
					return (
						<div
							className={classnames("tab-item", {
								active: currentIndex === idx,
							})}
							key={idx}
							onClick={(e) => itemClick(idx, tab)}
						>
							{tab}
						</div>
					);
				})}
			</ScrollView>
		</SectionTabsStyle>
	);
});

SectionTabs.propTypes = {
	tabTitles: PropTypes.array,
	tabClick: PropTypes.func,
};

export default SectionTabs;
