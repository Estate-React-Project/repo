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

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDBadge from "components/MDBadge";

// Images

export default function data() {
  const Division = ({ RENT_GBN }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {RENT_GBN}
        </MDTypography>
      </MDBox>
    </MDBox>
  );

  const Location = ({ SGG_CD, SGG_NM }) => (
    <MDBox>
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {SGG_NM}
      </MDTypography>
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {SGG_CD}
      </MDTypography>
    </MDBox>
  );

  const Cost = ({ RENT_GTN, RENT_FEE }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {RENT_GTN}
      </MDTypography>
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {RENT_FEE}
      </MDTypography>
    </MDBox>
  );

  const Building = ({ BLDG_NM, BUILD_YEAR, HOUSE_GBN_NM }) => (
    <MDBox>
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {BLDG_NM}
      </MDTypography>
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {BUILD_YEAR}
      </MDTypography>
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {HOUSE_GBN_NM}
      </MDTypography>
    </MDBox>
  );

  const Detail = ({ RENT_AREA, FLR_NO }) => (
    <MDBox>
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {RENT_AREA}
      </MDTypography>
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {FLR_NO}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "division", accessor: "division", align: "center" },
      { Header: "location", accessor: "location", align: "center" },
      { Header: "cost", accessor: "cost", align: "center" },
      { Header: "detail", accessor: "detail", align: "center" },
      { Header: "building", accessor: "building", align: "center" },
      { Header: "contract_period", accessor: "contract_period", align: "center" },
      { Header: "contract_date", accessor: "contract_date", align: "center" },
    ],

    rows: [
      {
        division: <Division RENT_GBN="전월세구분" />,
        location: <Location SGG_NM="자치구명" SGG_CD="자치구코드" />,
        cost: <Cost RENT_GTN="보증금" RENT_FEE="임대료" />,
        building: <Building BLDG_NM="건물명" BUILD_YEAR="건축연도" HOUSE_GBN_NM="건물용도" />,
        detail: <Detail RENT_AREA="임대면적" FLR_NO="건물층" />,
        contract_period: (
          <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
            계약기간
          </MDTypography>
        ),
        contract_date: (
          <MDTypography component="a" variant="caption" color="text" fontWeight="medium">
            계약일
          </MDTypography>
        ),
      },
    ],
  };
}
