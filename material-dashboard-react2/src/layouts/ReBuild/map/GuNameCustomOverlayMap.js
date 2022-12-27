/* eslint-disable react/prop-types */

import { CustomOverlayMap } from "react-kakao-maps-sdk";

function GuNameCustomOverlayMap({ v, mousePosition }) {
  return (
    <CustomOverlayMap position={mousePosition}>
      <div className="area">{v.isMouseover === true ? v.name : ""}</div>
    </CustomOverlayMap>
  );
}

export default GuNameCustomOverlayMap;
