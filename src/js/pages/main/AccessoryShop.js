// @ts-check

import { $, render } from "../../utils/render";
import { Image, TransparentBox } from "../../components/WhiteBox";
import ipadAccessories from "../../../assets/images/ipad_accessories.jpg";
import { BlockLink } from "../../components/Common";

const children = `
<h1>iPad의 능력일 키워주는<br />액세서리</h1>
<p>케이스, 커버, Apple Pencil, AirPods 등 다양한 액세서리를 만나보세요.</p>
${BlockLink({ text: "iPad 액세서리 쇼핑하기" })}
${Image({ imgSrc: ipadAccessories, imgAlt: "다양한 액세서리 이미지" })}
`;

const container = $("main section.accessory-shop");

render(container)(TransparentBox(children));
