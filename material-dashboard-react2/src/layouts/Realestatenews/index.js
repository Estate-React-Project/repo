/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
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

import { useEffect, useState } from "react";
import axios from "axios";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DataTable from "examples/Tables/DataTable";
import moment from "moment";

// Data
import MDAlert from "components/MDAlert";

const estateLoad = (props) => {
  const [estateNews, setEstateNews] = useState([]);
  useEffect(() => {
    const start = 1;
    const display = 10;
    const url = `http://localhost:8080/web-scraping/estate-news?start=${start}&display=${display}`;
    axios.get(url).then((response) => {
      if (response.data.result === "success") {
        setEstateNews(response.data.estateNews);
        console.log(response.data.estateNews);
      }
    });
  }, []);

  function Title({ TITLE }) {
    return (
      <MDBox display="flex" alignItems="center" lineHeight={1}>
        <MDBox ml={2} lineHeight={1}>
          <MDTypography display="block" variant="button" fontWeight="medium">
            {TITLE}
          </MDTypography>
        </MDBox>
      </MDBox>
    );
  }

  function Description({ DESCRIPTION }) {
    return (
      <MDBox lineHeight={1} textAlign="left">
        <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
          {DESCRIPTION}
        </MDTypography>
      </MDBox>
    );
  }

  function PubDate({ PUBDATE }) {
    return (
      <MDBox lineHeight={1} textAlign="left">
        <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
          {PUBDATE}
        </MDTypography>
      </MDBox>
    );
  }
  return (
    <DashboardLayout>
      <br />
      <br />
      <MDBox>
        <DataTable
          table={{
            columns: [
              { Header: "제목", accessor: "Title", width: "20%", align: "center" },
              { Header: "설명", accessor: "Description", width: "40%", align: "center" },
              { Header: "게시일", accessor: "PubDate", align: "center" },
            ],

            rows: estateNews.map((news) => ({
              Title: (
                <MDTypography
                  component="a"
                  href={news.link}
                  variant="caption"
                  underLine="always"
                  fontWeight="bold"
                  lineHeight="always"
                >
                  {news.title
                    .replaceAll("&apos;", "'")
                    .replaceAll("&quot;", '"')
                    .replaceAll("<b>", "")
                    .replaceAll("</b>", "")
                    .replaceAll("&lt;", "<")
                    .replaceAll("&gt;", ">")}
                </MDTypography>
              ),
              Description: (
                <Description
                  DESCRIPTION={`${news.description
                    .replaceAll("&apos;", "'")
                    .replaceAll("&quot;", '"')
                    .replaceAll("<b>", "")
                    .replaceAll("</b>", "")
                    .replaceAll("&lt;", "<")
                    .replaceAll("&gt;", ">")
                    .substring(0, 40)}...`}
                />
              ),
              PubDate: <PubDate PUBDATE={moment(news.pubDate).startOf("day").fromNow()} />,
            })),
          }}
          isSorted={false}
          pagination={{ variant: "gradient", color: "info" }}
          entriesPerPage
          noEndBorder
        />
      </MDBox>
    </DashboardLayout>
  );
};
export default estateLoad;
