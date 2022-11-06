import styled from "styled-components";

export const RightWrapper = styled.div`
	flex: 1;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	color: ${(props) => props.theme.textColor.primaryColor};
	font-size: 14px;
	font-weight: 600;
	.btns {
		height: 42px;
		display: flex;
		align-items: center;
		.btn {
			padding: 10px;
			color: ${(props) => props.theme.textColor.primaryColor};
			&:hover {
				background-color: #ccc;
				border-radius: 22px;
			}
		}
	}
	.profile {
		position: relative;
		display: flex;
		align-items: center;
		border-radius: 35px;
		background: transparent;
		background-color: #fff;
		padding: 5px 5px 5px 12px;
		border: 1px solid #ccc;
		color: #999;
		${(props) => props.theme.mixin.boxShadow}

		.panel {
			position: absolute;
			top: 50px;
			right: 0;
			width: 240px;
			color: ${(props) => props.theme.textColor.primaryColor};
			background-color: #fff;
			border-radius: 10px;
			box-shadow: 0 0 6px rgba(0, 0, 0, 0.18);
			.top,
			.bottom {
				padding: 10px 0;
				.item {
					height: 40px;
					line-height: 40px;
					padding: 0 16px;
					&:hover {
						background-color: #f5f5f5;
					}
				}
			}
			.top {
				border-bottom: 1px solid #eee;
			}
		}
	}
`;
