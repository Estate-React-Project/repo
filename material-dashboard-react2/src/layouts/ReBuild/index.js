/* eslint-disable react/jsx-no-undef */
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
import AuthorsTableData from "./data/authorsTableData";
import RebuildInfo from "./components/RebuildInfo";

// import kakaoMap
import RebuildMap from "./map/RebuildMap";

function Tables() {
  const [tableData, setTableData] = useState(null);
  const [gu, setGu] = useState("");
  const [rebuildData, setRebuildData] = useState([]);
  const [preQuery, setPreQuery] = useState("");

  useEffect(() => {
    const loadRebuildInfo = async () => {
      const response = await axios.get(
        `http://127.0.0.1:8080/web-scraping/openapi/rebuildInfo?gu=${gu}`
      );
      // const response = await axios.get(`/react-team3/news?start=${startNum}&query=${query}`);
      const { columns, rows } = AuthorsTableData(response.data);
      setTableData({ columns, rows });
      setRebuildData(response.data);
      // eslint-disable-next-line no-console
      console.log(response.data);
    };
    loadRebuildInfo();
  }, [gu]);

  if (!tableData) {
    return null;
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <RebuildMap />
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
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  재개발
                  <MDInput
                    variant="outlined"
                    label="자치구를 입력하세요."
                    value={preQuery}
                    onChange={(e) => {
                      setPreQuery(e.target.value);
                    }}
                  />
                  <MDButton
                    variant="gradient"
                    color="info"
                    size="medium"
                    onClick={() => {
                      setGu(preQuery);
                      setPreQuery("");
                    }}
                  >
                    SEARCH
                  </MDButton>
                  <MDBox>
                    <MDButton
                      variant="gradient"
                      color="success"
                      size="medium"
                      onClick={() => {
                        setGu("강남구");
                      }}
                    >
                      강남구
                    </MDButton>
                    <MDButton
                      variant="gradient"
                      color="dark"
                      size="medium"
                      onClick={() => {
                        setGu("강동구");
                      }}
                    >
                      강동구
                    </MDButton>
                    <MDButton
                      variant="gradient"
                      color="error"
                      size="medium"
                      onClick={() => {
                        setGu("강북구");
                      }}
                    >
                      강북구
                    </MDButton>
                    <MDButton
                      variant="gradient"
                      color="secondary"
                      size="medium"
                      onClick={() => {
                        setGu("강서구");
                      }}
                    >
                      강서구
                    </MDButton>
                    <MDButton
                      variant="gradient"
                      color="info"
                      size="medium"
                      onClick={() => {
                        setGu("관악구");
                      }}
                    >
                      관악구
                    </MDButton>
                    <MDButton
                      variant="gradient"
                      color="warning"
                      size="medium"
                      onClick={() => {
                        setGu("광진구");
                      }}
                    >
                      광진구
                    </MDButton>
                    <MDButton
                      variant="gradient"
                      color="secondary"
                      size="medium"
                      onClick={() => {
                        setGu("구로구");
                      }}
                    >
                      구로구
                    </MDButton>
                    <MDButton
                      variant="gradient"
                      color="info"
                      size="medium"
                      onClick={() => {
                        setGu("금천구");
                      }}
                    >
                      금천구
                    </MDButton>
                    <MDButton
                      variant="gradient"
                      color="error"
                      size="medium"
                      onClick={() => {
                        setGu("노원구");
                      }}
                    >
                      노원구
                    </MDButton>
                    <MDButton
                      variant="gradient"
                      color="error"
                      size="medium"
                      onClick={() => {
                        setGu("도봉구");
                      }}
                    >
                      도봉구
                    </MDButton>
                    <MDButton
                      variant="gradient"
                      color="warning"
                      size="medium"
                      onClick={() => {
                        setGu("동대문구");
                      }}
                    >
                      동대문구
                    </MDButton>
                    <MDButton
                      variant="gradient"
                      color="info"
                      size="medium"
                      onClick={() => {
                        setGu("동작구");
                      }}
                    >
                      동작구
                    </MDButton>
                    <MDButton
                      variant="gradient"
                      color="primary"
                      size="medium"
                      onClick={() => {
                        setGu("마포구");
                      }}
                    >
                      마포구
                    </MDButton>
                    <MDButton
                      variant="gradient"
                      color="primary"
                      size="medium"
                      onClick={() => {
                        setGu("서대문구");
                      }}
                    >
                      서대문구
                    </MDButton>
                    <MDButton
                      variant="gradient"
                      color="success"
                      size="medium"
                      onClick={() => {
                        setGu("서초구");
                      }}
                    >
                      서초구
                    </MDButton>
                    <MDButton
                      variant="gradient"
                      color="warning"
                      size="medium"
                      onClick={() => {
                        setGu("성동구");
                      }}
                    >
                      성동구
                    </MDButton>
                    <MDButton
                      variant="gradient"
                      color="error"
                      size="medium"
                      onClick={() => {
                        setGu("성북구");
                      }}
                    >
                      성북구
                    </MDButton>
                    <MDButton
                      variant="gradient"
                      color="dark"
                      size="medium"
                      onClick={() => {
                        setGu("송파구");
                      }}
                    >
                      송파구
                    </MDButton>
                    <MDButton
                      variant="gradient"
                      color="secondary"
                      size="medium"
                      onClick={() => {
                        setGu("양천구");
                      }}
                    >
                      양천구
                    </MDButton>
                    <MDButton
                      variant="gradient"
                      color="secondary"
                      size="medium"
                      onClick={() => {
                        setGu("영등포구");
                      }}
                    >
                      영등포구
                    </MDButton>
                    <MDButton
                      variant="gradient"
                      color="light"
                      size="medium"
                      onClick={() => {
                        setGu("용산구");
                      }}
                    >
                      용산구
                    </MDButton>
                    <MDButton
                      variant="gradient"
                      color="primary"
                      size="medium"
                      onClick={() => {
                        setGu("은평구");
                      }}
                    >
                      은평구
                    </MDButton>
                    <MDButton
                      variant="gradient"
                      color="light"
                      size="medium"
                      onClick={() => {
                        setGu("종로구");
                      }}
                    >
                      종로구
                    </MDButton>
                    <MDButton
                      variant="gradient"
                      color="light"
                      size="medium"
                      onClick={() => {
                        setGu("중구");
                      }}
                    >
                      중구
                    </MDButton>
                    <MDButton
                      variant="gradient"
                      color="warning"
                      size="medium"
                      onClick={() => {
                        setGu("중랑구");
                      }}
                    >
                      중랑구
                    </MDButton>
                  </MDBox>
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={tableData}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
                {/* <RebuildInfo datas={rebuildData} /> */}
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
