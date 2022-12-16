/* eslint-disable react/prop-types */
import React from "react";

function Rebuild({
  KEY,
  TYPE,
  SERVICE,
  START_INDEX,
  END_INDEX,
  GU_NM,
  BJDON_NM,
  BSNS_PK,
  BTYP_NM,
  REPRSNT_JIBUN,
  CAFE_STTUS,
  ZONE_AR,
  TOTAR,
  BILDNG_HG,
  BILDNG_GROUND_FLOOR_CO,
  BILDNG_UNDGRND_FLOOR_CO,
  SUM_BILDNG_CO,
  LOCIMG01,
  LOCIMG02,
  LOCIMG03,
}) {
  return (
    <div className="Rebuild">
      <h3>재개발</h3>
      <div className="BSNS_PK">사업번호:{BSNS_PK}</div>
      <div className="GU_NM">자치구 :{GU_NM}</div>
      <div className="BTYP_NM">사업구분 :{BTYP_NM}</div>
      <div className="REPRSNT_JIBUN">대표지번 :{REPRSNT_JIBUN}</div>
      <div className="CAFE_STTUS">상태 :{CAFE_STTUS}</div>
      <div className="ZONE_AR">정비구역면적:{ZONE_AR}</div>
      <div className="TOTAR">건축연면적 :{TOTAR}</div>
      <div className="BILDNG_HG">높이:{BILDNG_HG}</div>
      <div className="BILDNG_GROUND_FLOOR_CO">지상층수 :{BILDNG_GROUND_FLOOR_CO}</div>
      <div className="BILDNG_UNDGRND_FLOOR_CO">지하층수 :{BILDNG_UNDGRND_FLOOR_CO}</div>
      <div className="SUM_BILDNG_CO">건설세대총수:{SUM_BILDNG_CO}</div>
      <div className="LOCIMG01">위치도 :{LOCIMG01}</div>
      <div className="LOCIMG02">조감도 :{LOCIMG02}</div>
      <div className="LOCIMG03">배치도 :{LOCIMG03}</div>
    </div>
  );
}
export default Rebuild;
