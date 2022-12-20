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
  const [count, setCount] = useState("");

  useEffect(() => {
    const loadMonthlyRentCount = async () => {
      const response = await axios.get(
        `http://127.0.0.1:8080/web-scraping/openapi/loadMonthlyRentCount`
      );
      setCount(response.data);
    };
    loadMonthlyRentCount();
  }, []);

  return (
    // Material Dashboard 2 React Example
    <DashboardLayout>
      <DashboardNavbar />
      <VerticalBarChart
        icon={{ color: "info", component: "leaderboard" }}
        title="서울시 월별 월세 거래량"
        description="2022년도"
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
              label: "월세 거래량",
              color: "dark",
              data: [
                count.data1,
                count.data2,
                count.data3,
                count.data4,
                count.data5,
                count.data6,
                count.data7,
                count.data8,
                count.data9,
                count.data10,
                count.data11,
                count.data12,
              ],
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
