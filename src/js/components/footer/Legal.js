// @ts-check

import { $, render } from "../../utils/render";
import { LiLink } from "../Common";
import { thisYear } from "../../utils/calendar";

const template = `<div class="copyright">
  Copyright ©
  <span class="this-year"></span>
  Apple Inc. 모든 권리 보유.
</div>
<ul>
  ${LiLink({ text: "개인정보 처리방침" })}
  ${LiLink({ text: "웹 사이트 이용 약관" })}
  ${LiLink({ text: "판매 및 환불" })}
  ${LiLink({ text: "법적 고지" })}
  ${LiLink({ text: "사이트 맵" })}
</ul>
<div class="locale">대한민국</div>
`;

const container = $("footer .legal");

render(container)(template);

$("footer .this-year").textContent = thisYear();
