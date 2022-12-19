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

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import MDPagination from "components/MDPagination";
import MixedChart from "examples/Charts/MixedChart";
import DefaultLineChart from "examples/Charts/LineCharts/DefaultLineChart";
import PieChart from "examples/Charts/PieChart";
import VerticalBarChart from "examples/Charts/BarCharts/VerticalBarChart";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";

// Data
import rentData from "layouts/RentYearly/data/rentData";
import rentGraph from "layouts/RentYearly/data/rentGraph";
import { Stack } from "@mui/system";

function Tables() {
  const { columns, rows } = rentData();
  // const { columns: pColumns, rows: pRows } = rentGraph();

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
                bgColor="secondary"
                borderRadius="lg"
                coloredShadow="secondary"
              >
                <MDTypography variant="h6" color="white">
                  Rent Yearly Data
                </MDTypography>
              </MDBox>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="secondary"
                borderRadius="lg"
                coloredShadow="secondary"
              >
                <MixedChart
                  icon={{ color: "info", component: "leaderboard" }}
                  title="전세 월별 거래량 기준"
                  description="2022년 서울시 전세 월별 거래량"
                  chart={{
                    labels: [
                      "1월",
                      "2월",
                      "3월",
                      "4월",
                      "5월",
                      "6월",
                      "7월",
                      "8월",
                      "9월",
                      "10월",
                      "11월",
                      "12월",
                    ],
                    datasets: [
                      {
                        chartType: "thin-bar",
                        label: "전세 거래량",
                        color: "dark",
                        data: [50, 40, 300, 220, 500, 250, 400, 230, 500, 300, 400, 550],
                      },
                    ],
                  }}
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
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
                bgColor="secondary"
                borderRadius="lg"
                coloredShadow="secondary"
              >
                <MDTypography variant="h6" color="white">
                  Rent Yearly Data
                </MDTypography>
              </MDBox>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="secondary"
                borderRadius="lg"
                coloredShadow="secondary"
              >
                <VerticalBarChart
                  icon={{ color: "info", component: "leaderboard" }}
                  title="전세 보증금 기준"
                  description="2022년 서울시 전세 보증금"
                  chart={{
                    labels: [
                      "- 20000",
                      "20000 - 40000",
                      "40000 - 60000",
                      "60000 - 80000",
                      "80000 +",
                    ],
                    datasets: [
                      {
                        label: "Sales by age",
                        color: "dark",
                        data: [15, 20, 12, 60, 20],
                      },
                    ],
                  }}
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
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
                bgColor="secondary"
                borderRadius="lg"
                coloredShadow="secondary"
              >
                <MDTypography variant="h6" color="white">
                  Rent Yearly Data
                </MDTypography>
              </MDBox>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="secondary"
                borderRadius="lg"
                coloredShadow="secondary"
              >
                <VerticalBarChart
                  icon={{ color: "info", component: "leaderboard" }}
                  title="자치구 기준"
                  description="2022년 서울시 자치구별 전세 거래량"
                  chart={{
                    labels: [
                      "강남구",
                      "강동구",
                      "강북구",
                      "강서구",
                      "관악구",
                      "광진구",
                      "구로구",
                      "금천구",
                      "노원구",
                      "도봉구",
                      "동대문구",
                      "동작구",
                      "마포구",
                      "서대문구",
                      "서초구",
                      "성동구",
                      "성북구",
                      "송파구",
                      "양천구",
                      "영등포구",
                      "용산구",
                      "은평구",
                      "종로구",
                      "중구",
                      "중랑구",
                    ],
                    datasets: [
                      {
                        label: "Sales by age",
                        color: "dark",
                        data: [
                          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
                          22, 23, 24, 25,
                        ],
                      },
                    ],
                  }}
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
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
                bgColor="secondary"
                borderRadius="lg"
                coloredShadow="secondary"
              >
                <MDTypography variant="h6" color="white">
                  Rent Yearly Data
                </MDTypography>
              </MDBox>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="secondary"
                borderRadius="lg"
                coloredShadow="secondary"
              >
                <PieChart
                  icon={{ color: "info", component: "leaderboard" }}
                  title="건물 용도 기준"
                  description="2022년 서울시 전세 건물 용도별 구분"
                  chart={{
                    labels: ["아파트", "단독다가구", "연립다세대", "오피스텔"],
                    datasets: {
                      label: "Projects",
                      backgroundColors: ["info", "primary", "dark", "secondary", "primary"],
                      data: [15, 20, 12, 60],
                    },
                  }}
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Tables;
