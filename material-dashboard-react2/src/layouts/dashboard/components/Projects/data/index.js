/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
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
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const data = (props) => {
  const [estateNews, setEstateNews] = useState([]);

  useEffect(() => {
    const start = 1;
    const display = 100;
    const url = `http://localhost:8080/web-scraping/estate-news?start=${start}&display=${display}`;
    axios.get(url).then((response) => {
      if (response.data.result === "success") {
        setEstateNews(response.data.estateNews);
      }
    });
  }, []);

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

  return {
    columns: [
      { Header: "제목", accessor: "Title", align: "center" },
      { Header: "설명", accessor: "Description", align: "center" },
      { Header: "게시일", accessor: "PubDate", align: "center" },
    ],

    rows: [
      estateNews.map((news) => ({
        Title: (
          <MDTypography component="a" href={news.link} variant="h6">
            {news.title
              .replaceAll("&apos;", "'")
              .replaceAll("&quot;", '"')
              .replaceAll("<b>", "")
              .replaceAll("</b>", "")
              .replaceAll("&lt;", "<")
              .replaceAll("&gt;", ">")
              .substring(0, 10)}
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
              .substring(0, 15)}...`}
          />
        ),
        PubDate: <PubDate PUBDATE={moment(news.pubDate).startOf("day").fromNow()} />,
      })),
    ],
  };
};

export default data;
