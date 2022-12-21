/* eslint-disable import/no-unresolved */
/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Images

export default function data() {
  const Date = ({ CNTRCT_DE }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {CNTRCT_DE}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  const GuDongName = ({ SGG_NM, BJDONG_NM }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {SGG_NM}
      </MDTypography>
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {BJDONG_NM}
      </MDTypography>
    </MDBox>
  );

  const Bldg = ({ BLDG_NM, FLOOR }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {BLDG_NM}
      </MDTypography>
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {FLOOR}
      </MDTypography>
    </MDBox>
  );

  const Fee = ({ RENT_GTN, RENT_FEE }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {RENT_GTN}
      </MDTypography>
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {RENT_FEE}
      </MDTypography>
    </MDBox>
  );

  const Area = ({ BLDG_AREA }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {BLDG_AREA}
      </MDTypography>
    </MDBox>
  );

  const HouseUse = ({ BUILD_YEAR, HOUSE_TYPE }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {BUILD_YEAR}
      </MDTypography>
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {HOUSE_TYPE}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "계약일", accessor: "Date", align: "center" },
      { Header: "주소(구,동)", accessor: "GuDongName", align: "center" },
      { Header: "건물명, 층", accessor: "Bldg", align: "center" },
      { Header: "보증금, 월세", accessor: "Fee", align: "center" },
      { Header: "건물면적, 토지면적", accessor: "Area", align: "center" },
      { Header: "건축년도, 건물용도, 신고구분", accessor: "HouseUse", align: "center" },
    ],

    rows: [
      {
        Date: <Date CNTRCT_DE />,
        GuDongName: <GuDongName SGG_NM="자치구 명" BJDONG_NM="법정동 명" />,
        Bldg: <Bldg BLDG_NM="건물명" FLOOR="층" />,
        Fee: <Fee RENT_GTN="보증금" RENT_FEE="월세" />,
        Area: <Area BLDG_AREA="건물면적" TOT_AREA="토지면적" />,
        HouseUse: <HouseUse BUILD_YEAR="건축년도" HOUSE_TYPE="건물용도" REQ_GBN="신고구분" />,
      },
    ],
  };
}
