// @ts-check

import { $, render } from "../../utils/render";
import { InlineLink } from "../Common";

const template = `
다양한 쇼핑 방법:
${InlineLink({ text: "Apple Store" })}를 방문하거나,
${InlineLink({ text: "리셀러" })}를 찾아보거나, 080-330-8877번으로 전화하세요.
`;

const container = $("footer .how-to-shop");

render(container)(template);
