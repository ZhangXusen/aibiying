import styled from "styled-components";

export const ScrollViewStyle = styled.div`
	position: relative;
	padding: 5px;
	.scroll {
		overflow: hidden;
		.scroll-content {
			display: flex;
			transition: transform 300ms ease;
		}
	}
	.control {
		position: absolute;
		z-index: 9;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		width: 28px;
		height: 28px;
		border-radius: 50%;
		border: 2px solid #fff;
		background: #fff;
		box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.14);
	}
	.btn-left {
		top: 50%;
		left: 0;
		transform: translate(-50%, -50%);
	}
	.btn-right {
		top: 50%;
		right: 0;
		transform: translate(50%, -50%);
	}
`;
