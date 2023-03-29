import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../Constants";

export default function Filter() {
  const navigate = useNavigate();
  const [selectValue, setSelectValue] = useState();

  const handleSelectChange = (event) => {
    setSelectValue(event.target.value);
  };

  const onFilterSubmit = (event) => {
    event.preventDefault();
    navigate(selectValue);
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Select a month</Form.Label>{" "}
          <Form.Select
            aria-label="Default select example"
            onChange={handleSelectChange}
          >
            <option>Open this select menu</option>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </Form.Select>{" "}
          <Button variant="primary" type="submit" onClick={onFilterSubmit}>
            Submit
          </Button>
        </Form.Group>
      </Form>

      <Outlet />
    </div>
  );
}
