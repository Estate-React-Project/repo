/* eslint-disable react/prop-types */
function RebuildInfo({ datas }) {
  return (
    <div>
      {datas.map((data, idx) => (
        <div>
          <h3>{data.BTYP_NM}</h3>
          <h3>{data.BILDNG_PRPOS_NM}</h3>
          <h3>{data.ZONE_ADRES}</h3>
        </div>
      ))}
    </div>
  );
}

export default RebuildInfo;
