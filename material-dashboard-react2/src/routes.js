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

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import RentMonthly from "layouts/RentMonthly";
import RentGraph from "layouts/RentGraph";
import RentYearly from "layouts/RentYearly";
import SeoulMap from "layouts/SeoulMap";
import RealDealer from "layouts/RealDealer";
import ReBuild from "layouts/ReBuild";
import AptInfo from "layouts/AptInfo";
import AptDeal from "layouts/AptDeal";
import Realestatenews from "layouts/Realestatenews";
// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "메인화면",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "부동산 뉴스",
    key: "realestatenews",
    icon: <Icon fontSize="small">newspaper</Icon>,
    route: "/realestatenews",
    component: <Realestatenews />,
  },
  {
    type: "collapse",
    name: "전세",
    key: "rentYearly",
    icon: <Icon fontSize="small">article</Icon>,
    route: "/rentYearly",
    component: <RentYearly />,
  },
  {
    type: "collapse",
    name: "월세",
    key: "rentMonthly",
    icon: <Icon fontSize="small">article</Icon>,
    route: "/rentMonthly",
    component: <RentMonthly />,
  },
  {
    type: "collapse",
    name: "전세/월세 통계",
    key: "rentGraph",
    icon: <Icon fontSize="small">leaderboardicon</Icon>,
    route: "/rentGraph",
    component: <RentGraph />,
  },
  {
    type: "collapse",
    name: "중개업소",
    key: "realDealer",
    icon: <Icon fontSize="small">home</Icon>,
    route: "/realDealer",
    component: <RealDealer />,
  },
  {
    type: "collapse",
    name: "공동주택/아파트 정보",
    key: "aptInfo",
    icon: <Icon fontSize="small">apartment</Icon>,
    route: "/aptInfo",
    component: <AptInfo />,
  },
  {
    type: "collapse",
    name: "아파트 동별 매매",
    key: "aptDeal",
    icon: <Icon fontSize="small">apartment</Icon>,
    route: "/aptDeal",
    component: <AptDeal />,
  },
  {
    type: "collapse",
    name: "재개발/재건축 사업",
    key: "reBuild",
    icon: <Icon fontSize="small">domainaddicon</Icon>,
    route: "/reBuild",
    component: <ReBuild />,
  },
  {
    type: "collapse",
    name: "지도 검색",
    key: "seoulMap",
    icon: <Icon fontSize="small">explore</Icon>,
    route: "/seoulMap",
    component: <SeoulMap />,
  },
];

export default routes;
