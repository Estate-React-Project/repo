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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Icon } from "@mui/material";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import ApartmentIcon from "@mui/icons-material/Apartment";
import Card from "@mui/material/Card";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import ReportsLineChart from "examples/Charts/LineCharts/ReportsLineChart";
import ComplexStatisticsCard from "examples/Cards/StatisticsCards/ComplexStatisticsCard";

// Data
import ReportBarChartData from "layouts/dashboard/data/reportsBarChartData";
import reportsLineChartData from "layouts/dashboard/data/reportsLineChartData";

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import OrdersOverview from "layouts/dashboard/components/OrdersOverview";
import TimelineItem from "examples/Timeline/TimelineItem";

// Project Data
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "layouts/Style/Spinner";
import Spinner2 from "layouts/Style/Spinner2";
import list from "assets/theme/components/list";

function Dashboard() {
  const { yearlyRent, monthlyRent } = reportsLineChartData;
  const [loading, setLoading] = useState(true);
  const [allData, setAllData] = useState("");

  useEffect(() => {
    const loadAllData = async () => {
      const response1 = await axios.get(
        `http://127.0.0.1:8080/web-scraping/openapi/loadYearlyRentDashboard`
      );

      const response2 = await axios.get(
        `http://127.0.0.1:8080/web-scraping/openapi/loadYearlyRentDashboard2`
      );

      const response3 = await axios.get(
        `http://127.0.0.1:8080/web-scraping/openapi/loadMonthlyRentDashboard`
      );

      const response4 = await axios.get(
        `http://127.0.0.1:8080/web-scraping/openapi/loadYearlyRentCountByGBN`
      );

      const response5 = await axios.get(
        `http://127.0.0.1:8080/web-scraping/openapi/loadMonthlyGbnRentCount`
      );

      const response6 = await axios.get(
        `http://127.0.0.1:8080/web-scraping/openapi/loadAllAptCount`
      );

      setAllData({
        yearlyRentAllCount: response1.data,
        yearlyRentChartData: response2.data,
        monthlyRentAllCount: response3.data,
        yearlyRentGBNCount: response4.data,
        monthlyRentGBNCount: response5.data,
        allAptCount: response6.data,
      });
      setLoading(false);
    };
    loadAllData();
  }, []);

  return (
    <div>
      {loading ? (
        <Spinner2 />
      ) : (
        <DashboardLayout>
          {/* <DashboardNavbar /> */}
          <br />
          <MDBox>
            <MDTypography variant="h5">
              <Icon>chat</Icon>&nbsp;&nbsp;2022년 서울 부동산 정보
            </MDTypography>
          </MDBox>
          <br />
          <MDBox py={3}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={3}>
                <MDBox mb={1.5}>
                  <ComplexStatisticsCard
                    color="dark"
                    icon="homeworkicon"
                    title="전세 총 거래량"
                    count={`${allData.yearlyRentAllCount.dataCount}건`}
                    percentage={{
                      label: "2022년 서울 기준",
                    }}
                  />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <MDBox mb={1.5}>
                  <ComplexStatisticsCard
                    color="dark"
                    icon="homeworkicon"
                    title="월세 총 거래량"
                    count={`${allData.monthlyRentAllCount.dataCount}건`}
                    percentage={{
                      label: "2022년 서울 기준",
                    }}
                  />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <MDBox mb={1.5}>
                  <ComplexStatisticsCard
                    color="dark"
                    icon="apartmenticon"
                    title="전체 아파트 개수"
                    count={`${allData.allAptCount.dataCount}개`}
                    percentage={{
                      label: "2022년 서울 기준",
                    }}
                  />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <MDBox mb={1.5}>
                  <ComplexStatisticsCard
                    color="dark"
                    icon="apartmenticon"
                    title="오늘 방문자 수"
                    count="+1,235,689명"
                    percentage={{
                      color: "success",
                      amount: "",
                      label: "2022/12/26",
                    }}
                  />
                </MDBox>
              </Grid>
            </Grid>
            <MDBox mt={4.5}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={4}>
                  <MDBox mb={3}>
                    <ReportsBarChart
                      color="info"
                      title="서울시 전세 거래량 상위 5개 자치구"
                      description="서울시 자치구별 조회"
                      date="2022년 서울시 기준"
                      chart={ReportBarChartData(allData.yearlyRentChartData)}
                    />
                  </MDBox>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <MDBox mb={3}>
                    <ReportsLineChart
                      color="info"
                      title="daily sales"
                      description={
                        <>
                          (<strong>+15%</strong>) increase in today sales.
                        </>
                      }
                      date="updated 4 min ago"
                      chart={yearlyRent}
                    />
                  </MDBox>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <MDBox mb={3}>
                    <ReportsLineChart
                      color="info"
                      title="completed tasks"
                      description="Last Campaign Performance"
                      date="just updated"
                      chart={monthlyRent}
                    />
                  </MDBox>
                </Grid>
              </Grid>
            </MDBox>
            <MDBox>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={8}>
                  <Projects />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <Card sx={{ height: "100%" }}>
                    <MDBox pt={3} px={3}>
                      <MDTypography variant="h6" fontWeight="medium">
                        전월세 건물 유형별 거래량
                      </MDTypography>
                      <MDBox mt={0} mb={2}>
                        <MDTypography variant="button" color="text" fontWeight="regular">
                          2022년 전월세
                        </MDTypography>
                      </MDBox>
                    </MDBox>
                    <MDBox p={2}>
                      <TimelineItem
                        color="info"
                        icon="apartment"
                        title={`${allData.yearlyRentGBNCount.dataByGBN2}건`}
                        dateTime="2022년 아파트 전세 거래량"
                      />
                      <TimelineItem
                        color="info"
                        icon="home"
                        title={`${allData.yearlyRentGBNCount.dataByGBN3}건`}
                        dateTime="2022년 연립다세대 전세 거래량"
                      />
                      <TimelineItem
                        color="info"
                        icon="house"
                        title={`${allData.yearlyRentGBNCount.dataByGBN1}건`}
                        dateTime="2022년 단독다가구 전세 거래량"
                      />
                      <TimelineItem
                        color="info"
                        icon="business"
                        title={`${allData.yearlyRentGBNCount.dataByGBN4}건`}
                        dateTime="2022년 오피스텔 전세 거래량"
                      />
                      <TimelineItem
                        color="warning"
                        icon="apartment"
                        title={`${allData.monthlyRentGBNCount.data1}건`}
                        dateTime="2022년 아파트 월세 거래량"
                      />
                      <TimelineItem
                        color="warning"
                        icon="home"
                        title={`${allData.monthlyRentGBNCount.data3}건`}
                        dateTime="2022년 연립다세대 월세 거래량"
                      />
                      <TimelineItem
                        color="warning"
                        icon="house"
                        title={`${allData.monthlyRentGBNCount.data2}건`}
                        dateTime="2022년 단독다가구 월세 거래량"
                      />
                      <TimelineItem
                        color="warning"
                        icon="business"
                        title={`${allData.monthlyRentGBNCount.data4}건`}
                        dateTime="2022년 오피스텔 월세 거래량"
                        lastItem
                      />
                    </MDBox>
                  </Card>
                </Grid>
              </Grid>
            </MDBox>
          </MDBox>
        </DashboardLayout>
      )}
    </div>
  );
}

export default Dashboard;
