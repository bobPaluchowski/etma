import './Dashboard.css';
import {Link, useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";

const Dashboard = ({employees}) => {

  const navigate = useNavigate();
  function holidays(employeeId) {
    navigate(`/Holidays/${employeeId}`);
  }

  return (
    <div>
      {
        employees?.map((employee) => {
          return(
            <>
            
            <h4 key={employee.empEmail}>{employee.empName}</h4>
            <Button variant="info" onClick={holidays(employee.empEmail)}>Holidays</Button>
            </>
          )
        })
      }
    </div>
  )
}

export default Dashboard 