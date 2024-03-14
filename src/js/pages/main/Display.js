// @ts-check

import { $, render } from "../../utils/render";
import { Figures, Infos, Title } from "../../components/Features";
import displayNotes from "../../../assets/images/display_notes.jpg";
import displaySharePlay from "../../../assets/images/display_shareplay.png";

const template = `
<div class="inner">
  <div class="notes"></div>
  <div class="share-play feature"></div>
</div>
`;

const notesFigures = {
  imgSrc: displayNotes,
  imgAlt: "iPad의 Goodnotes 5 앱에서 편집 중인 손글씨 필기",
  figcaptions: "노트 필기는 GOODNOTES 5로",
};

const sharePlayFigures = {
  imgSrc: displaySharePlay,
  imgAlt: "SharePlay 기능으로 영상을 함께 즐기는 모습",
  figcaptions: "함께 보고 함께 즐기고",
};

const sharePlayInfos = [
  {
    icon: "display",
    paragraph: `놀랍도록 섬세한 디테일과 생생한 색상을 자랑하는 25.9cm Retina 디스플레이를 갖춘 iPad.<sup><a href="#footnote2">2</a></sup>
                영화를 감상할 때도, 프로젝트를 진행할 때도 또는 멋진 그림을 그릴 때도 더할 나위 없죠.`,
  },
  {
    icon: "true-tone",
    paragraph: `True Tone이 주변의 조명에 맞춰 색온도를 조절해줍니다.
                덕분에 어떤 조명에서도 눈이 편안한 화면을 경험할 수 있죠.`,
  },
];

const container = $("main section.display");

render(container)(template);
render($("div.notes"))(
  Title("빛나는 아이디어에 걸맞은 디스플레이") + Figures({ ...notesFigures }),
);
render($("div.share-play"))(
  Figures({ ...sharePlayFigures }) + Infos(sharePlayInfos, "center"),
);
