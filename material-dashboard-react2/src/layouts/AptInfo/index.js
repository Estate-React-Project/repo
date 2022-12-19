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

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import projectsTableData from "layouts/AptInfo/data/projectsTableData";
import HshldrChart from "examples/Charts/PieChart/HshldrChart";
import ManageChart from "examples/Charts/PieChart/ManageChart";
import CrrdprChart from "examples/Charts/PieChart/CrrdprChart";
import HeatChart from "examples/Charts/PieChart/HeatChart";
import DongCoChart from "examples/Charts/BarCharts/DongCoChart";
import { useEffect, useState } from "react";
import axios from "axios";
import HshldrPieChartData from "./data/HshldrPieChartData";
import ManagePieChartData from "./data/ManagePieChartData";
import CrrdprPieChartData from "./data/CrrdprPieChartData";
import HeatPieChartData from "./data/HeatPieChartData";
import DongCoChartData from "./data/DongCoChartData";

function Tables() {
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const [count, setCount] = useState("");
  const [aptInfo, setAptInfo] = useState("");
  const [countInfo, setCountInfo] = useState("");

  useEffect(() => {
    const loadAptCountInfo = async () => {
      const response = await axios.get(
        `http://127.0.0.1:8080/web-scraping/openapi/loadAptCountInfo`
      );
      // const response = await axios.get(`/web-scraping/openapi/loadAaptInfo`);
      // console.log(response.data);
      setCountInfo(response.data);
    };
    loadAptCountInfo();
  }, []);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  동별 아파트 목록
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <MDBox mb={3}>
              <HshldrChart
                icon={{ color: "info", component: "apartment" }}
                title="아파트 세대 타입"
                description="2022.12.19 기준"
                chart={HshldrPieChartData([
                  countInfo.data1,
                  countInfo.data2,
                  countInfo.data3,
                  countInfo.data4,
                  countInfo.data5,
                ])}
              />
            </MDBox>
          </Grid>
          <Grid item xs={4}>
            <MDBox mb={3}>
              <ManageChart
                icon={{ color: "primary", component: "apartment" }}
                title="아파트 관리 방식"
                description="2022.12.19 기준"
                chart={ManagePieChartData([
                  countInfo.data6,
                  countInfo.data7,
                  countInfo.data8,
                  countInfo.data9,
                  countInfo.data10,
                ])}
              />
            </MDBox>
          </Grid>
          <Grid item xs={4}>
            <MDBox mb={3}>
              <CrrdprChart
                icon={{ color: "secondary", component: "apartment" }}
                title="아파트 복도 유형"
                description="2022.12.19 기준"
                chart={CrrdprPieChartData([
                  countInfo.data11,
                  countInfo.data12,
                  countInfo.data13,
                  countInfo.data14,
                  countInfo.data15,
                ])}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12}>
            <MDBox mb={3}>
              <HeatChart
                icon={{ color: "error", component: "apartment" }}
                title="아파트 난방 방식"
                description="2022.12.19 기준"
                chart={HeatPieChartData([
                  countInfo.data16,
                  countInfo.data17,
                  countInfo.data18,
                  countInfo.data19,
                ])}
              />
            </MDBox>
          </Grid>
          <Grid item xs={12}>
            <MDBox mb={3}>
              <DongCoChart
                icon={{ color: "success", component: "apartment" }}
                title="전체 동 수"
                description="2022.12.19 기준"
                chart={DongCoChartData([
                  countInfo.data11,
                  countInfo.data11,
                  countInfo.data11,
                  countInfo.data11,
                  countInfo.data11,
                  countInfo.data11,
                  countInfo.data11,
                  countInfo.data11,
                ])}
              />
            </MDBox>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
