// @ts-check

import { $, render } from "../../utils/render";
import template from "./SearchWrap.html";
import { eventBind } from "../../utils/eventBinding";
import {
  allowClick,
  allowScroll,
  preventClick,
  preventScroll,
  toggleClassName,
} from "../../utils/styleHelper";

const container = $("header .search-wrap");

render(container)(template);

const searchStarterEl = $("header .search-starter"); // in Menu component

const headerEl = $("header");
const searchCloserEl = $("header .search .search-closer");
const searchShadowEl = $("header .search .shadow");
const searchInputEl = $("header .search input");

const [addSearch, removeSearch] = toggleClassName({
  $el: headerEl,
  className: "searching",
});

const clearSearch = () => {
  searchInputEl.value = "";
  setTimeout(() => searchInputEl.focus(), 500);
};

const showSearch = () => {
  addSearch();
  preventScroll();
  clearSearch();
  preventClick(searchStarterEl);
};

const hideSearch = () => {
  removeSearch();
  allowScroll();
  setTimeout(() => allowClick(searchStarterEl), 400);
};

const clickSearchStarterEl = (event) => {
  event.stopPropagation();
  headerEl.classList.contains("show") ? hideSearch() : showSearch();
};

eventBind({ $el: searchShadowEl, listener: hideSearch });
eventBind({ $el: searchStarterEl, listener: clickSearchStarterEl });
eventBind({ $el: searchCloserEl, listener: hideSearch });
