// @ts-check

import { $, render } from "../../utils/render";
import template from "./SearchWrap.html";
import { eventBind } from "../../utils/eventBinding";
import {
  allowScroll,
  preventScroll,
  toggleClassName,
} from "../../utils/styleHelper";

const container = $("header .search-wrap");

render(container)(template);

const searchStarterEl = $("header .search-starter"); // in Menu component

const html = $("html");
const headerEl = $("header");
const searchWrapEl = container;
const searchCloserEl = $("header .search .search-closer");
const searchShadowEl = $("header .search .shadow");

const [addSearch, removeSearch] = toggleClassName({
  $el: headerEl,
  className: "searching",
});

const showSearch = () => {
  addSearch();
  preventScroll();
};

const hideSearch = () => {
  removeSearch();
  allowScroll();
};

const clickSearchStarterEl = (event) => {
  event.stopPropagation();
  headerEl.classList.contains("show") ? hideSearch() : showSearch();
};

eventBind({ $el: searchShadowEl, listener: hideSearch });
eventBind({ $el: searchStarterEl, listener: clickSearchStarterEl });
eventBind({ $el: searchCloserEl, listener: hideSearch });
