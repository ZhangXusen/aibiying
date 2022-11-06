import styled from "styled-components";

export const FooterStyle = styled.div`
	.container {
		margin: 0 auto;
		display: flex;
		align-items: start;
		justify-content: space-between;
		border-top: 1px solid #ebebeb;
		border-bottom: 1px solid #ebebeb;
		padding: 24px;
		max-width: 1080px;
		.item {
			flex: 1;
			display: flex;

			flex-direction: column;
			padding: 0 8px;
			.title {
				height: 20px;
				font-size: 14px;
				font-weight: 800;
				color: rgb(72, 72, 72);
			}
			.lists {
				margin-top: 15px;
				.list {
					margin-bottom: 10px;
					font-weight: 800;
					color: #767676;
				}
			}
		}
	}
`;
