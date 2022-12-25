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
import MixedChart from "examples/Charts/MixedChart";
import PieChart from "examples/Charts/PieChart";
import HorizontalBarChart from "examples/Charts/BarCharts/HorizontalBarChart";
import VerticalBarChart from "examples/Charts/BarCharts/VerticalBarChart";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

// Data
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner3 from "layouts/Style/Spinner3";

function Tables() {
  const [loading, setLoading] = useState(true);
  const [allData, setAllData] = useState("");

  useEffect(() => {
    const loadAllData = async () => {
      const response1 = await axios.get(
        `http://127.0.0.1:8080/web-scraping/openapi/loadYearlyRentCountByMonth`
      );

      const response2 = await axios.get(
        `http://127.0.0.1:8080/web-scraping/openapi/loadMonthlyRentCount`
      );

      const response3 = await axios.get(
        `http://127.0.0.1:8080/web-scraping/openapi/loadYearlyRentCountByGu`
      );

      const response4 = await axios.get(
        `http://127.0.0.1:8080/web-scraping/openapi/loadMonthlyGuRentCount`
      );

      const response5 = await axios.get(
        `http://127.0.0.1:8080/web-scraping/openapi/loadYearlyRentCountByGBN`
      );

      const response6 = await axios.get(
        `http://127.0.0.1:8080/web-scraping/openapi/loadMonthlyGbnRentCount`
      );

      const response7 = await axios.get(
        `http://127.0.0.1:8080/web-scraping/openapi/loadYearlyRentCountByGuarantee`
      );

      const response8 = await axios.get(
        `http://127.0.0.1:8080/web-scraping/openapi/loadRentBuildCount`
      );

      setAllData({
        yCount: response1.data,
        count: response2.data,
        yGuCount: response3.data,
        gucount: response4.data,
        yPurposeCount: response5.data,
        gbncount: response6.data,
        guaranteeCount: response7.data,
        rentBuildCount: response8.data,
      });
      setLoading(false);
    };
    loadAllData();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner3 />
      ) : (
        <DashboardLayout>
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
                              allData?.yCount.dataByMonth1,
                              allData?.yCount.dataByMonth2,
                              allData?.yCount.dataByMonth3,
                              allData?.yCount.dataByMonth4,
                              allData?.yCount.dataByMonth5,
                              allData?.yCount.dataByMonth6,
                              allData?.yCount.dataByMonth7,
                              allData?.yCount.dataByMonth8,
                              allData?.yCount.dataByMonth9,
                              allData?.yCount.dataByMonth10,
                              allData?.yCount.dataByMonth11,
                              allData?.yCount.dataByMonth12,
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
                    <MixedChart
                      icon={{ color: "info", component: "leaderboard" }}
                      title="월세 월별 거래량 기준 (건)"
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
                              allData.count.data1,
                              allData.count.data2,
                              allData.count.data3,
                              allData.count.data4,
                              allData.count.data5,
                              allData.count.data6,
                              allData.count.data7,
                              allData.count.data8,
                              allData.count.data9,
                              allData.count.data10,
                              allData.count.data11,
                              allData.count.data12,
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
                              allData.yGuCount.dataByGu1,
                              allData.yGuCount.dataByGu2,
                              allData.yGuCount.dataByGu3,
                              allData.yGuCount.dataByGu4,
                              allData.yGuCount.dataByGu5,
                              allData.yGuCount.dataByGu6,
                              allData.yGuCount.dataByGu7,
                              allData.yGuCount.dataByGu8,
                              allData.yGuCount.dataByGu9,
                              allData.yGuCount.dataByGu10,
                              allData.yGuCount.dataByGu11,
                              allData.yGuCount.dataByGu12,
                              allData.yGuCount.dataByGu13,
                              allData.yGuCount.dataByGu14,
                              allData.yGuCount.dataByGu15,
                              allData.yGuCount.dataByGu16,
                              allData.yGuCount.dataByGu17,
                              allData.yGuCount.dataByGu18,
                              allData.yGuCount.dataByGu19,
                              allData.yGuCount.dataByGu20,
                              allData.yGuCount.dataByGu21,
                              allData.yGuCount.dataByGu22,
                              allData.yGuCount.dataByGu23,
                              allData.yGuCount.dataByGu24,
                              allData.yGuCount.dataByGu25,
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
                      title="자치구 기준 (건)"
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
                            label: "자치구별 월세 거래량",
                            color: "dark",
                            data: [
                              allData.gucount.gudata1,
                              allData.gucount.gudata2,
                              allData.gucount.gudata3,
                              allData.gucount.gudata4,
                              allData.gucount.gudata5,
                              allData.gucount.gudata6,
                              allData.gucount.gudata7,
                              allData.gucount.gudata8,
                              allData.gucount.gudata9,
                              allData.gucount.gudata10,
                              allData.gucount.gudata11,
                              allData.gucount.gudata12,
                              allData.gucount.gudata13,
                              allData.gucount.gudata14,
                              allData.gucount.gudata15,
                              allData.gucount.gudata16,
                              allData.gucount.gudata17,
                              allData.gucount.gudata18,
                              allData.gucount.gudata19,
                              allData.gucount.gudata20,
                              allData.gucount.gudata21,
                              allData.gucount.gudata22,
                              allData.gucount.gudata23,
                              allData.gucount.gudata24,
                              allData.gucount.gudata25,
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
                      title="건물 용도 기준 (세대)"
                      description="2022년 서울시 전세 건물 용도별 구분"
                      chart={{
                        labels: ["단독다가구", "아파트", "연립다세대", "오피스텔"],
                        datasets: {
                          label: "건물 용도",
                          backgroundColors: ["info", "primary", "dark", "secondary", "primary"],
                          data: [
                            allData.yPurposeCount.dataByGBN1,
                            allData.yPurposeCount.dataByGBN2,
                            allData.yPurposeCount.dataByGBN3,
                            allData.yPurposeCount.dataByGBN4,
                          ],
                        },
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
                      title="건물 용도 기준 (세대)"
                      description="2022년 서울시 월세 건물 용도별 구분"
                      chart={{
                        labels: ["아파트", "단독다가구", "연립다세대", "오피스텔"],
                        datasets: {
                          label: "Projects",
                          backgroundColors: ["info", "primary", "dark", "secondary", "primary"],
                          data: [
                            allData.gbncount.data1,
                            allData.gbncount.data2,
                            allData.gbncount.data3,
                            allData.gbncount.data4,
                          ],
                        },
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
                    <HorizontalBarChart
                      icon={{ color: "info", component: "leaderboard" }}
                      title="전세 보증금 기준 (만원)"
                      description="2022년 서울시 전세 보증금"
                      chart={{
                        labels: [
                          "80,000 초과",
                          "60,000 - 80,000",
                          "40,000 - 60,000",
                          "20,000 - 40,000",
                          "20,000 미만",
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
                    <HorizontalBarChart
                      icon={{ color: "info", component: "leaderboard" }}
                      title="2022 거래 건물 연식"
                      description="2022년 전/월세 거래 건물 연식"
                      chart={{
                        labels: [
                          "1970 ~ 1980",
                          "1980 ~ 1990",
                          "1990 ~ 2000",
                          "2000 ~ 2010",
                          "2010 ~ 2022",
                        ],
                        datasets: [
                          {
                            label: "전세 보증금별 거래량",
                            color: "dark",
                            data: [
                              allData.rentBuildCount.data1,
                              allData.rentBuildCount.data2,
                              allData.rentBuildCount.data3,
                              allData.rentBuildCount.data4,
                              allData.rentBuildCount.data5,
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
        </DashboardLayout>
      )}
    </div>
  );
}

export default Tables;
