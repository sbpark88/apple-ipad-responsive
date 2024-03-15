// @ts-check

import { $, render } from "../../utils/render";
import { Infos, MultipleFigures, Title } from "../../components/Features";
import { iPadOsFigures, iPadOsInfos } from "../../datas/iPadOs";

const template = `<div class="inner"></div>`;

const container = $("main section.ipados");

render(container)(template);
render($("main section.ipados div.inner"))(
  Title("iPadOS. 작업의 성공 방정식.") +
    Infos(iPadOsInfos, "large") +
    MultipleFigures(iPadOsFigures),
);
