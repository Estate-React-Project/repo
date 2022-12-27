/* eslint-disable */
import axios from "axios";
import { useState, useEffect } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DataTable from "examples/Tables/DataTable";
import SearchInput from "./SearchInput";
import Spinner from "layouts/Style/Spinner";

// import KakaoMap
import RealDealerMap from "./map/RealDealerMap";

function Tables() {
  const [list, setList] = useState(null);
  const [loading, setLoading] = useState(true);
  //const [dealers, setDealers] = useState([]);
  //const [sggNm, setSggNm] = useState([]);

  // 페이지 시작 시 전체 목록 가져오기 (목록표시성공)
  useEffect(() => {
    const loadDealers = async (e) => {
      const response = await axios.get(
        "http://localhost:8080//web-scraping/openapi/load-all-dealer");
      setList(response.data);
      setLoading(false);
    };
    loadDealers();
  }, []);
  
  const clickHandler = (keyword) => {
    setLoading(true);
    // eslint-disable-next-line
    searchAndShowResult(keyword);
  };

  // 검색 버튼 클릭 시 키워드가 포함 되는 목록 가져오기 (목록표시성공)
  const searchAndShowResult = (keyword) => {
    if (!keyword) return;
    setLoading(true);

    const url = `http://localhost:8080/web-scraping/openapi/load-search-dealer?keyword=${keyword}`;
    axios.get(url).then((response) => {
      setList(response.data);
      setLoading(false);
    });
  };

  return (
    <DashboardLayout>
    {loading ? (
      <Spinner />
      ) : (
      <>
        <br />
          <Card>
            <MDBox
              mx={3}
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
          <SearchInput clickHandler={clickHandler} />
          </Card>
            <MDBox pt={5} pb={2}>
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
                          { Header: "자치구명", accessor: "sggNm", align: "center" },
                          { Header: "사업자상호", accessor: "cmpNm", align: "center" },
                          { Header: "중개업자명", accessor: "rdealerNm", align: "center" },
                          { Header: "전화번호", accessor: "telNo", align: "center" },
                          { Header: "주소", accessor: "address", align: "center" },
                          { Header: "중개업등록번호", accessor: "raRegno", align: "center" },
                          { Header: "상태구분", accessor: "stsGbn", align: "center" },
                        ],
                        rows: list.map( (dealer) => {
                          return {
                            sggNm: dealer.sggNm,
                            cmpNm: dealer.cmpNm,
                            rdealerNm: dealer.rdealerNm,
                            telNo: dealer.telNo,
                            address: dealer.address,
                            raRegno: dealer.raRegno,
                            stsGbn: dealer.stsGbn
                          };
                        })
                      }} />
                  </Card>
                </Grid>
              </Grid>
            </MDBox>
          </>
      )}
    </DashboardLayout>    
  );
}

export default Tables;
