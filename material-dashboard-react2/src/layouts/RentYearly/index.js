/* eslint-disable consistent-return */
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
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { Stack } from "@mui/system";
import { MonitorSharp } from "@mui/icons-material";
import MDAlert from "components/MDAlert";
import Spinner from "layouts/Style/Spinner";
import SearchInput from "./SearchInput";

function Tables() {
  const [houseType, setHouseType] = useState("");
  const [list, setList] = useState(null);
  const [loading, setLoading] = useState(true);

  const clickHandler = (keyword) => {
    if (!keyword) return;
    setLoading(true);
    // eslint-disable-next-line
    searchAndShowResult(keyword);
  };

  const searchAndShowResult = (keyword) => {
    if (!keyword) return;
    setLoading(true);

    const url = `/openapi/loadYearlyRentList?houseType=${houseType}&keyword=${keyword}`;
    axios.get(url).then((response) => {
      setList(response.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    setLoading(true);
    const loadYearlyRentList = async () => {
      const response = await axios.get(`/openapi/loadYearlyRentList?houseType=${houseType}`);
      setList(response.data);
      setLoading(false);
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
      <MDBox lineHeight={1} textAlign="center">
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
      <MDBox lineHeight={1} textAlign="center">
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
      <MDBox lineHeight={1} textAlign="center">
        <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
          {RENT_GTN}
        </MDTypography>
      </MDBox>
    );
  }

  function Area({ BLDG_AREA }) {
    return (
      <MDBox lineHeight={1} textAlign="center">
        <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
          {BLDG_AREA}
        </MDTypography>
      </MDBox>
    );
  }

  function HouseUse({ BUILD_YEAR, HOUSE_TYPE }) {
    return (
      <MDBox lineHeight={1} textAlign="center">
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
      {houseType === "" ? (
        <>
          <br />
          <MDTypography fontWeight="bold">
            <Icon>erroricon</Icon>&nbsp;????????? ?????? ????????? ???????????????.
          </MDTypography>
          <br />
        </>
      ) : (
        <br />
      )}
      <MDButton
        variant="outlined"
        color="info"
        size="large"
        onClick={() => {
          setHouseType("?????????");
        }}
      >
        <Icon>apartment</Icon>&nbsp;?????????
      </MDButton>
      <MDButton
        variant="outlined"
        color="info"
        size="large"
        onClick={() => {
          setHouseType("???????????????");
        }}
      >
        <Icon>home</Icon>&nbsp;???????????????
      </MDButton>
      <MDButton
        variant="outlined"
        color="info"
        size="large"
        onClick={() => {
          setHouseType("???????????????");
        }}
      >
        <Icon>house</Icon>&nbsp;???????????????
      </MDButton>
      <MDButton
        variant="outlined"
        color="info"
        size="large"
        onClick={() => {
          setHouseType("????????????");
        }}
      >
        <Icon>business</Icon>&nbsp;????????????
      </MDButton>
      <br />
      <br />
      <SearchInput clickHandler={clickHandler} />
      <MDBox>
        {loading ? (
          <Spinner />
        ) : (
          <DataTable
            table={{
              columns: [
                { Header: "?????????", accessor: "Date", align: "center" },
                { Header: "??????(???, ???)", accessor: "GuDongName", align: "center" },
                { Header: "?????????, ???", accessor: "Bldg", align: "center" },
                { Header: "?????????(??????)", accessor: "Fee", align: "center" },
                {
                  Header: "????????????(m??)",
                  accessor: "Area",
                  align: "center",
                },
                { Header: "????????????,????????????", accessor: "HouseUse", align: "center" },
              ],

              rows: list.map((contract) => ({
                Date: <Date CNTRCT_DE={contract.cntrctDe} />,
                GuDongName: <GuDongName SGG_NM={contract.sggNm} BJDONG_NM={contract.bjdongNm} />,
                Bldg: <Bldg BLDG_NM={contract.bldgNm} FLOOR={`${contract.floor}???`} />,
                Fee: <Fee RENT_GTN={`${contract.rentGtn}??????`} />,
                Area: <Area BLDG_AREA={`${contract.bldgArea}(m??)`} />,
                HouseUse: (
                  <HouseUse
                    BUILD_YEAR={`${contract.buildYear}???`}
                    HOUSE_TYPE={contract.houseType}
                  />
                ),
              })),
            }}
            isSorted={false}
            pagination={{ variant: "gradient", color: "info" }}
            entriesPerPage
            noEndBorder
          />
        )}
      </MDBox>
    </DashboardLayout>
  );
}

export default Tables;
