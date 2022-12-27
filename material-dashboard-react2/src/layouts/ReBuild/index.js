/* eslint-disable no-alert */
/* eslint-disable no-unused-expressions */
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
  const [preQuery, setPreQuery] = useState("");

  useEffect(() => {
    const loadRebuildInfo = async () => {
      const response = await axios.get(
        `http://127.0.0.1:8080/web-scraping/openapi/rebuildInfo?gu=${gu}`
      );
      // const response = await axios.get(`/react-team3/news?start=${startNum}&query=${query}`);
      const { columns, rows } = AuthorsTableData(response.data);
      setTableData({ columns, rows });
      // setRebuildData(response.data);
      // setTableAndRebuildData({ tableData: { columns, rows }, rebuildData: response.data });
      // eslint-disable-next-line no-console
      // eslint-disable-next-line
    };
    loadRebuildInfo();
  }, [gu]);

  if (!tableData) {
    return null;
  }

  return (
    <DashboardLayout>
      <MDBox
        mx={2}
        mt={-3}
        py={3}
        px={2}
        variant="gradient"
        bgColor="info"
        borderRadius="lg"
        coloredShadow="info"
        style={{ position: "relative", top: "15px", width: "1599px", left: "-17px" }}
      >
        <MDTypography variant="h6" color="white">
          서울시 재개발 맵
        </MDTypography>
      </MDBox>
      <RebuildMap setGu={setGu} />
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
                </MDTypography>
              </MDBox>
              <MDBox pt={8} style={{ position: "absolute", right: "20px", top: "0px" }}>
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
                  onClick={(e) => {
                    if (preQuery.length < 3) {
                      alert("정확한 자치구를 입력하세요. (예: 강남구,송파구,노원구...) ");
                      setPreQuery("");
                      return;
                    }
                    setGu(preQuery);
                    setPreQuery("");
                  }}
                >
                  SEARCH
                </MDButton>
              </MDBox>
              <MDBox pt={10}>
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
    </DashboardLayout>
  );
}

export default Tables;
