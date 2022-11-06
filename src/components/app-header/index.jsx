import React, { memo } from "react";
import HeaderRight from "./header-right/index.jsx";
import HeaderCenter from "./header-center/index.jsx";
import HeaderLeft from "./header-left/index.jsx";
import { HeaderWrapper } from "./style.js";
const Header = memo(() => {
	return (
		<HeaderWrapper>
			<HeaderLeft />
			<HeaderCenter />
			<HeaderRight />
		</HeaderWrapper>
	);
});

export default Header;
