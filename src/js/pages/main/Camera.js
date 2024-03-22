// @ts-check

import { $, render } from "../../utils/render";
import {
  Figures,
  VideoFigures,
  Infos,
  activateVideoControlButtons,
  Title,
} from "../../components/Features";
import {
  editFigures,
  editInfos,
  stageInfos,
  stageVideoFigures,
} from "../../datas/camera";

const template = `
<div class="inner">
  <div class="stage"></div>
  <div class="edit feature"></div>
</div>
`;

const container = $("main section.camera");

render(container)(template);

render($("div.stage"))(
  Title("촬영에서 편집 공유까지 한 기기에서.") +
    Infos(stageInfos) +
    VideoFigures({ ...stageVideoFigures }),
);
render($("div.edit"))(Infos(editInfos, "center") + Figures({ ...editFigures }));
activateVideoControlButtons("div.stage");
