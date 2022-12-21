/* eslint-disable no-useless-return */
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
import { useEffect, useState } from "react";
import axios from "axios";
import { Stack } from "@mui/system";
import { MonitorSharp } from "@mui/icons-material";
import MDAlert from "components/MDAlert";

function Tables() {
  const [houseType, setHouseType] = useState("");
  const [list, setList] = useState(null);
  const [keyword, setKeyword] = useState("");

  const changeHandler = (e) => {
    setKeyword(e.target.value);
  };

  const clickHandler = (e) => {
    // eslint-disable-next-line no-use-before-define
    searchAndShowResult();
    setKeyword("");
  };

  const searchAndShowResult = () => {
    if (!keyword) return;

    const url = `http://localhost:8080/web-scraping/openapi/loadYearlyRentList?houseType=${houseType}&keyword=${keyword}`;
    axios.get(url).then((response) => {
      setList(response.data);
    });
  };

  useEffect(() => {
    const loadYearlyRentList = async () => {
      const response = await axios.get(
        `http://localhost:8080/web-scraping/openapi/loadYearlyRentList?houseType=${houseType}`
      );
      setList(response.data);
      if (response.data.length === 0) {
        alert("상단의 건물 용도를 선택하세요.");
      }
    };
    loadYearlyRentList();
  }, [houseType]);

  function Date({ CNTRCT_DE }) {
    return (
      <MDBox display="flex" alignItems="center" lineHeight={1}>
        <MDBox ml={2} lineHeight={1}>
          <MDTypography display="block" variant="button" fontWeight="medium">
            {CNTRCT_DE}
          </MDTypography>
        </MDBox>
      </MDBox>
    );
  }

  function GuDongName({ SGG_NM, BJDONG_NM }) {
    return (
      <MDBox lineHeight={1} textAlign="left">
        <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
          {SGG_NM}
        </MDTypography>
        <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
          {BJDONG_NM}
        </MDTypography>
      </MDBox>
    );
  }

  function Bldg({ BLDG_NM, FLOOR }) {
    return (
      <MDBox lineHeight={1} textAlign="left">
        <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
          {BLDG_NM}
        </MDTypography>
        <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
          {FLOOR}
        </MDTypography>
      </MDBox>
    );
  }

  function Fee({ RENT_GTN }) {
    return (
      <MDBox lineHeight={1} textAlign="left">
        <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
          {RENT_GTN}
        </MDTypography>
      </MDBox>
    );
  }

  function Area({ BLDG_AREA }) {
    return (
      <MDBox lineHeight={1} textAlign="left">
        <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
          {BLDG_AREA}
        </MDTypography>
      </MDBox>
    );
  }

  function HouseUse({ BUILD_YEAR, HOUSE_TYPE }) {
    return (
      <MDBox lineHeight={1} textAlign="left">
        <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
          {BUILD_YEAR}
        </MDTypography>
        <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
          {HOUSE_TYPE}
        </MDTypography>
      </MDBox>
    );
  }

  if (list == null) {
    return null;
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDButton
        variant="outlined"
        color="info"
        size="large"
        onClick={() => {
          setHouseType("아파트");
        }}
      >
        <Icon>apartment</Icon>&nbsp;아파트
      </MDButton>
      <MDButton
        variant="outlined"
        color="info"
        size="large"
        onClick={() => {
          setHouseType("연립다세대");
        }}
      >
        <Icon>home</Icon>&nbsp;연립다세대
      </MDButton>
      <MDButton
        variant="outlined"
        color="info"
        size="large"
        onClick={() => {
          setHouseType("단독다가구");
        }}
      >
        <Icon>house</Icon>&nbsp;단독다가구
      </MDButton>
      <MDButton
        variant="outlined"
        color="info"
        size="large"
        onClick={() => {
          setHouseType("오피스텔");
        }}
      >
        <Icon>business</Icon>&nbsp;오피스텔
      </MDButton>
      <br />
      <br />
      <Stack>
        <MDInput
          type="text"
          value={keyword}
          onChange={changeHandler}
          label="검색 키워드를 입력하세요."
          size="large"
        />
        <MDButton onClick={clickHandler} color="info">
          Search
        </MDButton>
      </Stack>
      <MDBox>
        <DataTable
          table={{
            columns: [
              { Header: "계약일", accessor: "Date", align: "center" },
              { Header: "주소(구, 동)", accessor: "GuDongName", align: "center" },
              { Header: "건물명, 층", accessor: "Bldg", align: "center" },
              { Header: "보증금(만원)", accessor: "Fee", align: "center" },
              { Header: "건물면적(m^2)", accessor: "Area", align: "center" },
              { Header: "건축년도, 건물용도", accessor: "HouseUse", align: "center" },
            ],

            rows: list.map((contract) => ({
              Date: <Date CNTRCT_DE={contract.cntrctDe} />,
              GuDongName: <GuDongName SGG_NM={contract.sggNm} BJDONG_NM={contract.bjdongNm} />,
              Bldg: <Bldg BLDG_NM={contract.bldgNm} FLOOR={`${contract.floor}층`} />,
              Fee: <Fee RENT_GTN={contract.rentGtn} />,
              Area: <Area BLDG_AREA={contract.bldgArea} />,
              HouseUse: (
                <HouseUse BUILD_YEAR={contract.buildYear} HOUSE_TYPE={contract.houseType} />
              ),
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
}

export default Tables;
