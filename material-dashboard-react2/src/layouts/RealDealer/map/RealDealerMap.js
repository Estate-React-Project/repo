/* eslint-disable */
import { useEffect, useState } from "react";
import { Map, MapMarker, MapTypeId} from "react-kakao-maps-sdk";
import { Stack } from "@mui/system";
// eslint-disable-next-line import/no-unresolved
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import MDBox from "components/MDBox";

function RealDealerMap({ setSggNm }) {
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
  const [mapTypeId, setMapTypeId] = useState();

  const [mousePosition, setMousePosition] = useState({
    lat: 0,
    lng: 0,
  });

  return (
    <MDBox>
      <br />
      <MDButton
        color="success"
        onClick={() => {
          setMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
        }}
      >
        ????????????
      </MDButton>
      <MDButton
        color="success"
        onClick={() => {
          setMapTypeId(kakao.maps.MapTypeId.ROADVIEW);
        }}
      >
        ????????? ????????????
      </MDButton>
      <MDButton
        color="success"
        onClick={() => {
          setMapTypeId(kakao.maps.MapTypeId.TERRAIN);
        }}
      >
        ????????????
      </MDButton>
      <MDButton
        color="success"
        onClick={() => {
          setMapTypeId(kakao.maps.MapTypeId.USE_DISTRICT);
        }}
      >
        ???????????????
      </MDButton>
      <br />
      <hr />
      <Map // ???????????? ????????? Container
          id="map"
          center={{
            // ????????? ????????????
            lat: 37.566826,
            lng: 126.9786567,
          }}
          style={{
            // ????????? ??????
            width: "100%",
            height: "500px",
          }}
          level={6} // ????????? ?????? ??????
          onMouseMove={(_map, mouseEvent) =>
            setMousePosition({
              lat: mouseEvent.latLng.getLat(),
              lng: mouseEvent.latLng.getLng(),
            })
          }
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
      <hr />
      <br />
      {/* <Stack>
        <MDInput
          type="text"
          value={keyword}
          onChange={changeHandler}
          variant="outlined"
          label="????????? ??????????????? ?????? ?????? ???????????? ???????????? ??????????????? (?????????????????? ??????)"
        />
        <MDButton onClick={clickHandler} variant="outlined" color="success">
        ?????? ????????? ????????????
        </MDButton>
      </Stack> */}
    </MDBox>
  );
}

export default RealDealerMap;
