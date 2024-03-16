// @ts-check

import { $, render } from "../../utils/render";

const template = `
<a href="javascript:void(0)" class="apple-logo bg-text">Apple</a>
<a href="javascript:void(0)">iPad</a>
<a href="javascript:void(0)">iPad 10.2</a>
`;

const container = $("footer .breadcrumbs");

render(container)(template);
