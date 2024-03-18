// @ts-check

import "../../../css/components/header/index.scss";

import { init } from "../../utils/render";
import template from "./index.html";

init(
  template,
  "header",
)(() => {
  import("./Menu");
  import("./SearchWrap");
  import("./CloneMenu");
});
