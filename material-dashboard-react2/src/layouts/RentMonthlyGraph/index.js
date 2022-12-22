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
import PieChart from "examples/Charts/PieChart";
import HorizontalBarChart from "examples/Charts/BarCharts/HorizontalBarChart";
import VerticalBarChart from "examples/Charts/BarCharts/VerticalBarChart";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Data
import rentData from "layouts/RentMonthlyGraph/data/rentData";
import rentGraph from "layouts/RentMonthlyGraph/data/rentGraph";
import { Stack } from "@mui/system";
import { useState, useEffect } from "react";
import axios from "axios";

function Tables() {
  const { columns, rows } = rentData();
  const [count, setCount] = useState("");
  const [gucount, setGuCount] = useState("");
  const [gbncount, setGbnCount] = useState("");
  // const { columns: pColumns, rows: pRows } = rentGraph();
  console.log(gucount);

  useEffect(() => {
    const loadMonthlyRentCount = async () => {
      const response = await axios.get(
        `http://127.0.0.1:8080/web-scraping/openapi/loadMonthlyRentCount`
      );
      setCount(response.data);
    };
    loadMonthlyRentCount();
  }, []);

  useEffect(() => {
    const loadMonthlyGuRentCount = async () => {
      const response = await axios.get(
        `http://127.0.0.1:8080/web-scraping/openapi/loadMonthlyGuRentCount`
      );
      setGuCount(response.data);
    };
    loadMonthlyGuRentCount();
  }, []);

  useEffect(() => {
    const loadMonthlyGbnRentCount = async () => {
      const response = await axios.get(
        `http://127.0.0.1:8080/web-scraping/openapi/loadMonthlyGbnRentCount`
      );
      setGbnCount(response.data);
    };
    loadMonthlyGbnRentCount();
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
                bgColor="secondary"
                borderRadius="lg"
                coloredShadow="secondary"
              />
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
                  title="월세 월별 거래량 기준"
                  description="2022년 서울시 월세 월별 거래량"
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
                        label: "월세 거래량",
                        color: "dark",
                        data: [
                          count.data1,
                          count.data2,
                          count.data3,
                          count.data4,
                          count.data5,
                          count.data6,
                          count.data7,
                          count.data8,
                          count.data9,
                          count.data10,
                          count.data11,
                          count.data12,
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
              />
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
                  description="2022년 서울시 자치구별 월세 거래량"
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
                          gucount.gudata1,
                          gucount.gudata2,
                          gucount.gudata3,
                          gucount.gudata4,
                          gucount.gudata5,
                          gucount.gudata6,
                          gucount.gudata7,
                          gucount.gudata8,
                          gucount.gudata9,
                          gucount.gudata10,
                          gucount.gudata11,
                          gucount.gudata12,
                          gucount.gudata13,
                          gucount.gudata14,
                          gucount.gudata15,
                          gucount.gudata16,
                          gucount.gudata17,
                          gucount.gudata18,
                          gucount.gudata19,
                          gucount.gudata20,
                          gucount.gudata21,
                          gucount.gudata22,
                          gucount.gudata23,
                          gucount.gudata24,
                          gucount.gudata25,
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
              />
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
                  description="2022년 서울시 월세 건물 용도별 구분"
                  chart={{
                    labels: ["아파트", "단독다가구", "연립다세대", "오피스텔"],
                    datasets: {
                      label: "Projects",
                      backgroundColors: ["info", "primary", "dark", "secondary", "primary"],
                      data: [gbncount.data1, gbncount.data2, gbncount.data3, gbncount.data4],
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
