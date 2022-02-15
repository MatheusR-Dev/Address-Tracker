import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 300px;

  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const BgImage = styled.div`
  width: 100%;
  height: 300px;
  background-image: url(https://images.unsplash.com/photo-1520299607509-dcd935f9a839?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3131&q=80);
  background-position: bottom;
  z-index: 0;
  position: absolute;

  filter: blur(4px);
`

export const Title = styled.h1`
  font-style: 600;
  color: #000000;
  font-family: 'Poppins', sans-serif;

  margin-top: 50px;
  flex-basis: 100%;
  text-align: center;
  height: 10px;
  z-index: 2;
`
