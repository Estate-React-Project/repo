/* eslint-disable array-callback-return */
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
import Footer from "examples/Footer";

// Data
import { useEffect, useState } from "react";
import axios from "axios";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import MDAlert from "components/MDAlert";
import GunPrAChartData from "./data/GunPrAChartData";
import GunPrBChartData from "./data/GunPrBChartData";
import GunPrCChartData from "./data/GunPrCChartData";
import GunPrDChartData from "./data/GunPrDChartData";
import GunPrEChartData from "./data/GunPrEChartData";

function Tables() {
  const [gu, setGu] = useState("");
  const [dealDatas, setDealDatas] = useState([""]);
  const [preGu, setPreGu] = useState("");

  useEffect(() => {
    const loadAptDeals = async () => {
      if (gu.length !== 0) {
        const response = await axios.get(`/openapi/loadAptDeals?gu=${gu}`);
        // const response = await axios.get(`/openapi/loadAptDealCount`);
        if (response.data.length === 0) {
          alert("잘못된 입력입니다");
          setGu("");
        } else {
          setDealDatas(response.data);
        }
      }
    };
    loadAptDeals();
  }, [gu]);

  return (
    <DashboardLayout>
      <MDInput
        type="search"
        // label="구를 입력해주십시오"
        label="Search Gu"
        value={preGu}
        onChange={(e) => {
          setPreGu(e.target.value);
        }}
      />
      <MDButton
        color="info"
        onClick={(e) => {
          if (preGu.length < 2) {
            alert("두 글자 이상 입력해주십시오");
            setPreGu("");
            return;
          }
          setGu(preGu);
          setPreGu("");
        }}
      >
        Search
      </MDButton>
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
                bgColor="primary"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  소형 아파트 평균 거래가 (60평방미터 이하)
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <GradientLineChart
                  title={dealDatas[0].adresGu}
                  description="(2020년 기준)"
                  chart={GunPrAChartData(dealDatas)}
                />
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="warning"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  소중형 아파트 평균 거래가 (60~85평방미터)
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <GradientLineChart
                  title={dealDatas[0].adresGu}
                  description="(2020년 기준)"
                  chart={GunPrBChartData(dealDatas)}
                />
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="success"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  중형 아파트 평균 거래가 (85~102평방미터)
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <GradientLineChart
                  title={dealDatas[0].adresGu}
                  description="(2020년 기준)"
                  chart={GunPrCChartData(dealDatas)}
                />
              </MDBox>
            </Card>
          </Grid>
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
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  중대형 아파트 평균 거래가 (102~135평방미터)
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <GradientLineChart
                  title={dealDatas[0].adresGu}
                  description="(2020년 기준)"
                  chart={GunPrDChartData(dealDatas)}
                />
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="dark"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  대형 아파트 평균 거래가 (135평방미터 이상)
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <GradientLineChart
                  title={dealDatas[0].adresGu}
                  description="(2020년 기준)"
                  chart={GunPrEChartData(dealDatas)}
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
