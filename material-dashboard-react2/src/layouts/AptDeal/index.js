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
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import { useEffect, useState } from "react";
import axios from "axios";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import GunPrAChart from "examples/Charts/MixedChart/GunPrAChart";
import GunPrBChart from "examples/Charts/MixedChart/GunPrBChart";
import GunPrCChart from "examples/Charts/MixedChart/GunPrCChart";
import GunPrDChart from "examples/Charts/MixedChart/GunPrDChart";
import GunPrEChart from "examples/Charts/MixedChart/GunPrEChart";
import GunPrAChartData from "./data/GunPrAChartData";
import GunPrBChartData from "./data/GunPrBChartData";
import GunPrCChartData from "./data/GunPrCChartData";
import GunPrDChartData from "./data/GunPrDChartData";
import GunPrEChartData from "./data/GunPrEChartData";

function Tables() {
  const [gu, setGu] = useState("강남구");
  const [dealDatas, setDealDatas] = useState([{ gunB: "" }]);
  const [preGu, setPreGu] = useState("");

  useEffect(() => {
    const loadAptDeals = async () => {
      if (gu.length !== 0) {
        const response = await axios.get(
          `http://localhost:8080/web-scraping/openapi/loadAptDeals?gu=${gu}`
        );
        // const response = await axios.get(`/web-scraping/openapi/loadAptDealCount`);
        console.log(response.data);
        setDealDatas(response.data);
      }
    };
    loadAptDeals();
  }, [gu]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDInput
        type="search"
        label="Search"
        value={preGu}
        onChange={(e) => {
          setPreGu(e.target.value);
        }}
      />
      <MDButton
        color="info"
        onClick={() => {
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
                {/* <div>
                  {dealDatas.map((data) => {
                    <div>
                      <h5>{data.gunB}</h5>
                    </div>;
                  })}
                </div> */}
                <GunPrAChart
                  // title={data.adresGu}
                  title="GunPrAChart"
                  description="(2020년 기준)"
                  chart={{ GunPrAChartData }}
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
                {/* <GunPrBChart
                  // title={data.adresGu}
                  title="GunPrBChart"
                  description="(2020년 기준)"
                  chart={{ GunPrBChartData }}
                /> */}
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
                {/* <GunPrCChart
                  // title={data.adresGu}
                  title="GunPrCChart"
                  description="(2020년 기준)"
                  chart={{ GunPrCChartData }}
                /> */}
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
                {/* <GunPrDChart
                  // title={data.adresGu}
                  title="GunPrDChart"
                  description="(2020년 기준)"
                  chart={{ GunPrDChartData }}
                /> */}
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
                {/* <GunPrEChart
                  // title={data.adresGu}
                  title="GunPrEChart"
                  description="(2020년 기준)"
                  chart={{ GunPrEChartData }}
                /> */}
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
