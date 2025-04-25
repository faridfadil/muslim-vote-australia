import React, { Suspense } from "react";
import { Routes, Route, useRoutes } from "react-router-dom";
import HomePage from "./components/home";
import ReportsPage from "./pages/reports";
import PartyReportPage from "./pages/reports/party";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/reports/:partyId" element={<PartyReportPage />} />
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
