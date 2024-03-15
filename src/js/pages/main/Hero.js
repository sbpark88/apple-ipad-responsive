// @ts-check

import { $, render } from "../../utils/render";
import { Figures } from "../../components/Features";
import heroIpad from "../../../assets/images/hero_ipad.jpg";
import { Link } from "../../components/Common";

const template = `
<div class="inner">
  <h1 class="bg-text">iPad</h1>
  <div class="hero feature"></div>
  <h2 class="bg-text">매사를 더욱 쉽게</h2>
  <p class="pricing">₩449,000부터</p>
  <p class="description">
    강력한 성능에 간편함과 다재다능까지 갖춘 새로워진 iPad. 당신이 어떤 일을
    즐겨하든 함께할 수 있도록 디자인되었습니다. 작업, 취미, 공부, 소통 등. 이
    모든 것을 부담 없이 누릴 수 있죠.
  </p>
  <div class="links">
    ${Link({ text: "이벤트 시청하기" })}
    ${Link({ text: "iPad를 선택하는 이유" })}
  </div>
</div>
`;

const heroFigures = {
  imgSrc: heroIpad,
  imgAlt: "iPad와 Smart Keyboard 및 Apple Pencil",
  figcaptions: [
    `<div class="caption-camera">센터 스테이지 기술이 적용된 새로운 울트라 와이드 전면 카메라</div>`,
    `<div class="caption-chip">A13 BIONIC 칩 전격 탑재</div>`,
    `<div class="caption-storage">저장 용량은 64GB부터</div>`,
  ],
};

const container = $("main section.hero");

render(container)(template);
render($("div.hero"))(Figures({ ...heroFigures }));
