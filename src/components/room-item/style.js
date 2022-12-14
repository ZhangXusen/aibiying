import styled from "styled-components";

export const RoomItemStyle = styled.li`
	box-sizing: border-box;
	flex-shrink: 0; //不被压缩
	width: ${(props) => props.itemWidth};
	padding: 8px;
	.inner {
		width: 100%;

		.swiper {
			position: relative;
			cursor: pointer;
			&:hover {
				.control {
					display: flex;
				}
			}
			.control {
				position: absolute;
				z-index: 1;
				left: 0;
				right: 0;
				top: 0;
				bottom: 0;
				display: none;
				justify-content: space-between;
				color: #fff;
				.btn {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 40px;
					height: 100%;
					background: linear-gradient(
						to left,
						transparent 0%,
						rgba(0, 0, 0, 0.25) 100%
					);
					&.right {
						background: linear-gradient(
							to right,
							transparent 0%,
							rgba(0, 0, 0, 0.25) 100%
						);
					}
				}
			}
			.cover {
				position: relative;
				box-sizing: border-box;
				padding: 66.66% 8px 0;
				border-radius: 3px;
				overflow: hidden;
				img {
					position: absolute;
					left: 0;
					top: 0;
					width: 100%;
					height: 100%;
					object-fit: cover;
				}
			}
		}
		.desc {
			margin: 10px 0 5px;
			font-size: 12px;
			font-weight: 700;
			color: ${(props) => props.DescColor};
		}
		.name {
			font-size: 16px;
			font-weight: 700;
			//限定两行
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}
		.price {
			font-size: 14px;
			font-weight: 400;
			margin: 8px 0;
		}
	}

	.bottom {
		display: flex;
		align-content: center;
		font-size: 12px;
		font-weight: 600;
		color: ${(props) => props.theme.textColor.primaryColor};
		.MuiRating-icon {
			margin-left: -2px;
		}
		.count {
			margin: 0 2px 0 4px;
		}
	}
`;
