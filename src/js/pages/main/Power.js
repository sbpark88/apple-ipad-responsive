// @ts-check

import { $, render } from "../../utils/render";
import { Figures, Infos, Title } from "../../components/Features";
import {
  arcadeFigures,
  arcadeInfos,
  createFigures,
  createInfos,
  multipleAppsFigures,
} from "../../datas/power";

const template = `
<div class="inner">
  <div class="multiple-apps"></div>
  <div class="arcade feature"></div>
  <div class="create feature"></div>
</div>
`;

const container = $("main section.power");

render(container)(template);
render($("div.multiple-apps"))(
  Title("거침없는 일 처리 성능") + Figures({ ...multipleAppsFigures }),
);
render($("div.arcade"))(
  Figures({ ...arcadeFigures }) + Infos(arcadeInfos, "center"),
);
render($("div.create"))(
  Infos(createInfos, "end") + Figures({ ...createFigures }),
);
