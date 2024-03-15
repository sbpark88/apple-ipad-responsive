// @ts-check

import { $, render } from "../../utils/render";
import { Figures, Infos, Title } from "../../components/Features";
import {
  notesFigures,
  sharePlayFigures,
  sharePlayInfos,
} from "../../datas/display";

const template = `
<div class="inner">
  <div class="notes"></div>
  <div class="share-play feature"></div>
</div>
`;

const container = $("main section.display");

render(container)(template);
render($("div.notes"))(
  Title("빛나는 아이디어에 걸맞은 디스플레이") + Figures({ ...notesFigures }),
);
render($("div.share-play"))(
  Figures({ ...sharePlayFigures }) + Infos(sharePlayInfos, "center"),
);
