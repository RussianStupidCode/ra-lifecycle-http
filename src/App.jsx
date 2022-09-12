import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ROUTER_PATH } from "./helpers/path";
import MainLayout from "./layouts/main";
import ClockApp from "./components/UI/clocks/clockApp";
import Notes from "./components/UI/crud/notes";

function App() {
  return (
    <Routes>
      <Route path="" element={<MainLayout />}>
        <Route
          path={ROUTER_PATH.base}
          element={<Navigate replace to={ROUTER_PATH.clocks} />}
        />
        <Route path={ROUTER_PATH.clocks} element={<ClockApp />} />
        <Route path={ROUTER_PATH.notes} element={<Notes />} />
      </Route>
    </Routes>
  );
}

export default App;
