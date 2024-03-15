// @ts-check

import { $, render } from "../../utils/render";
import { WhiteBox, Icon, Image } from "../../components/WhiteBox";
import arIcon from "../../../assets/images/ar_icon.png";
import arIpad from "../../../assets/images/ar_ipad.jpg";

const children = `
<div>
  ${Icon({ imgSrc: arIcon, imgAlt: "AR Icon" })}
  <h1>AR로 새로워진 iPad 미리 보기.</h1>
  <p>iPhone 또는 iPad에서 이 페이지를 Safari로 열어보세요.</p>
</div>
${Image({ imgSrc: arIpad, imgAlt: "AR Image" })}
`;

const container = $("main section.ar");

render(container)(WhiteBox(children));
