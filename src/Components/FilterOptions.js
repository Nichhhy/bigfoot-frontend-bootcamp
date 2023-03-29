import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../Constants";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

export default function FilterOptions(props) {
  const [sightingInfo, setSightingInfo] = useState(props);
  let { month } = useParams();
  const [monthInfo, setMonthInfo] = useState([]);
  const navigate = useNavigate();

  const getFilteredInformation = async () => {
    let data = await axios.get(`${BACKEND_URL}/filter/${month}`);
    setMonthInfo(data.data);
  };

  const navigateTo = (index) => {
    const num = index;
    navigate("" + num);
  };

  useEffect(() => {
    getFilteredInformation();
  }, [month]);

  return (
    <div>
      <Outlet />
      {monthInfo.map((item, index) => (
        <Button key={index} onClick={() => navigateTo(index)}>
          Report Number : {item.REPORT_NUMBER}
        </Button>
      ))}
    </div>
  );
}
