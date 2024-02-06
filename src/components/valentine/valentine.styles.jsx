import {styled} from "styled-components";

export const Valentine = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`

export const GIF = styled.img`
  width: 250px;
`

export const YesNo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`

export const Yes = styled.button`
  background-color: green;
  color: white;
  border: none;
  border-radius: 5px;
  width: 100px;
  padding: 10px 10px;
  font-size: x-large;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    animation-name: bigger;
    animation-duration: 1s;
  }
  
  @keyframes bigger {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`
export const No = styled.button`
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  width: 60px;
  padding: 6px 6px;
  font-size: medium;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    animation-name: smaller;
    animation-duration: 1s;
  }
  @keyframes smaller {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1);
    }
  }
`