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
import { Stack } from "@mui/system";
import { useEffect, useState } from "react";
import axios from "axios";

function Tables() {
  const [count, setCount] = useState("");
  const [guaranteeCount, setGuaranteeCount] = useState("");
  const [guCount, setGuCount] = useState("");
  const [purposeCount, setPurposeCount] = useState("");

  useEffect(() => {
    const loadYearlyRentCount = async () => {
      const response = await axios.get(
        `http://127.0.0.1:8080/web-scraping/openapi/loadYearlyRentCountByMonth`
      );
      // console.log(response.data);
      setCount(response.data);
    };
    loadYearlyRentCount();
  }, []);

  useEffect(() => {
    const loadYearlyRentGuranteeCount = async () => {
      const response = await axios.get(
        `http://127.0.0.1:8080/web-scraping/openapi/loadYearlyRentCountByGuarantee`
      );
      // console.log(response.data);
      setGuaranteeCount(response.data);
    };
    loadYearlyRentGuranteeCount();
  }, []);

  useEffect(() => {
    const loadYearlyRentGuCount = async () => {
      const response = await axios.get(
        `http://127.0.0.1:8080/web-scraping/openapi/loadYearlyRentCountByGu`
      );
      // console.log(response.data);
      setGuCount(response.data);
    };
    loadYearlyRentGuCount();
  }, []);

  useEffect(() => {
    const loadYearlyRentPurposeCount = async () => {
      const response = await axios.get(
        `http://127.0.0.1:8080/web-scraping/openapi/loadYearlyRentCountByGBN`
      );
      // console.log(response.data);
      setPurposeCount(response.data);
    };
    loadYearlyRentPurposeCount();
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
              >
                <MDTypography variant="h6" color="white">
                  Yearly Rent Data
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
                        label: "월별 전세 거래량",
                        color: "dark",
                        data: [
                          count.dataByMonth1,
                          count.dataByMonth2,
                          count.dataByMonth3,
                          count.dataByMonth4,
                          count.dataByMonth5,
                          count.dataByMonth6,
                          count.dataByMonth7,
                          count.dataByMonth8,
                          count.dataByMonth9,
                          count.dataByMonth10,
                          count.dataByMonth11,
                          count.dataByMonth12,
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
                  Yearly Rent Data
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
                <HorizontalBarChart
                  icon={{ color: "info", component: "leaderboard" }}
                  title="전세 보증금 기준"
                  description="2022년 서울시 전세 보증금"
                  chart={{
                    labels: [
                      "80000 초과",
                      "60000 - 80000",
                      "40000 - 60000",
                      "20000 - 40000",
                      "20000 미만",
                    ],
                    datasets: [
                      {
                        label: "전세 보증금별 거래량",
                        color: "dark",
                        data: [
                          guaranteeCount.dataByGuarantee1,
                          guaranteeCount.dataByGuarantee2,
                          guaranteeCount.dataByGuarantee3,
                          guaranteeCount.dataByGuarantee4,
                          guaranteeCount.dataByGuarantee5,
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
                  Yearly Rent Data
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
                        label: "자치구별 전세 거래량",
                        color: "dark",
                        data: [
                          guCount.dataByGu1,
                          guCount.dataByGu2,
                          guCount.dataByGu3,
                          guCount.dataByGu4,
                          guCount.dataByGu5,
                          guCount.dataByGu6,
                          guCount.dataByGu7,
                          guCount.dataByGu8,
                          guCount.dataByGu9,
                          guCount.dataByGu10,
                          guCount.dataByGu11,
                          guCount.dataByGu12,
                          guCount.dataByGu13,
                          guCount.dataByGu14,
                          guCount.dataByGu15,
                          guCount.dataByGu16,
                          guCount.dataByGu17,
                          guCount.dataByGu18,
                          guCount.dataByGu19,
                          guCount.dataByGu20,
                          guCount.dataByGu21,
                          guCount.dataByGu22,
                          guCount.dataByGu23,
                          guCount.dataByGu24,
                          guCount.dataByGu25,
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
                  Yearly Rent Data
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
                    labels: ["단독다가구", "아파트", "연립다세대", "오피스텔"],
                    datasets: {
                      label: "건물 용도",
                      backgroundColors: ["info", "primary", "dark", "secondary", "primary"],
                      data: [
                        purposeCount.dataByGBN1,
                        purposeCount.dataByGBN2,
                        purposeCount.dataByGBN3,
                        purposeCount.dataByGBN4,
                      ],
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
