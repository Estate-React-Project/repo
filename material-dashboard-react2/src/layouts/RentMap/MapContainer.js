import React, { useEffect } from "react";

const { kakao } = window;

function MapContainer(searchPlace) {
  useEffect(() => {
    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.496486063, 127.028361548),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
    const ps = new kakao.maps.services.Places();

    // 마커를 생성하고 지도에 표시
    function displayMarker(place) {
      // eslint-disable-next-line prefer-const
      let marker = new kakao.maps.Marker({
        map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      // 마커에 클릭 이벤트를 등록
      kakao.maps.event.addListener(marker, "click", () => {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출
        infowindow.setContent(`<div style="padding:5px;font-size:12px;">${place.place_name}</div>`);
        infowindow.open(map, marker);
      });
    }

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();

        for (let i = 0; i < data.length; i += 1) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        map.setBounds(bounds);
      }
    }

    ps.keywordSearch(searchPlace, placesSearchCB);
  }, [searchPlace]);

  return (
    <div
      id="map"
      style={{
        width: "1600px",
        height: "800px",
      }}
    />
  );
}

export default React.memo(MapContainer);
