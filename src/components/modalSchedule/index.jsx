import {DivGlobalModalShedule,DivFormModal,DivHeaderForm, ButtonSchedule,Form} from "./style"
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup"
import { api } from "../../services/api.js";
import { useEffect, useState } from "react";

function  ModalSchedule({showModal,setShowModal}){

    const newToken= JSON.parse(localStorage.getItem("token"))

    const [idUser, setIdUser] = useState(null)
    const [arrPatientDoc, setArrPatientDoc] = useState([])

 
    const schema = yup.object().shape({
        nome: yup.string().required("campo obrigatório"),
        horarioConsulta: yup.string().required("Campo obrigatório"),
        dataConsulta: yup.string().required("Campo Obirgatório"),
        modo:yup.string().required("Campo Obirgatório"),
    })

    const {register, handleSubmit, formState:{errors},} = useForm(
       { resolver: yupResolver(schema)} 
        );

        useEffect(()=>{
            api.get(`/users?doctorId=${newToken.user.id}`, 
            {
                headers: {"Authorization": `Bearer ${newToken.accessToken}`
            }})
            .then((response)=>setArrPatientDoc(response.data))
        
        },[])


    const onSubmitFunction = (data)=>{   

    arrPatientDoc.map((item)=> item.name === data.nome ? setIdUser(item.id) : null)

    const objData = {
        nome: data.nome,
        dataConsulta: data.dataConsulta,
        horarioConsulta:data.horarioConsulta,
        modo: data.modo,
        userId: newToken.user.id,
        IdPatient: idUser
    }
   
    api.post("/consultas", objData, {
        headers: {"Authorization": `Bearer ${newToken.accessToken}`}})
    .then(response =>{
        setShowModal(false)
    })
}
    return(
    
    <DivGlobalModalShedule>
        <DivFormModal>

            <DivHeaderForm>
                <h3>Agendamento de Consulta</h3>
                <button onClick={()=> setShowModal(false)}>X</button>
            </DivHeaderForm>

            <Form onSubmit={handleSubmit(onSubmitFunction)}>


                <select
                    className="selectPatient"
                    {...register("nome")} 
                    name = "nome">
                    <option>Selecione um Paciente</option>
                    {arrPatientDoc.map((element)=><option value={element.name} key = {element.id}>{element.name}</option>)}
                </select>

                <input type="text" placeholder="tipo da consulta: Ex: presencial" 
                       {...register("modo")}
                       name = "modo"/>

                 <div className="divPicker">
                    
                    <div className="divPickerData">
                        <label>Data</label>
                        <input 
                          type= "date"
                          className= "datepicker"
                          placeholder = "Ex: 10/08/2022"
                          {...register("dataConsulta")} 
                          name = "dataConsulta"/>
                    </div>

                    <div className="divPickerHora">
                        <label>Hora</label>
                        <input type="text" 
                               placeholder="Ex: 16:00"
                               {...register("horarioConsulta")}
                               name= "horarioConsulta"/>
                    </div>
                </div>
                <ButtonSchedule type="submit">Agendar Consulta</ButtonSchedule>
            </Form>


        </DivFormModal>
    </DivGlobalModalShedule>
    
    
    )
}

export default ModalSchedule;