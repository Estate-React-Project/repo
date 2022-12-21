/* eslint-disable import/no-unresolved */
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
import MDButton from "components/MDButton";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";

// Data
import VerticalBarChart from "examples/Charts/BarCharts/VerticalBarChart";
import authorsTableData from "layouts/RentMonthly/data/monthlyTradeTable";
import projectsTableData from "layouts/tables/data/projectsTableData";
import { useEffect, useState } from "react";
import axios from "axios";

function Tables() {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const [houseType, setHouseType] = useState("");
  const [houseDatas, setHouseDatas] = useState();
  const [preGu, setPreGu] = useState("");

  useEffect(() => {
    const months = async () => {
      if (houseType.length !== 0) {
        const response = await axios.get(
          `http://localhost:8080/web-scraping/openapi/loadMonthlyRentChart?houseType=${houseType}`
        );
        // const response = await axios.get(`/web-scraping/openapi/loadAptDealCount`);
        console.log(response.data);
        setHouseDatas(response.data);
      }
    };
    months();
  }, [houseType]);
  return (
    // Material Dashboard 2 React Example
    <DashboardLayout>
      <DashboardNavbar />
      <MDButton
        variant="outlined"
        color="info"
        size="large"
        onClick={() => {
          setHouseType("아파트");
        }}
      >
        <Icon>apartment</Icon>&nbsp;아파트
      </MDButton>
      <MDButton
        variant="outlined"
        color="info"
        size="large"
        onClick={() => {
          setHouseType("연립다세대");
        }}
      >
        <Icon>home</Icon>&nbsp;연립다세대
      </MDButton>
      <MDButton
        variant="outlined"
        color="info"
        size="large"
        onClick={() => {
          setHouseType("단독다가구");
        }}
      >
        <Icon>house</Icon>&nbsp;단독다가구
      </MDButton>
      <MDButton
        variant="outlined"
        color="info"
        size="large"
        onClick={() => {
          setHouseType("오피스텔");
        }}
      >
        <Icon>business</Icon>&nbsp;오피스텔
      </MDButton>
      <MDBox>
        <DataTable
          table={{ columns, rows }}
          entriesForPage={houseDatas}
          isSorted={false}
          pagination={{ variant: "gradient", color: "secondary" }}
          showTotalEntries={false}
          noEndBorder
        />
      </MDBox>
    </DashboardLayout>
  );
}

export default Tables;
