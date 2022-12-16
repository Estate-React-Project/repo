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
import authorsTableData from "layouts/RealTrade/data/monthlyTradeTable";
import projectsTableData from "layouts/tables/data/projectsTableData";

function Tables() {
  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();

  return (
    // Material Dashboard 2 React Example
    <DashboardLayout>
      <DashboardNavbar />
      <VerticalBarChart
        icon={{ color: "info", component: "leaderboard" }}
        title="서울시 월별 매매 거래량"
        description="서울시 매매 거래량"
        chart={{
          labels: [
            "1월",
            "2월",
            "3월",
            "4월",
            "5월",
            "6월",
            "7월",
            "8월",
            "9월",
            "10월",
            "11월",
            "12월",
          ],
          datasets: [
            {
              label: "Sales by age",
              color: "dark",
              data: [15, 20, 12, 60, 20, 15, 20, 12, 60, 20, 15, 11],
            },
          ],
        }}
      />
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
