/* eslint-disable react/no-unstable-nested-components */
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
import MDBadge from "components/MDBadge";

function AuthorsTableData() {
  const Author = ({ name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "사업자번호", accessor: "사업자번호", align: "left" },
      { Header: "자치구 ", accessor: "자치구 ", align: "left" },
      { Header: "사업구분  ", accessor: "사업구분  ", align: "center" },
      { Header: "대표지번 ", accessor: "대표지번 ", align: "center" },
      { Header: "상태 ", accessor: "상태 ", align: "center" },
      { Header: "정비구역면적 ", accessor: "정비구역면적 ", align: "center" },
      { Header: "건축연면적  ", accessor: "건축연면적  ", align: "center" },
      { Header: "높이 ", accessor: "높이 ", align: "center" },
      { Header: "지상층수  ", accessor: "지상층수  ", align: "center" },
      { Header: "지하층수  ", accessor: "지하층수  ", align: "center" },
      { Header: "건설세대총수 ", accessor: "건설세대총수 ", align: "center" },
      { Header: "위치도  ", accessor: "위치도  ", align: "center" },
      { Header: "조감도   ", accessor: "조감도   ", align: "center" },
      { Header: "배치도 ", accessor: "배치도 ", align: "center" },
    ],

    rows: [
      {
        사업자번호: <Author name="왜안돼" email="john@creative-tim.com" />,
        자치구: <Job title="Manager" description="Organization" />,
        사업구분: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="online" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
        대표지번: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            23/04/18
          </MDTypography>
        ),
        상태: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
        정비구역면적: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
        건축연면적: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
        높이: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
        지상층수: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
        지하층수: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
        건설세대총수: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
        위치도: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
        조감도: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
        배치도: (
          <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
            Edit
          </MDTypography>
        ),
      },
    ],
  };
}
export default AuthorsTableData;
