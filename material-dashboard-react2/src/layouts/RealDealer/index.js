/* eslint-disable */
import axios from "axios";
import { useState, useCallback, useEffect } from "react";

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
import Spinner from "layouts/Style/Spinner";

// import KakaoMap
import RealDealerMap from "./map/RealDealerMap";

function Tables() {
  // 전체 목록 가져오기
  const [dealers, setDealers] = useState([]);
  useEffect(() => {
    const loadDealers = async (e) => {
      const response = await axios.get(
        "http://localhost:8080//web-scraping/openapi/load-all-dealer");
      setDealers(response.data);
    };
      // console.log(keyword);
    loadDealers();
  }, []);

  // 구 검색 -> 구 목록 보여주기
  const [sggNm, setSggNm] = useState([]);
  useEffect(() => {
    const searchDealers = async () => {
      const response = await axios.get(
        `http://localhost:8080/web-scraping/openapi/load-search-dealer?sggNm=${sggNm}`);
      setSggNm( response.data );
      
      // console.log(response.data);
    };
      searchDealers();
  }, [sggNm]);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <br />
      <Card>
      <MDBox
        mx={1}
        mt={-2}
        py={2}
        px={1}
        variant="gradient"
        bgColor="info"
        borderRadius="lg"
        coloredShadow="info"
      >
        <MDTypography variant="h6" color="white" align="center">
          서울시내에 있는 부동산 중개 업소
        </MDTypography>
      </MDBox>
      <RealDealerMap />
      </Card>
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={1}
                mt={-2}
                py={2}
                px={1}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                >
                <MDTypography variant="h6" color="white" align="center">
                  부동산 중개 업소 목록 (서울시 전역)
                </MDTypography>
              </MDBox>
                <DataTable
                  table={{
                    columns: [
                      { Header: "중개업자명", accessor: "rdealerNm", align: "center" },
                      { Header: "중개업등록번호", accessor: "raRegno", align: "center" },
                      { Header: "주소", accessor: "address", align: "center" },
                      { Header: "사업자상호", accessor: "cmpNm", align: "center" },
                      { Header: "전화번호", accessor: "telNo", align: "center" },
                      { Header: "상태구분", accessor: "stsGbn", align: "center" },
                      { Header: "자치구명", accessor: "sggNm", align: "center" },
                    ],
                    rows: dealers.map( (dealer) => {
                      return {
                        rdealerNm: dealer.rdealerNm,
                        raRegno: dealer.raRegno,
                        address: dealer.address,
                        cmpNm: dealer.cmpNm,
                        telNo: dealer.telNo,
                        stsGbn: dealer.stsGbn,
                        sggNm: dealer.sggNm,
                      };
                    }),
                  }}
                />
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
