// @ts-check

import { $, normalizeHTML, render } from "../../utils/render";
import { NavigationList } from "../NavigationList";
import navigation from "../../datas/navigation";
import { eventBind } from "../../utils/eventBinding";

const container = $("footer .navigations");

render(container)(normalizeHTML(navigation.map(NavigationList)));

const navigationMapEls = $("footer .navigations .map");

navigationMapEls.forEach((el) => {
  const toggleActivation = (event) => {
    event.stopPropagation();

    navigationMapEls.forEach((other) => {
      if (other === el) {
        el.classList.toggle("active");
      } else {
        other.classList.remove("active");
      }
    });
  };

  eventBind({
    $el: el,
    listener: toggleActivation,
  });
});
