import styled, {keyframes} from "styled-components";

const anima = keyframes`
from{
 opacity: 0;
  transform: translateX(100px);
}

to{
 opacity: 1;
  transform: translateX(0px);
}
`


export const Logo = styled.header`
  position: relative;
  top: -100px;
  right: 60px;

  img {
    width: 375px;
    height: 350px;
  }

  @media screen and (min-width: 768px) {
    top: -110px;
    left: 130px;

    img {
      width: 600px;
      height: 450px;
    }
  }

  @media screen and (min-width: 1024px) {
    top: -60px;
    left: 50px;

    img {
      width: 381px;
      height: 350px;
    }
  }

  @media screen and (min-width: 1280px) {
    top: -50px;
    left: 30px;
  }

  img {
    width: 500px;
  }
`;

export const Container = styled.main`
  padding: 25px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 55px;

  img {
    width: 375px;
    height: 200px;
    position: absolute;
    top: 150px;
    border-radius: 60px;
  }

  button {
    width: 320px;
    height: 65px;
    background-color: #ce2d5d;
    font-weight: 700;
    font-size: 1.7rem;
    color: #ffffff;
    border: none;
    margin-top: 10px;
    margin-left: 28px;
    border-radius: 30px;
    transition: 0.6s;
    margin-top: 16px;
    margin-bottom: 16px;
  }
  & button:hover {
    background-color: #e21955;
    font-size: 1.85rem;
  }

  @media screen and (min-width: 768px) {
    img {
      width: 760px;
      height: 350px;
      top: 220px;
    }

    button {
      margin-left: 10px;
      margin-right: 10px;
    }
  }

  @media screen and (min-width: 1024px) {
    img {
      width: 540px;
      height: 404px;
      position: absolute;
      top: 105px;
      right: 8px;
    }

    button {
      width: 201px;
      height: 47px;
      font-size: 1.188rem;
      margin-left: 5px;
    }
    & button:hover {
      font-size: 1.25rem;
    }

    @media screen and (min-width: 1280px) {
      display: flex;
      justify-content: space-between;

      img {
        width: 705px;
        height: 474px;
        top: 87px;
        right: 20px;
        position: absolute;
      }

      button {
        margin-left: 5px;
      }
    }
  }
`;

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  top: 10px;
  margin-bottom: 30px;
  margin-right: 28px;
  gap: 16px;

  h1 {
    font-size: 2.2rem;
    font-weight: 700;
    line-height: 50px;
  }

  h2 {
    font-size: 3.5rem;
    font-weight: 700;
    margin-top: 10px;
  }

  p {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 33px;
    margin: 10px 0 20px 0;
    padding: 0 28px 0 70px;
    text-align: center;
  }
  .typewr {
    height: 120px;
    margin-top: 25px;
    margin-bottom: 25px;
    font-size: 25px;
    line-height: 35px;
    font-family: "Edu SA Beginner", cursive;
  }

  .divBtnMedPac{

    button{
      border-radius: 5px;
      font-weight: 300;
      background-color: white;
      color:#CE2D5D;
      border: 1px solid #CE2D5D;
      font-family: "Inter";

      :hover{
      background-color: #CE2D5D;
      color:white;
      border: 1px solid #CE2D5D;

      }
    }
  }

  @media screen and (min-width: 768px) {
    top: 160px;
    margin-bottom: 230px;
    width: 768px;
    .typewr {
    }
  }

  @media screen and (min-width: 1024px) {
    top: -160px;
    right: 40px;
    width: 580px;
    h1 {
      font-size: 2.3rem;
    }

    h2 {
      font-size: 3.2rem;
      margin-top: 10px;
    }

    p {
      font-size: 1.229rem;
      line-height: 33px;
      margin: 10px 0 10px 12px;
      text-align: start;
    }
  }

  @media screen and (min-width: 1280px) {
    top: -110px;
    right: 10px;

    p {
      font-size: 1.4rem;
      margin-top: 10px;
    }
  }
`;

export const DivImgWelcome = styled.div`
img{
  margin-top: 64px;
  animation: ${anima} 1s;
}

`

export const Footer = styled.footer`
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  h3 {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 33px;
    padding-bottom: 16.5px;
    padding-left: 60px;
    padding-right: 28px;
  }

  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding-top: 32px;
    border-top: 1px solid #000000;
  }

  .ul-container {
    display: flex;
    justify-content: flex-start;
    gap: 55px;
    padding: 16px;
  }

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 310px;
    height: 300px;
    background-color: #d9d9d9;
    border-radius: 10px;
    margin-top: 16px;
  }

  img {
    border-radius: 50%;
    margin: 25px 0 16px 0;
  }

  h2 {
    font-weight: 700;
    font-size: 1.875rem;
    line-height: 36px;
    margin-bottom: 12px;
  }

  h4 {
    font-weight: 600;
    font-size: 1.875rem;
    line-height: 36px;
    margin-bottom: 16px;
  }

  p {
    font-weight: 500;
    font-size: 1.25rem;
    line-height: 24px;
    padding: 0 50px 0 50px;
  }

  .icons {
    cursor: pointer;
    margin-top: 20px;
  }

  .github {
    width: 40px;
    height: 40px;
    padding: 10px;
    transition: 0.8s;
    color: #000000;
  }
  & .github:hover {
    width: 50px;
    height: 50px;
  }

  .linkedin {
    width: 40px;
    height: 40px;
    padding: 10px;
    transition: 0.8s;
    color: #000000;
  }
  & .linkedin:hover {
    width: 50px;
    height: 50px;
  }

  .instagram {
    width: 40px;
    height: 40px;
    padding: 10px;
    transition: 0.8s;
  }
  & .instagram:hover {
    width: 50px;
    height: 50px;
  }

  @media screen and (min-width: 768px) {
    h3 {
      padding-left: 28px;
    }

    ul {
      padding-top: 5px;
    }

    li {
      width: 310px;
      height: 320px;
    }

    .icons {
      cursor: pointer;
      margin-top: 7px;
    }
  }

  @media screen and (min-width: 1024px) {
    margin-top: -250px;

    h3 {
      font-size: 2rem;
    }

    ul {
      padding-top: 32px;
    }

    li {
      width: 265px;
      height: 320px;
      padding: 10px;
    }

    p {
      font-weight: 500;
      font-size: 1.18rem;
      line-height: 22px;
      padding: 0 20px 0 20px;
      text-align: center;
    }

    .icons {
      margin-top: 10px;
    }
  }

  @media screen and (min-width: 1280px) {
    h3 {
      margin-left: 40px;
    }

    li {
      width: 265px;
      height: 320px;
    }

    .icons {
      margin-top: 30px;
    }
  }
`;
