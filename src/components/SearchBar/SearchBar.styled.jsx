import styled from 'styled-components';

export const StyledSearchBar = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  color: #fff;
  background-color: #2a3780;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
  form {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
  }
  button {
    display: inline-block;
    width: 48px;
    height: 48px;
    border: 0;
    background-color: rgb(236, 234, 234);
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
  }
  input {
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 10px;
    padding-right: 4px;
    padding-bottom: 3px;
    ::placeholder {
      font: inherit;
      font-size: 18px;
    }
  }
`;

// export const StyledSearchBarIcon = styled.div`
//   fill: rgb(143, 140, 140);
//   height: 30px;
//   width: 30px;
//   :hover {
//     transform: scale(1.3);
//     fill: rgb(116, 112, 112);
//   }
// `;
