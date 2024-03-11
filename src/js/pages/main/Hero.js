// @ts-check

import { $, render } from "../../utils/render";
import { Figures } from "../../components/Features";
import template from "./Hero.html";
import heroIpad from "../../../assets/images/hero_ipad.jpg";

const heroFigures = {
  imgSrc: heroIpad,
  imgAlt: "iPad와 Smart Keyboard 및 Apple Pencil",
  figcaptions: [
    `<div className="caption-camera">센터 스테이지 기술이 적용된 새로운 울트라 와이드 전면 카메라</div>`,
    `<div className="caption-chip">A13 BIONIC 칩 전격 탑재</div>`,
    `<div className="caption-storage">저장 용량은 64GB부터</div>`,
  ],
};

const container = $("main section.hero");

render(container)(template);
render($("div.hero"))(Figures({ ...heroFigures }));
