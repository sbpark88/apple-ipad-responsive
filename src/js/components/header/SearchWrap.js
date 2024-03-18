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
import K from "../../constant";
import { throttle } from "../../utils/performance";

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

const showSearch = (event) => {
  event.stopPropagation();
  addSearch();
  preventScroll();
  clearSearch();
  preventClick(searchStarterEl);
};

const hideSearch = (event) => {
  event.stopPropagation();
  removeSearch();
  allowScroll();
  setTimeout(() => allowClick(searchStarterEl), 400);
};

const clickSearchStarterEl = (event) => {
  event.stopPropagation();
  headerEl.classList.contains("show") ? hideSearch(event) : showSearch(event);
};

eventBind({ $el: searchShadowEl, listener: hideSearch });
eventBind({ $el: searchStarterEl, listener: clickSearchStarterEl });
eventBind({ $el: searchCloserEl, listener: hideSearch });

// Mobile 페이지 전환될 때 초기화
const resetHeader = (event) => {
  if (window.innerWidth <= K.BREAK_POINT.MOBILE) {
    hideSearch(event);
  } else {
    headerEl.classList.remove("menuing", "searching--mobile");
    searchInputEl.value = "";
  }
};

eventBind({
  $el: window,
  eventType: "resize",
  listener: throttle(resetHeader),
});
