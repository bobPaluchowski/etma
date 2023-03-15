import { useEffect, useRef } from "react";
import api from '../../api/axiosConfig';
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import HolidayForm from "../holidayForm/HolidayForm";

import React from 'react'

const Holidays = ({getEmployeeData, employee, holidays, setHolidays}) => {

  const holText = useRef();
  let params = useParams();
  const employeeId = params.employeeId;

  useEffect(() => {
    getEmployeeData(employeeId);
  },[])

  const addHoliday = async (e) => {
    e.preventDefault();

    try {
      
          const hol = holText.current;
          const response = await api.post("/api/v1/holidays", {holidayBody:hol.value, empEmail:employeeId});
          const updateHolidays = [...holidays, {body:hol.value}];
          hol.value = "";
          setHolidays(updateHolidays);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <Row>
        <Col><h3>Holidays</h3></Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <div>Holidays</div>
        </Col>
        <Col>
          {
            <>
            <Row>
              <Col>
                <HolidayForm handleSubmit={addHoliday} holText={holText} labelText="Book your holiday..." />
              </Col>
            </Row>
            <Row>
              <Col>
              <hr />
              </Col>
            </Row>
            </>
          }
          {
            holidays?.map((holiday) => {
              return(
                <>
                  <Row>
                    <Col>{holiday.startDate}</Col>
                    {/* <Col>{holiday.endDate}</Col> */}
                  </Row>
                  <Row>
                    <Col>
                      <hr />
                    </Col>
                  </Row>
                </>
              )
            })
          }
        </Col>
      </Row>
    </Container>
  )
}

export default Holidays