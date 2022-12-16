function AuthorsTableData(datas) {
  return {
    columns: [
      { Header: "사업자번호", accessor: "number", align: "left" },
      { Header: "자치구 ", accessor: "gu", align: "left" },
      { Header: "사업구분  ", accessor: "bytp", align: "center" },
      { Header: "대표지번 ", accessor: "jibun", align: "center" },
      { Header: "상태 ", accessor: "sttus", align: "center" },
      { Header: "정비구역면적 ", accessor: "zone", align: "center" },
      { Header: "건축연면적  ", accessor: "totar", align: "center" },
      { Header: "높이 ", accessor: "high", align: "center" },
      { Header: "지상층수  ", accessor: "ground", align: "center" },
      { Header: "지하층수  ", accessor: "underground", align: "center" },
      { Header: "건설세대총수 ", accessor: "sum", align: "center" },
      { Header: "위치도  ", accessor: "img1", align: "center" },
      { Header: "조감도   ", accessor: "img2", align: "center" },
      { Header: "배치도 ", accessor: "img3", align: "center" },
    ],

    rows: datas.map((data, idx) => ({
      number: data.BSNS_PK,
      gu: data.GU_NM,
      bytp: data.BTYP_NM,
      jibun: data.REPRSNT_JIBUN,
      sttus: data.CAFE_STTUS,
      zone: data.ZONE_AR,
      totar: data.TOTAR,
      high: data.BILDNG_HG,
      ground: data.BILDNG_GROUND_FLOOR_CO,
      underground: data.BILDNG_UNDGRND_FLOOR_CO,
      sum: data.SUM_BILDNG_CO,
      img1: data.LOCIMG01,
      img2: data.LOCIMG02,
      img3: data.LOCIMG03,
    })),
  };
}

export default AuthorsTableData;
