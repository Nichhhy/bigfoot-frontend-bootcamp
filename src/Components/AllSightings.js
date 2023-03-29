import { BACKEND_URL } from "../Constants";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

export default function AllSightings() {
  const [infoArr, setInfoArr] = useState([]);
  const navigate = useNavigate();
  const callInfo = async () => {
    let data = await axios.get(`${BACKEND_URL}/sightings/`);
    setInfoArr(data.data);
  };

  const navigateTo = (index) => {
    const num = index;
    navigate("/sightings/" + num);
  };
  useEffect(() => {
    callInfo();
  }, []);

  return (
    <div>
      {infoArr.map((item, index) => (
        <Button key={index} onClick={() => navigateTo(index)}>
          Report Number : {item.REPORT_NUMBER}
        </Button>
      ))}
    </div>
  );
}
