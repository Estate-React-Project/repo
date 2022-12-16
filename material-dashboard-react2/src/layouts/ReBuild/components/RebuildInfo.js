/* eslint-disable react/prop-types */
function RebuildInfo({ datas }) {
  return (
    <div>
      {datas.map((data, idx) => (
        <div style={{ fontSize: "10pt" }}>
          <p>{data.BSNS_PK}</p>
          <p>{data.GU_NM}</p>
          <p>{data.BTYP_NM}</p>
          <p>{data.REPRSNT_JIBUN}</p>
          <p>{data.CAFE_STTUS}</p>
          <p>{data.ZONE_AR}</p>
          <p>{data.TOTAR}</p>
          <p>{data.BILDNG_HG}</p>
          <p>{data.BILDNG_GROUND_FLOOR_CO}</p>
          <p>{data.BILDNG_UNDGRND_FLOOR_CO}</p>
          <p>{data.SUM_BILDNG_CO}</p>
          <p>{data.LOCIMG01}</p>
          <p>{data.LOCIMG02}</p>
          <p>{data.LOCIMG03}</p>
        </div>
      ))}
    </div>
  );
}

export default RebuildInfo;
