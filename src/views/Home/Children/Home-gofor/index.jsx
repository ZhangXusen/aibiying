import ScrollView from "@/base-ui/scroll-view";
import GoForItem from "@/components/gofor-item";
import SectionHeader from "@/components/section-header";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { GoForStyle } from "./style";

const HomeGoFor = memo((props) => {
	const { infoData } = props;

	return (
		<GoForStyle>
			<SectionHeader title={infoData.title} subtitle={infoData.subtitle} />
			<div className="content">
				<ScrollView>
					{infoData.list.map((item, index) => {
						return <GoForItem itemData={item} key={item} />;
					})}
				</ScrollView>
			</div>
		</GoForStyle>
	);
});

HomeGoFor.propTypes = {
	infoData: PropTypes.object,
};

export default HomeGoFor;
