import styled from "styled-components";

export const CenterWrapper = styled.div`
	flex: 1;
	.search-bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 300px;
		height: 48px;
		padding: 0 8px;
		border: 1px solid #ddd;
		border-radius: 24px;
		cursor: pointer;
		${(props) => props.theme.mixin.boxShadow};
		.text {
			font-size: 14px;
			font-weight: 600;
			color: #222;
			padding: 0 16px;
		}
		.icon {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 32px;
			height: 32px;
			border-radius: 50%;
			color: #fff;
			background-color: ${(props) => props.theme.color.primaryColor};
		}
	}
`;
