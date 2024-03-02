import styled from "styled-components";

export const SearchBar = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 999;

  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #b5c0d0;
  box-shadow: 1px 3px 4px #ccd3ca;
`;

export const SerchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 55%;
  background-color: #f5e8dd;

  border-radius: 10px;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  padding: 10px 5px;

  background-color: transparent;
  color: #265073;
  font-size: 14px;
  font-weight: normal;
`;

export const SearchBtn = styled.button`
  border: none;
  outline: none;
  background-color: #ccd3ca;
  padding: 10px 10px;

  cursor: pointer;
  color: #265073;
  transition: all 250ms ease;
  font-weight: 700;
  border-radius: 10px;

  &:hover {
    color: #ccd3ca;
    background-color: #265073;
  }
`;

export const SerchFormBtnLabel = styled.span`
  font-size: 18px;
`;
