// @ts-check

import { $, render } from "../../utils/render";
import { Figures, Infos, Title } from "../../components/Features";
import { accessoriesFigures, accessoriesInfos } from "../../datas/accessories";

const template = `<div class="inner"></div>`;

const container = $("main section.accessories");

render(container)(template);
render($("main section.accessories .inner"))(
  Title("손으로 쓰거나 키보드로 치거나.") +
    Figures({ ...accessoriesFigures }) +
    Infos(accessoriesInfos, "large"),
);
