import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Holidays from './components/holidays/Holidays';
import NotFound from './components/notFound/NotFound';
import LoginForm from './components/login/Login';

function App() {

  const [employees, setEmployees] = useState();
  const [employee, setEmployee] = useState();
  const [holidays, setHolidays] = useState();

  const getEmployees = async () => {
    try {
      // I can do better validation here, checking for http response status
      const response = await api.get("/api/v1/employees");

      // Logging to the console
      console.log(response.data);

      setEmployees(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const getEmployeeData = async (employeeId) => {
    try {
      const response = await api.get('/api/v1/employees/${employeeId}');
      const singleEmployee = response.data;
      setEmployee(singleEmployee);
      setHolidays(singleEmployee.holidays);
    } catch (error) {
      console.log(error);
    }
  }

  // This hook executes when app first load
  useEffect(() => {
    getEmployees();
  },[])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home employees={employees} />} />
          <Route path="/Holidays/:holidayId" element={<Holidays getEmployeeData ={getEmployeeData} employee={employee} holidays={holidays} setHolidays={setHolidays} />}></Route>
          {/* <Route path="/Login" element={Login}></Route> */}
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
