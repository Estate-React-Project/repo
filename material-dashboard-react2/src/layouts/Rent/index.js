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
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import MDPagination from "components/MDPagination";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import rentData from "layouts/Rent/data/rentData";
import projectsTableData from "layouts/Rent/data/projectsTableData";
import { Stack } from "@mui/system";

function Tables() {
  const { columns, rows } = rentData();
  const { columns: pColumns, rows: pRows } = projectsTableData();

  return (
    <DashboardLayout>
      <DashboardNavbar />
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
                bgColor="secondary"
                borderRadius="lg"
                coloredShadow="secondary"
              >
                <MDTypography variant="h6" color="white">
                  Rent Data
                </MDTypography>
                <Stack alignItems="right">
                  <MDInput align="right" variant="outlined" label="Type here" />
                </Stack>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  pagination={{ variant: "gradient", color: "secondary" }}
                  entriesPerPage
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
          <MDPagination align="center">
            <MDPagination item>
              <Icon>keyboard_arrow_left</Icon>
            </MDPagination>
            <MDPagination item active>
              1
            </MDPagination>
            <MDPagination item>2</MDPagination>
            <MDPagination item>3</MDPagination>
            <MDPagination item>
              <Icon>keyboard_arrow_right</Icon>
            </MDPagination>
          </MDPagination>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Tables;
