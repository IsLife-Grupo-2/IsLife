import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";
import logo from "../../img/islife.png";
import { useHistory } from "react-router-dom";
import { DivElems, FormElem, DivGlobalRegister } from "./style";
import { DivVoltar } from "./style";
import IsAuth from "../../components/Roules/IsAuth";
import { toast } from "react-toastify";

function AuthDoctor() {
  const schema = yup.object().shape({
    name: yup.string().required("Adicione valores válidos"),
    cpf: yup.string().required("CPF Inválido"),
    email: yup.string().required("campo obrigatório").email("e-mail inválido!"),
    password: yup
      .string()
      .min(6, "mínino de 6 dígitos")
      .required("campo obrigatório"),
    confirmPassword: yup
      .string()
      .required("confirmação obrigatória")
      .oneOf([yup.ref("password")], "senha desigual!"),
    telefone: yup.string().required("informe o seu telefone"),
    profissão: yup.string().required("selecione um dos campos"),
    crm: yup.string().required("documentação obrigatória"),
  });

  const history = useHistory();

  function goToLogin() {
    history.push("/login");


  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendDates = (info) => {
    const dates = {
      name: info.name,
      age: info.age,
      cpf: info.cpf,
      telefone: info.telefone,
      email: info.email,
      password: info.password,
      type: "doctor",
      crm: info.crm,
      profissão: info.profissão,
      cnpj: "00000",
    };

    api
      .post("/register", dates)
      .then((res) => goToLogin())
      .catch((err) => console.log(err));


  };

  if (localStorage.getItem("token") !== null) {
    return <IsAuth />;
  } else {
    return (
      <DivGlobalRegister>
        <DivVoltar>
          <img src={logo} alt={logo}></img>
          <button onClick={() => history.push("/")} className="button">
            Voltar
          </button>
        </DivVoltar>

        <h2>CADASTRO</h2>

        <div className="divGlobalForm">
          <FormElem className="formItem" onSubmit={handleSubmit(sendDates)}>
            {/* <div className="DivElem"> */}

            <DivElems>
              <label>Nome</label>
              <input
                {...register("name")}
                placeholder="Digite aqui seu nome"
                className="label"
              />
              <div className="divError">{errors?.name?.message}</div>
            </DivElems>

            <DivElems>
              <label>Data de nascimento</label>
              <input {...register("age")} type="date" className="label"></input>
              <div className="divError">{errors?.age?.message}</div>
            </DivElems>

            <DivElems>
              <label>CPF</label>
              <input
                placeholder="Digite aqui seu CPF"
                {...register("cpf")}
                className="label"
              ></input>
              <div className="divError">{errors?.cpf?.message}</div>
            </DivElems>

            <DivElems>
              <label>Telefone</label>
              <input
                placeholder="Digite seu telefone"
                {...register("telefone")}
                className="label"
              ></input>
              <div className="divError">{errors?.telefone?.message}</div>
            </DivElems>

            <DivElems>
              <label>E-mail</label>
              <input
                placeholder="Digite aqui seu e-mail"
                {...register("email")}
                className="label"
                required
              ></input>
              <div className="divError">{errors?.email?.message}</div>
            </DivElems>

            <DivElems>
              <label>Senha</label>
              <input
                placeholder="Digite aqui sua senha"
                {...register("password")}
                className="label"
                type="password"
                required
              ></input>
              <div className="divError">{errors?.password?.message}</div>
            </DivElems>

            <DivElems>
              <label>Confirmar sua senha</label>
              <input
                placeholder="Confirme sua senha"
                {...register("confirmPassword")}
                className="label"
                type="password"
              ></input>
              <div className="divError">{errors?.confirmPassword?.message}</div>
            </DivElems>

            <DivElems>
              <label>CRM</label>
              <input
                placeholder="Digite seu CRM"
                {...register("crm")}
                className="label"
              ></input>
              <div className="divError">{errors?.crm?.message}</div>
            </DivElems>

            <DivElems>
              <label>Escolha sua profissão </label>
              <select {...register("profissão")} className="label">
                <option value="selecione">Selecione</option>
                <option value="psicóloga">Psicólogo(a)</option>
                <option value="psiquiatra">Psiquiatra</option>
                <option value="médico">Médico(a)</option>
                <option value="outros">Outros</option>
              </select>
            </DivElems>

            {/* </div> */}

            <DivElems>
              <button type="submit">Cadastrar</button>
            </DivElems>
          </FormElem>
        </div>
      </DivGlobalRegister>
    );
  }
}

export default AuthDoctor;
