import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { colours } from "../../values/Colours";
//import { AccountCircleIcon } from '@material-ui/icons/AccountCircle';

export const Container = styled.nav`
	display: flex;
    background: rgb(236, 230, 248);
    height: 70px;
	top: 0;
	position: fixed;
	width: 100%;
`;

export const MenuContainer = styled.div`
	display: flex;
	justify-content: space-between;
	height: 100%;
	width: 100%;
	padding: 0 15rem;
`;


export const NavLogo = styled(LinkR)`
    display: flex;
	cursor: pointer;
	font-size: 28px;
	font-weight: bolder;
	text-decoration: none;
	justify-content: flex-start;
	align-self: center;
	margin: 0 auto;
	color: ${colours.GRAY2};
	z-index: 10 !important;
	position: sticky !important;
	height: 50px;

	&:hover {
		height: 45px;

	}
`;

export const MenuBtn = styled.nav`
	display: flex;
	align-items: flex-start;
	margin-left: 0
`;


