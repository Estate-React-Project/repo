/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const ReportLineChartDataYearly = (data) => {
  const resp = {
    labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    datasets: {
      label: "월별 거래량",
      data: [
        data.dataByMonth1,
        data.dataByMonth2,
        data.dataByMonth3,
        data.dataByMonth4,
        data.dataByMonth5,
        data.dataByMonth6,
        data.dataByMonth7,
        data.dataByMonth8,
        data.dataByMonth9,
        data.dataByMonth10,
        data.dataByMonth11,
        data.dataByMonth12,
      ],
    },
  };
  return resp;
};

export default ReportLineChartDataYearly;
