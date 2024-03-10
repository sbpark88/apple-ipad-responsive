// @ts-check

import "../../../css/pages/main/index.scss";

import { init } from "../../utils/render";
import template from "./index.html";

init(template)(() => {
  import("../../components/header/index");
  import("../../components/nav/index");
  import("../../pages/main/Hero");
});
