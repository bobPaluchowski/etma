import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';

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
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
