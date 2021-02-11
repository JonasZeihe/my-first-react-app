import styled from 'styled-components/macro'

export const FancyButton = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
  border: 4px solid palevioletred;
  margin: 0 1em;
  padding: 1em 3em;
  transition: 0.1s all ease-out;
  margin: auto;
  width: 50%;
  padding: 10px;
 
  &:hover {
    background-color: palevioletred;
    color: white;
  }`;



