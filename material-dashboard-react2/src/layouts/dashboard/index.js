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

// Dashboard components
import Projects from "layouts/dashboard/components/Projects";
import TimelineItem from "examples/Timeline/TimelineItem";

// Project Data
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "layouts/Style/Spinner";
import Spinner2 from "layouts/Style/Spinner2";
import list from "assets/theme/components/list";
import ReportLineChartDataMonthly from "./data/reportsLineChartDataMonthly";
import ReportLineChartDataYearly from "./data/reportsLineChartDataYearly";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [allData, setAllData] = useState("");

  useEffect(() => {
    const loadAllData = async () => {
      const response1 = await axios.get(`/openapi/loadYearlyRentDashboard`);

      const response2 = await axios.get(`/openapi/loadYearlyRentDashboard2`);

      const response3 = await axios.get(`/openapi/loadMonthlyRentDashboard`);

      const response4 = await axios.get(`/openapi/loadYearlyRentDashboardCountByGBN`);

      const response5 = await axios.get(`/openapi/loadMonthlyDashboardGbnRentCount`);

      const response6 = await axios.get(`/openapi/loadAllAptCount`);

      const response7 = await axios.get(`/openapi/loadDashboardRealDealerCount`);

      const response8 = await axios.get(`/openapi/loadYearlyRentCountByMonth`);

      const response9 = await axios.get(`/openapi/loadMonthlyRentCount`);

      setAllData({
        yearlyRentAllCount: response1.data,
        yearlyRentChartData: response2.data,
        monthlyRentAllCount: response3.data,
        yearlyRentGBNCount: response4.data,
        monthlyRentGBNCount: response5.data,
        allAptCount: response6.data,
        yearlyRentMonthCount: response8.data,
        monthlyRentMonthCount: response9.data,
        dashboardRealDealerCount: response7.data,
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
              <Icon>chat</Icon>&nbsp;&nbsp;2022??? ?????? ????????? ??????
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
                    title="?????? ??? ?????????"
                    count={`${allData.yearlyRentAllCount.dataCount}???`}
                    percentage={{
                      label: "2022??? ????????? ??????",
                    }}
                  />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <MDBox mb={1.5}>
                  <ComplexStatisticsCard
                    color="dark"
                    icon="homeworkicon"
                    title="?????? ??? ?????????"
                    count={`${allData.monthlyRentAllCount.dataCount}???`}
                    percentage={{
                      label: "2022??? ????????? ??????",
                    }}
                  />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <MDBox mb={1.5}>
                  <ComplexStatisticsCard
                    color="dark"
                    icon="apartmenticon"
                    title="?????? ????????? ??????"
                    count={`${allData.allAptCount.dataCount}???`}
                    percentage={{
                      label: "2022??? ????????? ??????",
                    }}
                  />
                </MDBox>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <MDBox mb={1.5}>
                  <ComplexStatisticsCard
                    color="dark"
                    icon="villaicon"
                    title="???????????? ??????"
                    count={`${allData.dashboardRealDealerCount.data}???`}
                    percentage={{
                      label: "2022??? ????????? ??????",
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
                      title="?????? ????????? ?????? 5??? ?????????"
                      description="????????? ???????????? ??????"
                      date="2022??? ????????? ??????"
                      chart={ReportBarChartData(allData.yearlyRentChartData)}
                    />
                  </MDBox>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <MDBox mb={3}>
                    <ReportsLineChart
                      color="info"
                      title="?????? ????????? ?????? ??????"
                      description="????????? ?????? ????????? ?????? ??????"
                      date="2022??? ????????? ??????"
                      chart={ReportLineChartDataYearly(allData.yearlyRentMonthCount)}
                    />
                  </MDBox>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                  <MDBox mb={3}>
                    <ReportsLineChart
                      color="info"
                      title="?????? ????????? ?????? ??????"
                      description="????????? ?????? ????????? ?????? ??????"
                      date="2022??? ????????? ??????"
                      chart={ReportLineChartDataMonthly(allData.monthlyRentMonthCount)}
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
                        <Icon>chat</Icon>&nbsp;&nbsp;????????? ?????? ????????? ?????????
                      </MDTypography>
                      <MDBox mt={0} mb={2}>
                        <MDTypography variant="button" color="text" fontWeight="regular">
                          2022??? ?????????
                        </MDTypography>
                      </MDBox>
                    </MDBox>
                    <MDBox p={2}>
                      <TimelineItem
                        color="info"
                        icon="apartment"
                        title={`${allData.yearlyRentGBNCount.dataByGBN2}???`}
                        dateTime="2022??? ????????? ?????? ?????????"
                      />
                      <TimelineItem
                        color="info"
                        icon="home"
                        title={`${allData.yearlyRentGBNCount.dataByGBN3}???`}
                        dateTime="2022??? ??????????????? ?????? ?????????"
                      />
                      <TimelineItem
                        color="info"
                        icon="house"
                        title={`${allData.yearlyRentGBNCount.dataByGBN1}???`}
                        dateTime="2022??? ??????????????? ?????? ?????????"
                      />
                      <TimelineItem
                        color="info"
                        icon="business"
                        title={`${allData.yearlyRentGBNCount.dataByGBN4}???`}
                        dateTime="2022??? ???????????? ?????? ?????????"
                      />
                      <TimelineItem
                        color="warning"
                        icon="apartment"
                        title={`${allData.monthlyRentGBNCount.data1}???`}
                        dateTime="2022??? ????????? ?????? ?????????"
                      />
                      <TimelineItem
                        color="warning"
                        icon="home"
                        title={`${allData.monthlyRentGBNCount.data3}???`}
                        dateTime="2022??? ??????????????? ?????? ?????????"
                      />
                      <TimelineItem
                        color="warning"
                        icon="house"
                        title={`${allData.monthlyRentGBNCount.data2}???`}
                        dateTime="2022??? ??????????????? ?????? ?????????"
                      />
                      <TimelineItem
                        color="warning"
                        icon="business"
                        title={`${allData.monthlyRentGBNCount.data4}???`}
                        dateTime="2022??? ???????????? ?????? ?????????"
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
