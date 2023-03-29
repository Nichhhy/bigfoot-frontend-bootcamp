import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllSightings from "./Components/AllSightings";
import Sighting from "./Components/Sighting";
import Filter from "./Components/Filters";
import FilterOptions from "./Components/FilterOptions";
import Card from "react-bootstrap/Card";
import FilteredSighting from "./Components/FilteredSighting";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<AllSightings />} />{" "}
        <Route path="sightings/:sightingId" element={<Sighting />} />
        <Route path="filter/" element={<Filter />}>
          <Route path=":month/" element={<FilterOptions />}>
            <Route path=":sightingId" element={<FilteredSighting />} />
          </Route>
        </Route>
        <Route path="*" element={"Wrong path"} />
      </Route>
    </Routes>
  </BrowserRouter>
);
