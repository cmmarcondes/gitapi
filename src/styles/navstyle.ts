import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const NavBar = styled.div`
width: 100%;
height: 100px;
display: flex;
justify-content: center;
`;

export const LinksWrapper = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
`;

export const Links = styled(Link)`
color: black;
text-decoration: none;
margin: 10px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 22px;
font-weight: bold;
`;