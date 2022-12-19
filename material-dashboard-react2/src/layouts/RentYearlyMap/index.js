import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import React, { useEffect } from "react";
import RentMap from "./RentMap";

const { kakao } = window;
function Kakao() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      {/* <SearchPlace /> */}
      {/* <MapContainer /> */}
      <RentMap />
    </DashboardLayout>
  );
}

export default Kakao;
