import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

import React, { useEffect } from "react";

const { kakao } = window;

function Kakao() {
  useEffect(() => {
    const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
    const options = {
      // 지도 생성 기본 옵션
      center: new kakao.maps.LatLng(37.496486063, 127.028361548), // 지도 중심 좌표
      level: 3, // 지도 레벨(확대, 축소 정도)
    };
    const map = new kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
    const markerPosition = new kakao.maps.LatLng(37.496486063, 127.028361548);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div
        id="map"
        style={{
          width: "1600px",
          height: "800px",
        }}
      />
    </DashboardLayout>
  );
}

export default Kakao;
