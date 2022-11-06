import IconArrowLeft from "@/assets/svg/icon-arrow-left";
import IconArrowRight from "@/assets/svg/icon-arrow-right";
import PropTypes from "prop-types";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { SectionFooterStyle } from "./style";

const SectionFooter = memo((props) => {
	const { color = "#000", name } = props;
	const text = name ? `更多 ${name} 房源` : "显示全部";
	const navigate = useNavigate();
	function moreClick() {
		navigate("/entire");
	}
	return (
		<SectionFooterStyle textColor={color}>
			<div className="info" onClick={moreClick}>
				<div className="text">{text}</div>
				<IconArrowRight />
			</div>
		</SectionFooterStyle>
	);
});

SectionFooter.propTypes = {};

export default SectionFooter;
