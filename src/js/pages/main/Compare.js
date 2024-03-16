// @ts-check

import { $, normalizeHTML, render } from "../../utils/render";
import { WhiteBox } from "../../components/WhiteBox";
import { Link } from "../../components/Common";
import { Catalog } from "../../components/Catalog";
import catalogIpad from "../../datas/catalogIpad";

const children = `
<h1>당신에게 맞는 iPad는?</h1>
<div class="items"></div>
<div class="links">
  ${Link({ text: "모든 iPad 모델 비교하기" })}
  ${Link({ text: "iPad 쇼핑하기" })}
</div>
`;

const container = $("main section.compare");

render(container)(WhiteBox(children));
render($("main section.compare .items"))(
  normalizeHTML(catalogIpad.map((item) => Catalog({ ...item }))),
);
