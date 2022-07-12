import styled from "styled-components";

export const ContainerList = styled.li`
  background: white;
  width: 100%;
  height: 60px;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-left: 5px solid green;
  box-shadow: 0px 0px 4px grey;

  p {
    font-size: 18px;
  }
 /*  @media (max-width: 980px) {
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 150px;
  }
  */

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    height: 100px;
    padding: .3rem 0;

  } 
`;
