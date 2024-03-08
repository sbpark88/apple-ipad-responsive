// @ts-check

import { $, render } from "../../utils/render";
import template from "./Menu.html";
import { eventBind } from "../../utils/eventBinding";

const container = $("header .menu");

render(container)(template);

const basketStarterEl = $("header .basket-starter");
const basketEl = $("header .basket");

const hiddenBasket = () => basketEl.classList.remove("show");
const showBasket = () => basketEl.classList.add("show");

const clickBasketStarterEl = (event) => {
  event.stopPropagation();
  basketEl.classList.contains("show") ? hiddenBasket() : showBasket();
};

const clickBasketEl = (event) => {
  event.stopPropagation();
  if (event.target.tagName === "A") {
    // 각 페이지로 이동
  }
};

eventBind({ $el: window, listener: hiddenBasket });
eventBind({ $el: basketStarterEl, listener: clickBasketStarterEl });
eventBind({ $el: basketEl, listener: clickBasketEl });
