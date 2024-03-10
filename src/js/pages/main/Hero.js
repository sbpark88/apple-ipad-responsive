// @ts-check

import { $, render } from "../../utils/render";
import template from "./Hero.html";

const container = $("main section.hero");

render(container)(template);
