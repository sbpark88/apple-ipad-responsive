// @ts-check

import { $, render } from "../../utils/render";
import { Infos, Figures, Title } from "../../components/Features";
import { privacyFigures, privacyInfos } from "../../datas/privacy";

const template = `<div class="inner"></div>`;

const container = $("main section.privacy");

render(container)(template);
render($("main section.privacy .inner"))(
  Title("개인정보 보호 기능 내장.") +
    Infos(privacyInfos, "large") +
    Figures({ ...privacyFigures }),
);
