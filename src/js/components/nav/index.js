// @ts-check

import "../../../css/components/nav/index.scss";

import { $, init } from "../../utils/render";
import template from "./index.html";
import { toggleClassName } from "../../utils/styleHelper";
import { eventBind } from "../../utils/eventBinding";

init(template, "nav")(() => {});

const header = $("header");

const navEl = $("nav");
const navShadowEl = $("nav .shadow");
const navMenuToggleEl = $("nav .menu-toggle");

const [showMenu, hideMenu] = toggleClassName({
  $el: navEl,
  className: "menuing",
});

const clickNavMenuToggleEl = (event) => {
  event.stopPropagation();
  if (navEl.classList.contains("menuing")) {
    hideMenu();
  } else {
    showMenu();
  }
};

eventBind({ $el: navMenuToggleEl, listener: clickNavMenuToggleEl });
eventBind({ $el: navShadowEl, listener: hideMenu });
eventBind({ $el: header, listener: hideMenu });
