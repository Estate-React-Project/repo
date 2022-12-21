/* eslint-disable */
import { useEffect, useState } from "react";
import { Map, MapMarker, MapTypeId } from "react-kakao-maps-sdk";
// eslint-disable-next-line import/no-unresolved
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import MDBox from "components/MDBox";

function RealDealerMap() {
  const [keyword, setKeyword] = useState("");
  const [positions, setPositions] = useState([]);

  const changeHandler = (e) => {
    setKeyword(e.target.value);
  };

  const clickHandler = (e) => {
    // eslint-disable-next-line no-use-before-define
    searchAndShowPlaces();
    setKeyword("");
  };

  const { kakao } = window;
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();

  const searchAndShowPlaces = () => {
    if (!map) return;

    const ps = new kakao.maps.services.Places();
    ps.keywordSearch(keyword, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();
        // eslint-disable-next-line no-shadow
        const markers = [];
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < data.length; i++) {
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);

        map.setBounds(bounds);
      }
    });
  };

  useEffect(() => {
    searchAndShowPlaces();
  }, [map]);
  const [mapTypeId, setMapTypeId] = useState();
  return (
    <MDBox>
      <br />
      <hr />
      <br />
      <div style={{textAlign: "center"}}>
        <MDInput
          style={{
            width: "700px",
          }}
          type="text"
          value={keyword}
          onChange={changeHandler}
          variant="outlined"
          label="찾으실 중개업소의 주소 또는 원하시는 키워드를 입력하세요 (서울시전역만 해당)"
        />&nbsp;
        <MDButton onClick={clickHandler} variant="outlined" color="info">
        찾아보기
      </MDButton>
      </div>
      <br />
      <hr />
      <br />
      <MDButton
        color="success"
        onClick={() => {
          setMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
        }}
      >
        교통정보
      </MDButton>
      <MDButton
        color="success"
        onClick={() => {
          setMapTypeId(kakao.maps.MapTypeId.ROADVIEW);
        }}
      >
        로드뷰 도로정보
      </MDButton>
      <MDButton
        color="success"
        onClick={() => {
          setMapTypeId(kakao.maps.MapTypeId.TERRAIN);
        }}
      >
        지형정보
      </MDButton>
      <MDButton
        color="success"
        onClick={() => {
          setMapTypeId(kakao.maps.MapTypeId.USE_DISTRICT);
        }}
      >
        지적편집도
      </MDButton>
      <br />
      <hr />
      <Map // 로드뷰를 표시할 Container
        center={{
          lat: 37.507454314288054,
          lng: 127.03402073986199,
        }}
        style={{
          width: "100%",
          height: "600px",
        }}
        level={8}
        onCreate={setMap}
      >
        {markers.map((marker) => (
          <MapMarker
            key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
            position={marker.position}
            onClick={() => setInfo(marker)}
          >
            {info && info.content === marker.content && (
              <div style={{ color: "#000" }}>{marker.content}</div>
            )}
          </MapMarker>
        ))}
        {mapTypeId && <MapTypeId type={mapTypeId} />}
      </Map>
      <br />
      <hr />
    </MDBox>
  );
}

export default RealDealerMap;
