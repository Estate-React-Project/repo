/* eslint-disable import/no-unresolved */
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import React, { useEffect } from "react";
import SeoulMap from "./SeoulMap";

const { kakao } = window;
function Kakao() {
  return (
    <DashboardLayout>
      {/* <SearchPlace /> */}
      {/* <MapContainer /> */}
      <SeoulMap />
    </DashboardLayout>
  );
}

export default Kakao;
