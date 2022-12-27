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
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import axios from "axios";
import moment from "moment";
import "moment/locale/ko";

// Material Dashboard 2 React examples
import DataTable from "examples/Tables/DataTable";

// Data
import data from "layouts/dashboard/components/Projects/data";

function Projects() {
  const { columns, rows } = data();
  const [estateNews, setEstateNews] = useState([]);
  const [menu, setMenu] = useState(null);

  const openMenu = ({ currentTarget }) => setMenu(currentTarget);
  const closeMenu = () => setMenu(null);

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

  const renderMenu = (
    <Menu
      id="simple-menu"
      anchorEl={menu}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={Boolean(menu)}
      onClose={closeMenu}
    >
      <MenuItem onClick={closeMenu}>Action</MenuItem>
      <MenuItem onClick={closeMenu}>Another action</MenuItem>
      <MenuItem onClick={closeMenu}>Something else</MenuItem>
    </Menu>
  );

  return (
    <Card>
      <MDBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
        <MDBox>
          <MDTypography variant="h6" gutterBottom>
            <Icon>chat</Icon>&nbsp;&nbsp;뉴스
          </MDTypography>
          <MDBox display="flex" alignItems="center" lineHeight={0}>
            <Icon
              sx={{
                fontWeight: "bold",
                color: ({ palette: { info } }) => info.main,
                mt: -0.5,
              }}
            />
            <MDTypography variant="button" fontWeight="regular" color="text">
              &nbsp;<strong>부동산</strong> 오늘의 뉴스
            </MDTypography>
          </MDBox>
        </MDBox>
        <MDBox color="text" px={2}>
          <Icon
            sx={{ cursor: "pointer", fontWeight: "bold" }}
            fontSize="small"
            onClick={openMenu}
          />
        </MDBox>
        {renderMenu}
      </MDBox>
      <MDBox>
        <DataTable
          table={{
            columns: [
              { Header: "제목", accessor: "Title", align: "center" },
              { Header: "설명", accessor: "Description", align: "center" },
              { Header: "게시일", accessor: "PubDate", align: "center" },
            ],

            rows: estateNews.map((news) => ({
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
                <MDTypography>
                  {news.description
                    .replaceAll("&apos;", "'")
                    .replaceAll("&quot;", '"')
                    .replaceAll("<b>", "")
                    .replaceAll("</b>", "")
                    .replaceAll("&lt;", "<")
                    .replaceAll("&gt;", ">")
                    .substring(0, 15)}
                </MDTypography>
              ),
              PubDate: (
                <MDTypography>
                  {" "}
                  {moment(news.pubDate).lang("ko").startOf("day").fromNow()}{" "}
                </MDTypography>
              ),
            })),
          }}
          isSorted={false}
          pagination={{ variant: "gradient", color: "info" }}
          entriesPerPage={{ defaultValue: 5 }}
          noEndBorder
        />
      </MDBox>
    </Card>
  );
}

export default Projects;
