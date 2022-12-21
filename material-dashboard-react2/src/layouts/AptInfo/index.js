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
import { useEffect, useState } from "react";
import axios from "axios";
import PieChart from "examples/Charts/PieChart";
import DongCoBarChart from "examples/Charts/BarCharts/DongCoBarChart";
import HshldrPieChartData from "./data/HshldrPieChartData";
import ManagePieChartData from "./data/ManagePieChartData";
import CrrdprPieChartData from "./data/CrrdprPieChartData";
import HeatPieChartData from "./data/HeatPieChartData";
import DongCoChartData from "./data/DongCoChartData";

function Tables() {
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const [countInfo, setCountInfo] = useState("");

  useEffect(() => {
    const loadAptInfoCount = async () => {
      const response = await axios.get(
        `http://127.0.0.1:8080/web-scraping/openapi/loadAptInfoCount`
      );
      // const response = await axios.get(`/web-scraping/openapi/loadAptInfoCount`);
      // console.log(response.data);
      setCountInfo(response.data);
    };
    loadAptInfoCount();
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
              <PieChart
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
              <PieChart
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
              <PieChart
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
              <PieChart
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
              <DongCoBarChart
                icon={{ color: "success", component: "apartment" }}
                title="전체 동 수"
                description="2022.12.19 기준"
                chart={DongCoChartData([
                  countInfo.data20,
                  countInfo.data21,
                  countInfo.data22,
                  countInfo.data23,
                  countInfo.data24,
                  countInfo.data25,
                  countInfo.data26,
                  countInfo.data27,
                  countInfo.data28,
                  countInfo.data29,
                  countInfo.data30,
                  countInfo.data31,
                  countInfo.data32,
                  countInfo.data33,
                  countInfo.data34,
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
