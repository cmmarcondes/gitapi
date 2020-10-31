import styled from 'styled-components';

export const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: auto;
margin: 0;
padding: 0;
`;

export const DetailsSection = styled.div`
width: 90vw;
height: auto;
display: flex;
flex-direction: row;
padding: 30px;
overflow-x: auto;
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #303033;
  border: 0px none #d6d6d6;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  background: #000000;
}
::-webkit-scrollbar-thumb:active {
  background: #d6d6d6;
}
::-webkit-scrollbar-track {
  background: #d6d6d6;
  border: 0px none #ffffff;
  border-radius: 75px;
}
::-webkit-scrollbar-track:hover {
  background: #d6d6d6;
}
::-webkit-scrollbar-track:active {
  background: #d6d6d6;
}
::-webkit-scrollbar-corner {
  background: transparent;
}
`;

export const ContainerSection = styled.div`
width: 100%;
height: 100vh;
display: flex;
background-color: #041F1E;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 30px;
`;

export const AvatarSection = styled.div`
width: 100%;
height: auto;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 30px;
`;