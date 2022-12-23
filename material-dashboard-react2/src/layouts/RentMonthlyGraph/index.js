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
import Spinner from "layouts/Style/Spinner";

function Tables() {
  const { columns, rows } = rentData();
  const [count, setCount] = useState("");
  const [gucount, setGuCount] = useState("");
  const [gbncount, setGbnCount] = useState("");
  const [loading, setLoading] = useState(true);
  const [allData, setAllData] = useState("");

  useEffect(() => {
    const loadAllData = async () => {
      const response1 = await axios.get(
        `http://127.0.0.1:8080/web-scraping/openapi/loadMonthlyRentCount`
      );
      const response2 = await axios.get(
        `http://127.0.0.1:8080/web-scraping/openapi/loadMonthlyGuRentCount`
      );
      const response3 = await axios.get(
        `http://127.0.0.1:8080/web-scraping/openapi/loadMonthlyGbnRentCount`
      );
      setAllData({
        count: response1.data,
        gucount: response2.data,
        gbncount: response3.data,
      });
      setLoading(false);
    };
    loadAllData();
  });

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
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
                      title="건물 용도 기준"
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
        </DashboardLayout>
      )}
    </div>
  );
}

export default Tables;
