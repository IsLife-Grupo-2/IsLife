import logo from "../../assets/img/logo.png";

import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { useState } from "react";

import { StyledHeader, StyledMenuMobile } from "./styles";
import { useHistory } from "react-router-dom";

function HeaderPatient() {
  const [isActiveMenuMobile, setIsActiveMenuMobile] = useState(false);

  const history = useHistory();

  const displayMenuMobile = () => {
    setIsActiveMenuMobile(!isActiveMenuMobile);
  };

  return (
    <>
      <StyledHeader>
        <div>
          <img src={logo} alt="Logo do site IsLife" />
        </div>

        <nav className="Menu">
          <div className="Menu__Desktop">
            <button onClick={() => history.push("/")}>Home</button>
            <button onClick={() => history.push("/receitas")}>Receitas</button>
            <button onClick={() => history.push("/consultas")}>
              Consultas
            </button>
            <button onClick={() => history.push("/rotinas")}>
              Minha Rotina
            </button>
          </div>

          <div className="Menu__Mobile--icon">
            {isActiveMenuMobile === true ? (
              <FiMenu
                onClick={displayMenuMobile}
                style={{ fontSize: "32px" }}
              />
            ) : (
              <MdClose
                onClick={displayMenuMobile}
                style={{ fontSize: "30px" }}
              />
            )}
          </div>

          <StyledMenuMobile
            className="Menu__Mobile"
            Display={isActiveMenuMobile === false ? "block" : "none"}
          >
            <ul className={isActiveMenuMobile ? "Menu--Hidden" : "Menu"}>
              <div className="UserInformation">
                <div className="User__Info">
                  <section> avatar </section>
                  <h3>Leomar P.</h3>
                </div>

                <div>
                  <button className="Menu__Mobile--Btn"> Sair </button>
                </div>
              </div>

              <li>Home</li>
              <li>Receitas</li>
              <li>Consultas</li>
              <li>Minha Rotina</li>
            </ul>
          </StyledMenuMobile>
        </nav>
      </StyledHeader>
    </>
  );
}

export default HeaderPatient;
