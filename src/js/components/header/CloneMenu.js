// @ts-check

import { $, render } from "../../utils/render";
import template from "./CloneMenu.html";
import { eventBind } from "../../utils/eventBinding";
import { toggleClassName } from "../../utils/styleHelper";

const container = $("header .clone-menu");

render(container)(template);

const headerEl = $("header");
const searchTextFieldEl = $("header .text-filed");
const searchInputEl = $("header .search input");

const searchCancelEl = $("header .search-cancel");

const [addSearchingMobile, removeSearchingMobile] = toggleClassName({
  $el: headerEl,
  className: "searching--mobile",
});

const clearSearch = () => {
  searchInputEl.value = "";
};

const showSearch = (event) => {
  event.stopPropagation();
  addSearchingMobile();
};

const hideSearch = (event) => {
  event.stopPropagation();
  removeSearchingMobile();
  clearSearch();
};

eventBind({ $el: searchTextFieldEl, listener: showSearch });
eventBind({
  $el: searchCancelEl,
  listener: hideSearch,
});
