/* eslint-disable import/no-unresolved */
/* eslint-disable react/button-has-type */
import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
// eslint-disable-next-line import/no-unresolved
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import MDBox from "components/MDBox";

function RentMap() {
  const [keyword, setKeyword] = useState("");

  const changeHandler = (e) => {
    setKeyword(e.target.value);
  };

  const clickHandler = (e) => {
    // eslint-disable-next-line no-use-before-define
    searchAndShowPlaces();
    setKeyword("");
  };

  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      clickHandler();
    }
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

  return (
    <MDBox>
      <MDInput
        type="text"
        value={keyword}
        onChange={changeHandler}
        variant="outlined"
        label="type here"
      />
      <MDButton onClick={clickHandler} variant="outlined" color="info">
        Search
      </MDButton>
      <hr />
      <Map // 로드뷰를 표시할 Container
        center={{
          lat: 37.56509419511322,
          lng: 126.97813208794456,
        }}
        style={{
          width: "100%",
          height: "760px",
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
      </Map>
    </MDBox>
  );
}

export default RentMap;
