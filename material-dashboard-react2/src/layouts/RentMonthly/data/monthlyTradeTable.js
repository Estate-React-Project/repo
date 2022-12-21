/* eslint-disable */
const makeMonthlyTradeData = (data) => 
{
    const resp = {
                columns: [
                  { Header: "계약일", accessor: "Date" },
                  { Header: "주소(구, 동)", accessor: "GuDongName" },
                  { Header: "건물명, 층", accessor: "Bldg" },
                  { Header: "보증금, 월세(만원)", accessor: "Fee" },
                  { Header: "건물면적(m^2)", accessor: "Area" },
                  { Header: "건축연도, 건물용도", accessor: "HouseUse" },
                ],
                data.map((data) => {
                  rows: [
                    { Date: {data.cntrctDe}},
                    { GuDongName: {data.sggNm}},
                    { Bldg: {data.bldgNm}},
                    { Fee: {data.rentGtn} },
                    { Area: {data.bldgArea} },
                    { HouseUse: {data.buildYear}},
                    ],
                  }),
              };
            
    return resp;
};

export default makeMonthlyTradeData;
