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
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import MDTypography from "components/MDTypography";
import MDPagination from "components/MDPagination";
import MixedChart from "examples/Charts/MixedChart";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";

// Data
import rentData from "layouts/RentYearly/data/rentData";
import { Stack } from "@mui/system";

function Tables() {
  const { columns, rows } = rentData();
  // const { columns: pColumns, rows: pRows } = rentGraph();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDButton variant="outlined" color="info" size="large">
        아파트
      </MDButton>
      <MDButton variant="outlined" color="info" size="large">
        연립다세대
      </MDButton>
      <MDButton variant="outlined" color="info" size="large">
        단독다가구
      </MDButton>
      <MDButton variant="outlined" color="info" size="large">
        오피스텔
      </MDButton>
      <MDBox>
        <DataTable
          table={{ columns, rows }}
          isSorted={false}
          pagination={{ variant: "gradient", color: "secondary" }}
          entriesPerPage
          showTotalEntries={false}
          noEndBorder
        />
      </MDBox>
    </DashboardLayout>
  );
}

export default Tables;
