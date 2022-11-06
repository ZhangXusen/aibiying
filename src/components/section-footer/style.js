import styled from "styled-components";

export const SectionFooterStyle = styled.div`
	.info {
		display: flex;
		margin-top: 10px;
		align-items: center;
		color: ${(props) => props.textColor};
		.text {
			display: flex;
			align-items: center;
			margin-right: 5px;
			cursor: pointer;
			font-size: 17px;
			font-weight: 700;
			&:hover {
				text-decoration: underline;
			}
		}
	}
`;
