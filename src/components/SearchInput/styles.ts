import styled from 'styled-components';
import { Search } from '../../styles/Icons'

export const SearchCamp = styled.input`
  width: 35%;
  height: 60px;
  border: solid 1px white;
  border-radius: 10px 0 0 10px;
  padding: 0 10px 0 52px;
  outline: 0;
  z-index: 2;
  margin-bottom: 80px;
  margin-top: 80px;

  &:focus {
      border: 1px solid var(--twitter);

  }

  &::placeholder {
      color: gray;
  }
`
export const Icon = styled.div`
  height: 60px;
  width: 60px;
  background: gray;
  z-index: 2;

  position: relative;
  bottom: 1025px;
  left: 410px;

  border-radius: 0 10px 10px 0;
`

export const SearchIcon = styled(Search)`
  width: 25px;
  height: 25px;

  fill: cyan;
  cursor: pointer;
  z-index: 2;

  margin: 17px;

  &:hover {
    fill: red;
  }
`; 