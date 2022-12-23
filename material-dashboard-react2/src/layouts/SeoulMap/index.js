/* eslint-disable import/no-unresolved */
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { useEffect } from "react";
import SeoulMap from "./SeoulMap";

const { kakao } = window;
function Kakao() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      {/* <SearchPlace /> */}
      {/* <MapContainer /> */}
      <SeoulMap />
    </DashboardLayout>
  );
}

export default Kakao;
