// @ts-check

import { $, render } from "../../utils/render";
import { Figures, Infos, Title } from "../../components/Features";
import {
  facetimeFigures,
  filesFigures,
  filesInfos,
} from "../../datas/wireless";

const template = `
<div class="inner">
  <div class="facetime"></div>
  <div class="files feature"></div>
</div>
`;

const container = $("main section.wireless");

render(container)(template);
render($("div.facetime"))(
  Title("선이 없다는 건 한계가 없다는 것.") + Figures({ ...facetimeFigures }),
);
render($("div.files"))(Infos(filesInfos) + Figures({ ...filesFigures }));
