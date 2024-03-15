// @ts-check

import { $, render } from "../../utils/render";
import { Infos, Figures, Title } from "../../components/Features";
import {
  accessibilityFigures,
  accessibilityInfos,
} from "../../datas/accessibility";

const template = `<div class="inner"></div>`;

const container = $("main section.accessibility");

render(container)(template);
render($("main section.accessibility .inner"))(
  Title("모두를 위해 만들다") +
    Infos(accessibilityInfos, "large") +
    Figures({ ...accessibilityFigures }),
);
