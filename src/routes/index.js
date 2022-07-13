import { Switch, BrowserRouter, Route } from "react-router-dom";
import HeaderDoctor from "../components/Header";
import HeaderPatient from "../components/HeaderPatient";

import AuthDoctor from "../pages/AuthDoctor";
import AuthPatient from "../pages/AuthPatient";
import DashDoctor from "../pages/DashDoctor";

import DayShare from "../pages/PatientDayShare";



import DoctorPatient from "../pages/DoctorPatient";
import DoctorSchedule from "../pages/DoctorSchedule";
import Home from "../pages/Home";
import HomeDoctor from "../pages/HomeDoctor";
import HomePatient from "../pages/HomePatient";

import ListConsultPatient from "../components/ListConsultPatient/index"


import PatientRoutine from "../pages/PatientRoutine";


const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {" "}
          <Home />{" "}
        </Route>
        <Route path="/home/doctor">
          {" "}
          <HomeDoctor />{" "}
        </Route>
        <Route path="/home/patient">
          {" "}
          <HomePatient />
        </Route>
        <Route path="/register/doctor">
          {" "}
          <AuthDoctor />{" "}
        </Route>
        <Route path="/login">
          <AuthPatient />
        </Route>
        <Route path="/dashdoctor">
          <HeaderDoctor />
          <DashDoctor />
        </Route>
        <Route path="/doctorschedule">
          <HeaderDoctor />
          <DoctorSchedule />
        </Route>
        <Route path="/doctorpatient">
          <HeaderDoctor />
          <DoctorPatient />
        </Route>
    

        {/* Rotas do Paciente */}
        <Route path={"/dashpatient"}>
          <HeaderPatient />
          <DayShare />
        </Route>

        <Route path={"/rotinas"}>
          <HeaderPatient />
          <PatientRoutine />
        </Route>

        <Route exact path="/receitas">
     
        </Route>

        <Route exact path= "/consultas">
          <ListConsultPatient/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
