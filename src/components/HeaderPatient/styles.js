import styled from "styled-components";

export const StyledHeader = styled.header`
  position: relative;
  min-height: 60px;
  max-height: 62px;
  height: 7vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 4%;
  box-shadow: 1px -3px 10px #3333;

  .buttonImg {
    background-color: transparent;
    width: 0rem;
    height: 0rem;
    margin-top: -1rem;
  }

  img {
    height: 50px;
    background-color: #ffffff;
    padding: 0 1rem;
    border-radius: 55%;
  }

  .Menu {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .Menu__Mobile {
    width: 0;

    position: absolute;

    top: 66px;
    right: 0;
    background-color: #d21;
  }

  .Menu__Mobile {
    width: 75%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    text-align: center;

    position: fixed;

    top: 66px;
    right: 0;
    background-color: rgba(206, 45, 93, 75);
  }

  .List__Menu {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    gap: 3rem;

    margin-top: 100px;
  }

  .Menu__Desktop {
    display: flex;
    justify-content: space-around;
    width: 350px;
    .btn-header--patient {
      width: 100px;
      height: 30px;
      border-radius: 8px;
    }
  }

  @media only screen and (max-width: 800px) {
    .Menu__Desktop {
      display: none;
    }
  }

  @media only screen and (min-width: 801px) {
    .Menu__Mobile {
      display: none;
    }
    .Menu__Mobile--icon {
      display: none;
    }
  }
`;

export const UserInformation = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2px 3%;
  width: 100%;

  background-color: aqua;

  .User__Info {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  section {
    display: flex;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    background-color: #dad121;
  }
`;

export const StyledMenuMobile = styled.div`
  display: ${(props) => props.Display || "none"};
  width: 0;
  height: 0;
  top: 66px;
  right: 0;
  border-bottom-right-radius: 170%;
  transition: 0.6s ease-in;
  z-index: 9999;
  visibility: hidden;

  .UserInformation {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px 3%;

    background-color: rgba(0, 0, 0, 0.1);

    box-shadow: 1px -2px 5px #3333 inset;

    section {
      display: flex;
      align-items: center;
      width: 50px;
      height: 50px;
      border-radius: 50px;
      background-color: #f1f1ff;
    }

    .User__Info {
      display: flex;
      align-items: center;
      gap: 1rem;

      h3 {
        color: #f1f1ff;
      }
    }

    .Menu__Mobile--Btn {
      margin-right: 1.8rem;

      font-weight: 600;
      color: #ce2d5d;

      border: none;
      background-color: #f1f1ff;
    }
  }

  .Menu {
    display: block;
    position: fixed;
    width: 0;
    height: 0;
    top: 66px;
    right: 0;
    /* border-bottom-right-radius: 170%; */
    transition: 0.6s ease-in;
    z-index: 9999;
    overflow-y: auto;
    visibility: hidden;
    background-color: #ce2d5d;
  }

  .Menu {
    visibility: visible;
    width: 70%;
    min-width: 280px;
    height: calc(100vh - 60px);
  }

  .Menu li {
    margin-top: 45px;
    margin-left: 1em;
    padding: 0.6em 0;
    text-align: center;
  }

  .Menu li a {
    font-size: 1.3em;
    padding-bottom: 0.6em;
    border-bottom: #e4e1e1 solid;
  }

  @media screen and (max-width: 800px) {
  }
`;
