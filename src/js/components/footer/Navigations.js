// @ts-check

import { $, normalizeHTML, render } from "../../utils/render";
import { NavigationList } from "../NavigationList";
import navigation from "../../datas/navigation";

const container = $("footer .navigations");

render(container)(normalizeHTML(navigation.map(NavigationList)));
