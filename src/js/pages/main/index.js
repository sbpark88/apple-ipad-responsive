// @ts-check

import "../../../css/pages/main/index.scss";
import "../../../css/components/features.scss";
import "../../../css/components/whiteBox.scss";

import { $, init } from "../../utils/render";
import template from "./index.html";
import {
  observerDownward,
  observerMutations,
  mutationConfig,
} from "../../utils/observer";

init(template)(() => {
  import("../../components/header/index");
  import("../../components/nav/index");
  import("../../components/footer/index");

  import("./Hero");
  import("./Power");
  import("./Display");
  import("./Camera");
  import("./Wireless");
  import("./Accessories");
  import("./IPadOs");
  import("./Apps");
  import("./Privacy");
  import("./Accessibility");
  import("./Ar");
  import("./Environment");
  import("./AccessoryShop");
  import("./Trade");
  import("./Compare");

  /* SCROLL OBSERVER */
  const attachIO = (mutation) => {
    const observeEls = $(".observe");
    observeEls.forEach((el) => observerDownward.observe(el));
  };

  // Mutation Observer 가 컴포넌트의 렌더링이 종료된 후 Intersection Observer 를 실행
  observerMutations(attachIO).observe($("#app"), mutationConfig);
});
