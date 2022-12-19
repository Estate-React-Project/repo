/* eslint-disable import/no-unresolved */
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { useEffect } from "react";
import RentYearlyMap from "./RentYearlyMap";

const { kakao } = window;
function Kakao() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      {/* <SearchPlace /> */}
      {/* <MapContainer /> */}
      <RentYearlyMap />
    </DashboardLayout>
  );
}

export default Kakao;
