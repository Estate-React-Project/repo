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
import Spinner from "layouts/Style/Spinner";
import Spinner2 from "layouts/Style/Spinner2";

function Tables() {
  const [count, setCount] = useState("");
  const [guaranteeCount, setGuaranteeCount] = useState("");
  const [guCount, setGuCount] = useState("");
  const [purposeCount, setPurposeCount] = useState("");
  const [loading, setLoading] = useState(false);
  const [allData, setAllData] = useState(null);

  useEffect(() => {
    setLoading(true);
    const loadAllData = async () => {
      const response1 = await axios.get(
        `http://127.0.0.1:8080/web-scraping/openapi/loadYearlyRentCountByMonth`
      );

      const response2 = await axios.get(
        `http://127.0.0.1:8080/web-scraping/openapi/loadYearlyRentCountByGuarantee`
      );

      const response3 = await axios.get(
        `http://127.0.0.1:8080/web-scraping/openapi/loadYearlyRentCountByGu`
      );

      const response4 = await axios.get(
        `http://127.0.0.1:8080/web-scraping/openapi/loadYearlyRentCountByGBN`
      );

      setAllData({
        count: response1.data,
        guaranteeCount: response2.data,
        guCount: response3.data,
        purposeCount: response4.data,
      });
      setLoading(false);
    };
    loadAllData();
  }, []);

  // useEffect(() => {
  //   // setLoading(true);
  //   const loadYearlyRentCount = async () => {
  //     const response = await axios.get(
  //       `http://127.0.0.1:8080/web-scraping/openapi/loadYearlyRentCountByMonth`
  //     );
  //     setCount(response.data);
  //     // setLoading(false);
  //   };
  //   loadYearlyRentCount();
  // }, []);

  // useEffect(() => {
  //   // setLoading(true);
  //   const loadYearlyRentGuranteeCount = async () => {
  //     const response = await axios.get(
  //       `http://127.0.0.1:8080/web-scraping/openapi/loadYearlyRentCountByGuarantee`
  //     );
  //     setGuaranteeCount(response.data);
  //     // setLoading(false);
  //   };
  //   loadYearlyRentGuranteeCount();
  // }, []);

  // useEffect(() => {
  //   setLoading(true);
  //   const loadYearlyRentGuCount = async () => {
  //     const response = await axios.get(
  //       `http://127.0.0.1:8080/web-scraping/openapi/loadYearlyRentCountByGu`
  //     );
  //     setGuCount(response.data);
  //     setLoading(false);
  //   };
  //   loadYearlyRentGuCount();
  // }, []);

  // useEffect(() => {
  //   setLoading(true);
  //   const loadYearlyRentPurposeCount = async () => {
  //     const response = await axios.get(
  //       `http://127.0.0.1:8080/web-scraping/openapi/loadYearlyRentCountByGBN`
  //     );
  //     setPurposeCount(response.data);
  //     setLoading(false);
  //   };
  //   loadYearlyRentPurposeCount();
  // }, []);

  if (allData == null) {
    return null;
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      {loading ? (
        <MDBox>
          <Spinner2 />
        </MDBox>
      ) : (
        <>
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
                      title="전세 월별 거래량 기준 (건)"
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
                              allData?.count.dataByMonth1,
                              allData?.count.dataByMonth2,
                              allData?.count.dataByMonth3,
                              allData?.count.dataByMonth4,
                              allData?.count.dataByMonth5,
                              allData?.count.dataByMonth6,
                              allData?.count.dataByMonth7,
                              allData?.count.dataByMonth8,
                              allData?.count.dataByMonth9,
                              allData?.count.dataByMonth10,
                              allData?.count.dataByMonth11,
                              allData?.count.dataByMonth12,
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
                      title="전세 보증금 기준 (만원)"
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
                              allData.guaranteeCount.dataByGuarantee1,
                              allData.guaranteeCount.dataByGuarantee2,
                              allData.guaranteeCount.dataByGuarantee3,
                              allData.guaranteeCount.dataByGuarantee4,
                              allData.guaranteeCount.dataByGuarantee5,
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
                      title="자치구 기준 (건)"
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
                              allData.guCount.dataByGu1,
                              allData.guCount.dataByGu2,
                              allData.guCount.dataByGu3,
                              allData.guCount.dataByGu4,
                              allData.guCount.dataByGu5,
                              allData.guCount.dataByGu6,
                              allData.guCount.dataByGu7,
                              allData.guCount.dataByGu8,
                              allData.guCount.dataByGu9,
                              allData.guCount.dataByGu10,
                              allData.guCount.dataByGu11,
                              allData.guCount.dataByGu12,
                              allData.guCount.dataByGu13,
                              allData.guCount.dataByGu14,
                              allData.guCount.dataByGu15,
                              allData.guCount.dataByGu16,
                              allData.guCount.dataByGu17,
                              allData.guCount.dataByGu18,
                              allData.guCount.dataByGu19,
                              allData.guCount.dataByGu20,
                              allData.guCount.dataByGu21,
                              allData.guCount.dataByGu22,
                              allData.guCount.dataByGu23,
                              allData.guCount.dataByGu24,
                              allData.guCount.dataByGu25,
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
                      title="건물 용도 기준 (세대)"
                      description="2022년 서울시 전세 건물 용도별 구분"
                      chart={{
                        labels: ["단독다가구", "아파트", "연립다세대", "오피스텔"],
                        datasets: {
                          label: "건물 용도",
                          backgroundColors: ["info", "primary", "dark", "secondary", "primary"],
                          data: [
                            allData.purposeCount.dataByGBN1,
                            allData.purposeCount.dataByGBN2,
                            allData.purposeCount.dataByGBN3,
                            allData.purposeCount.dataByGBN4,
                          ],
                        },
                      }}
                    />
                  </MDBox>
                </Card>
              </Grid>
            </Grid>
          </MDBox>
        </>
      )}
    </DashboardLayout>
  );
}

export default Tables;
