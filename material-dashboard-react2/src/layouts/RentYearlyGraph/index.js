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
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import MDPagination from "components/MDPagination";
import MixedChart from "examples/Charts/MixedChart";
import DefaultLineChart from "examples/Charts/LineCharts/DefaultLineChart";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";

// Data
import rentData from "layouts/RentYearly/data/rentData";
import rentGraph from "layouts/RentYearly/data/rentGraph";
import { Stack } from "@mui/system";

function Tables() {
  const { columns, rows } = rentData();
  // const { columns: pColumns, rows: pRows } = rentGraph();

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
              </MDBox>
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
                <DefaultLineChart
                  icon={{ color: "info", component: "leaderboard" }}
                  title="Default Line Chart"
                  description="Product insights"
                  chart={{
                    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [
                      {
                        label: "Organic Search",
                        color: "info",
                        data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
                      },
                      {
                        label: "Referral",
                        color: "dark",
                        data: [30, 90, 40, 140, 290, 290, 340, 230, 400],
                      },
                      {
                        label: "Direct",
                        color: "primary",
                        data: [40, 80, 70, 90, 30, 90, 140, 130, 200],
                      },
                    ],
                  }}
                />
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
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Tables;
