import styled from "styled-components";

export const LeftWrapper = styled.div`
	flex: 1;
	display: flex;
	color: ${(props) => props.theme.color.primaryColor};
	align-items: center;
	.logo {
		margin-left: 25px;
		cursor: pointer;
	}
`;
