/* eslint-disable */
import { useEffect, useState } from "react";
import { Map, MapMarker, MapTypeId} from "react-kakao-maps-sdk";
import { CustomOverlayMap, Polygon } from "react-kakao-maps-sdk";
// eslint-disable-next-line import/no-unresolved
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import MDBox from "components/MDBox";

function RealDealerMap({ setSggNm }) {
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
      {/* <AddPolygonMouseEvent2Style /> */}
      <Map // 로드뷰를 표시할 Container
          id="map"
          center={{
            // 지도의 중심좌표
            lat: 37.566826,
            lng: 126.9786567,
          }}
          style={{
            // 지도의 크기
            width: "100%",
            height: "600px",
          }}
          level={6} // 지도의 확대 레벨
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
      <div style={{textAlign: "center"}}>
        <MDInput
          style={{
            width: "600px",
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
      <div style={{textAlign: "center"}}>
      <MDButton
      variant="gradient"
      color="light"
      size="medium"
      onClick={() => {
        setSggNm("강남구");
      }}
    >
      강남구
    </MDButton>
    <MDButton
      variant="gradient"
      color="light"
      size="medium"
      onClick={() => {
        setSggNm("강동구");
      }}
    >
      강동구
    </MDButton>
    <MDButton
      variant="gradient"
      color="light"
      size="medium"
      onClick={() => {
        setSggNm("강북구");
      }}
    >
      강북구
    </MDButton>
    <MDButton
      variant="gradient"
      color="light"
      size="medium"
      onClick={() => {
        setSggNm("강서구");
      }}
    >
      강서구
    </MDButton>
    <MDButton
      variant="gradient"
      color="light"
      size="medium"
      onClick={() => {
        setSggNm("관악구");
      }}
    >
      관악구
    </MDButton>
    <MDButton
      variant="gradient"
      color="light"
      size="medium"
      onClick={() => {
        setSggNm("광진구");
      }}
    >
      광진구
    </MDButton>
    <MDButton
      variant="gradient"
      color="light"
      size="medium"
      onClick={() => {
        setSggNm("구로구");
      }}
    >
      구로구
    </MDButton>
    <MDButton
      variant="gradient"
      color="light"
      size="medium"
      onClick={() => {
        setSggNm("금천구");
      }}
    >
      금천구
    </MDButton>
    <MDButton
      variant="gradient"
      color="light"
      size="medium"
      onClick={() => {
        setSggNm("노원구");
      }}
    >
      노원구
    </MDButton>
    <MDButton
      variant="gradient"
      color="light"
      size="medium"
      onClick={() => {
        setSggNm("도봉구");
      }}
    >
      도봉구
    </MDButton>
    <MDButton
      variant="gradient"
      color="light"
      size="medium"
      onClick={() => {
        setSggNm("동작구");
      }}
    >
      동작구
    </MDButton>
    <MDButton
      variant="gradient"
      color="light"
      size="medium"
      onClick={() => {
        setSggNm("마포구");
      }}
    >
      마포구
    </MDButton>
    <MDButton
      variant="gradient"
      color="light"
      size="medium"
      onClick={() => {
        setSggNm("서초구");
      }}
    >
      서초구
    </MDButton>
    <MDButton
      variant="gradient"
      color="light"
      size="medium"
      onClick={() => {
        setSggNm("성동구");
      }}
    >
      성동구
    </MDButton>
    <MDButton
      variant="gradient"
      color="light"
      size="medium"
      onClick={() => {
        setSggNm("성북구");
      }}
    >
      성북구
    </MDButton>
    <MDButton
      variant="gradient"
      color="light"
      size="medium"
      onClick={() => {
        setSggNm("송파구");
      }}
    >
      송파구
    </MDButton>
    <MDButton
      variant="gradient"
      color="light"
      size="medium"
      onClick={() => {
        setSggNm("양천구");
      }}
    >
      양천구
    </MDButton>
    <MDButton
      variant="gradient"
      color="light"
      size="medium"
      onClick={() => {
        setSggNm("용산구");
      }}
    >
      용산구
    </MDButton>
    <MDButton
      variant="gradient"
      color="light"
      size="medium"
      onClick={() => {
        setSggNm("은평구");
      }}
    >
      은평구
    </MDButton>
    <MDButton
      variant="gradient"
      color="light"
      size="medium"
      onClick={() => {
        setSggNm("종로구");
      }}
    >
      종로구
    </MDButton>
    <MDButton
      variant="gradient"
      color="light"
      size="medium"
      onClick={() => {
        setSggNm("중구");
      }}
    >
      중구
    </MDButton>
    <MDButton
      variant="gradient"
      color="light"
      size="medium"
      onClick={() => {
        setSggNm("중랑구");
      }}
    >
      중랑구
    </MDButton>
    <MDButton
      variant="gradient"
      color="light"
      size="medium"
      onClick={() => {
        setSggNm("서대문구");
      }}
    >
      서대문구
    </MDButton>
    <MDButton
      variant="gradient"
      color="light"
      size="medium"
      onClick={() => {
        setSggNm("영등포구");
      }}
    >
      영등포구
    </MDButton>
    <MDButton
      variant="gradient"
      color="light"
      size="medium"
      onClick={() => {
        setSggNm("동대문구");
      }}
    >
      동대문구
    </MDButton>
    </div>
    <br />
    </MDBox>
  );
}

export default RealDealerMap;
