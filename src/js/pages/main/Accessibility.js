// @ts-check

import { $, render } from "../../utils/render";
import { Infos, Figures, Title } from "../../components/Features";
import accessibility from "../../../assets/images/accessibility.jpg";

const template = `<div class="inner"></div>`;

const accessibilityInfos = [
  {
    paragraph: `누구나 사용할 수 있는 기술이야말로 가장 강력한 기술입니다.
              iPad에 시각, 청각, 운동 및 인지능력 등을 보완해주는 손쉬운 사용 기능을 탑재한 이유도 바로 그 때문이죠.
              그룹 FaceTime 통화 중 수어를 사용하는 사람이 있는 경우,
              그 사람이 이야기 중인 것을 알 수 있도록 해당 타일을 더 크게 표시해주는 것이 좋은 예입니다.`,
    links: [{ text: "모든 손쉬운 사용 기능 살펴보기" }],
  },
];

const accessibilityFigures = {
  imgSrc: accessibility,
  imgAlt: "FaceTime 앱으로 4명이 수어로 영상 통화",
};

const container = $("main section.accessibility");

render(container)(template);
render($("main section.accessibility .inner"))(
  Title("모두를 위해 만들다") +
    Infos(accessibilityInfos, "large") +
    Figures({ ...accessibilityFigures }),
);
