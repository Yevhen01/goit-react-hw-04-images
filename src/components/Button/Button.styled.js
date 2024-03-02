import styled from "styled-components";

export const LoadMoreBtn = styled.button`
  border: none;
  outline: none;
  margin: 0 auto;
  padding: 20px;
  width: 150px;
  background-color: #ccd3ca;
  color: #265073;
  font-size: 18px;
  font-weight: 500;
  border-radius: 10px;
  box-shadow: 1px 2px 3px #265073;
  cursor: pointer;
  transition: all 250ms ease;

  &:hover {
    background-color: #265073;
    color: #ccd3ca;
    box-shadow: 2px 3px 4px #ccd3ca;
  }
`;
