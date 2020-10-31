import { Link } from 'react-router-dom';
import styled from 'styled-components';


interface Props {
    public: string;
}
export const TextBox = styled.h1`
color: ${(props: Props) => props.public ? 'gray' : 'black'};
text-decoration: none;
margin: 10px;
width: 400px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 22px;
font-weight: lighter;
display: flex;
align-content: center;
justify-content: center;
`;

export const RepoBox = styled.div`
display: flex;
flex-direction: column;
padding: 20px;
flex-wrap: wrap;
background-color: white;
margin-right: 40px;
justify-content: space-around;
align-items: center;
box-shadow: 0px 0px 5px 2px lightgray;
border-radius: 6px;
`;

export const UserAvatar = styled.div`
border-radius: 500px;
width: auto;
height: auto;
background-color: black;
overflow: hidden;
border: 6px solid black;
`;

export const Source = styled(Link) `
width: 30px;
display: flex;
justify-content: center;
padding: 5px;
align-items: center;
`;