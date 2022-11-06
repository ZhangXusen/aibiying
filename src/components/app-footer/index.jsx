import React, { memo } from "react";
import footer from "@/assets/data/footer.json";
import { FooterStyle } from "./style";
const Footer = memo(() => {
	console.log(footer);
	return (
		<FooterStyle>
			<div className="container">
				{footer.map((item, idx) => {
					return (
						<div className="item" key={idx}>
							<h4 className="title">{item.name}</h4>
							<ul className="lists">
								{item.list.map((list, idx1) => {
									return (
										<li className="list" key={idx1}>
											{list}
										</li>
									);
								})}
							</ul>
						</div>
					);
				})}
			</div>
		</FooterStyle>
	);
});

export default Footer;
