import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';

function App() {

  const [employees, setEmployees] = useState();

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

  // This hook executes when app first load
  useEffect(() => {
    getEmployees();
  },[])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
