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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";

// Data
import VerticalBarChart from "examples/Charts/BarCharts/VerticalBarChart";
import authorsTableData from "layouts/RentMonthly/data/monthlyTradeTable";
import projectsTableData from "layouts/tables/data/projectsTableData";
import { useEffect, useState } from "react";
import axios from "axios";

function Tables() {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();

  return (
    // Material Dashboard 2 React Example
    <DashboardLayout>
      <DashboardNavbar />

      <MDBox>
        <DataTable
          table={{ columns, rows }}
          isSorted={false}
          pagination={{ variant: "gradient", color: "secondary" }}
          showTotalEntries={false}
          noEndBorder
        />
      </MDBox>
    </DashboardLayout>
  );
}

export default Tables;
