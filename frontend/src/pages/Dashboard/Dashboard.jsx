import { IsAuthentificated } from "components/IsAuthentificated";
import React from "react";

const Dashboard = () => {
  return <IsAuthentificated>Dashboard</IsAuthentificated>;
};

export default Dashboard;
