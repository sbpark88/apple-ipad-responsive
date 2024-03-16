// @ts-check

import "../../../css/components/footer/index.scss";

import { init } from "../../utils/render";
import template from "./index.html";

init(
  template,
  "footer",
)(() => {
  import("./BuyInfo");
  import("./Warning");
  import("./Breadcrumbs");
  // import('./Navigations')
  // import('./HowToShop')
  // import('./Legal')
});
