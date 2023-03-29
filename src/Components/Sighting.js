import { useState, useEffect } from "react";

import Card from "react-bootstrap/Card";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../Constants";

export default function Sighting(props) {
  const [sightingInfo, setSightingInfo] = useState(props);
  let { sightingId } = useParams();
  const [sightingIndex, setSightingIndex] = useState(sightingId);

  const getFilteredInformation = async () => {
    let data = await axios.get(`${BACKEND_URL}/sightings/${sightingIndex}`);
    setSightingInfo(data.data);
  };
  useEffect(() => {
    getFilteredInformation();
  }, []);

  return (
    <div>
      <Card style={{ width: "25rem" }}>
        <Card.Body>
          <Card.Title>Report Number {sightingInfo.REPORT_NUMBER}</Card.Title>{" "}
          <Card.Text>Environment :{sightingInfo.ENVIRONMENT}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
