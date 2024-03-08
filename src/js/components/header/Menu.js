// @ts-check

import { $, render } from "../../utils/render";
import template from "./Menu.html";
import { eventBind } from "../../utils/eventBinding";
import { toggleClassName } from "../../utils/styleHelper";

const container = $("header .menu");

render(container)(template);

const basketStarterEl = $("header .basket-starter");
const basketEl = $("header .basket");

const [showBasket, hideBasket] = toggleClassName({
  $el: basketEl,
  className: "show",
});

const clickBasketStarterEl = (event) => {
  event.stopPropagation();
  basketEl.classList.contains("show") ? hideBasket() : showBasket();
};

const clickBasketEl = (event) => {
  event.stopPropagation();
  // href 속성에 의해 각 페이지로 이동
};

eventBind({ $el: window, listener: hideBasket });
eventBind({ $el: basketStarterEl, listener: clickBasketStarterEl });
eventBind({ $el: basketEl, listener: clickBasketEl });
