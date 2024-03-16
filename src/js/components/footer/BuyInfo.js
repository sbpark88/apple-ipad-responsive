// @ts-check

import { $, normalizeHTML, render } from "../../utils/render";
import buyInfo from "../../datas/buyInfo";
import { Info } from "../Info";

const container = $("footer .buy-info");

render(container)(normalizeHTML(buyInfo.map((info) => Info({ ...info }))));
