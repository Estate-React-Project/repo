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
  const [dealers, setDealers] = useState([]);
  useEffect(() => {
    const loadDealers = async (e) => {
      const response = await axios.get(
        "http://localhost:8080//web-scraping/openapi/load-all-dealer"
        );
      setDealers(response.data);
    };

    loadDealers();
  }, []);

  const [sggNm, setSggNm] = useState([]);
  const [tableData, setTableData] = useState(null);
  const [realerdealerData, setRealerDealerData] = useState(null);
  useEffect(() => {
    const loadDealers = async () => {
      const response = await axios.get(
        `http://localhost:8080//web-scraping/openapi/load-all-dealer=${sggNm}`
      );
      const { columns, rows } = RealerDealerData(response.data);
      setTableData({ columns, rows });
      setRealerDealerData(response.data);
      // eslint-disable-next-line no-console
      console.log(response.data);
    };
    loadDealers();
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
                {loading ? (
                  <Spinner />
                ) : (   
                <DataTable             
                  table={{
                    columns: [
                      { Header: "중개업자명", accessor: "rdealerNm" },
                      { Header: "중개업등록번호", accessor: "raRegno" },
                      { Header: "주소", accessor: "address" },
                      { Header: "사업자상호", accessor: "cmpNm" },
                      { Header: "전화번호", accessor: "telNo" },
                      { Header: "상태구분", accessor: "stsGbn" },
                      { Header: "자치구명", accessor: "sggNm" },
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
                  isSorted={false}
                  pagination={{ variant: "gradient", color: "info" }}
                  entriesPerPage
                  noEndBorder
                />
              )}
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
