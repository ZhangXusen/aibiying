import IconAvatar from "@/assets/svg/icon-avatar";
import IconGlobal from "@/assets/svg/icon-global";
import IconMenu from "@/assets/svg/icon-menu";
import React, { memo, useEffect, useState } from "react";
import { RightWrapper } from "./style";

const HeaderRight = memo(() => {
	const [showPanel, setShowPanel] = useState(false);
	function ProfileHandlerClick() {
		setShowPanel(!showPanel);
	}
	useEffect(() => {
		function windowHandlerClick() {
			setShowPanel(false);
		}
		window.addEventListener("click", windowHandlerClick, true);
		return () => {
			window.removeEventListener("click", windowHandlerClick, true);
		};
	}, []);
	return (
		<div>
			<RightWrapper>
				<div className="btns">
					<span className="btn">登录</span>
					<span className="btn">注册</span>
					<span className="btn">
						<IconGlobal />
					</span>
				</div>
				<div className="profile" onClick={ProfileHandlerClick}>
					<IconMenu />
					<IconAvatar />
					{showPanel && (
						<div className="panel">
							<div className="top">
								<div className="item register">注册</div>
								<div className="item login">登录</div>
							</div>
							<div className="bottom">
								<div className="item">出租房源</div>
								<div className="item">开展体验</div>
								<div className="item">帮助</div>
							</div>
						</div>
					)}
				</div>
			</RightWrapper>
		</div>
	);
});

export default HeaderRight;
