// @ts-check

import { $, render } from "../../utils/render";
import { Infos, MultipleFigures, Title } from "../../components/Features";
import { appsFigures1, appsFigures2, appsInfos } from "../../datas/apps";

const template = `<div class="inner"></div>`;

const container = $("main section.apps");

render(container)(template);
render($("main section.apps div.inner"))(
  Title("열정을 살려줄 다양한 앱") +
    Infos(appsInfos, "large") +
    MultipleFigures(appsFigures1) +
    MultipleFigures(appsFigures2),
);
