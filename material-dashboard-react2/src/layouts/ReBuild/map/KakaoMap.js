/* eslint-disable import/no-unresolved */
/* eslint-disable no-plusplus */
/* eslint-disable no-redeclare */
/* eslint-disable react/prop-types */
/* eslint-disable no-var */
/* eslint-disable eqeqeq */
/* eslint-disable vars-on-top */
/* eslint-disable no-use-before-define */
/* eslint-disable block-scoped-var */
// 샘플용도의 파일입니다.

import React, { useRef, useEffect, useState } from "react";
import "./KakaoMap.css";

function KakaoMap({ value, count }) {
  /*
  const markerPosition  = new window.kakao.maps.LatLng(33.450701, 126.570667); // 내가 표현하고자 하는 위치의 마커가 표시될 위치
  const marker = new window.kakao.maps.Marker({
    position : markerPosition
  });
  */

  /*
  마커가 표시 될 위치인 markerPosition 변수에 WGS84 좌표 정보를 가지고 있는 객체를 생성하는 new kakao.maps.LatLng 를 사용하여 위치(위,경도)를 담아준 뒤에,
  마커를 만들 변수인 marker에 마커를 생성하는 new kakao.maps.Marker 안에 position이라는 키를 사용하는 객체로 markerPosition를 넣어줍니다.
  */

  if (count == 0) {
    var statement = "검색하실 장소를 입력해주세요 :-)";
  } else {
    var statement = `검색하신 장소는 ${value} 입니다 :-)`;
  }

  const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 }); // 인포윈도우 변수 선언
  const container = useRef(null); // 지도에 담을 DOM 레퍼런스
  const mapOption = {
    // 지도를 생성할 때 필요한 기본 옵션
    center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
    level: 2, // 지도의 확대 레벨
  };

  useEffect(() => {
    // 마운트 될 때 한 번 실행
    // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
    const map = new window.kakao.maps.Map(container.current, mapOption); // 지도를 생성해주고, 객체를 리턴합니다.
    // marker.setMap(map); // setMap 메소드를 사용하여 우리가 만든 카카오맵인 map 변수를 안에 담아줍니다.

    function placesSearchCB(data, status, pagination) {
      if (status === window.kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new window.kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
        }
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
        // map.setDraggable(false);
      }
    }

    function displayMarker(place) {
      // 마커를 생성하고 지도에 표시합니다
      const marker = new window.kakao.maps.Marker({
        map,
        position: new window.kakao.maps.LatLng(place.y, place.x),
      });

      // 마커에 클릭이벤트를 등록합니다
      window.kakao.maps.event.addListener(marker, "click", () => {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent(`<div style="padding:5px;font-size:12px;">${place.place_name}</div>`);
        infowindow.open(map, marker);
      });
    }

    const ps = new window.kakao.maps.services.Places();
    ps.keywordSearch(value, placesSearchCB);

    return () => {}; // 객체 리턴
  }, [value]); // 벨류 값이 변경 될 때 렌더링

  return (
    <>
      <div
        className="map"
        style={{ width: "1250px", height: "500px", margin: "20px" }}
        ref={container}
      />
      <p className="system_message">{statement}</p>
    </>
  );
}

export default KakaoMap;
