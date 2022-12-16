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
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

// import KakaoMap
import RealDealerMap from "./map/RealDealerMap";

function Tables() {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <RealDealerMap />
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
                  서울시 중개 업소 목록
                </MDTypography>
              </MDBox>
              <MDBox>
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
                    rows: [
                      {
                        rdealerNm: " {Test} ",
                        raRegno: " {Test} ",
                        address: " {Test} ",
                        cmpNm: " {Test} ",
                        telNo: " {Test} ",
                        stsGbn: " {Test} ",
                        sggNm: " {Test} ",
                      },
                    ],
                  }}
                />
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
