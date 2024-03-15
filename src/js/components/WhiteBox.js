// @ts-check

import { normalizeHTML } from "../utils/render";

/**
 *
 * @param children {(string | string[] | Element |  NodeListOf<Element>)}
 * @returns {string}
 * @constructor
 */
export const WhiteBox = (children) => `
<div class="white-box">
  <div class="inner">
    ${normalizeHTML(children)}
  </div>
</div>
`;

export const Icon = ({ imgSrc, imgAlt }) =>
  `<img class="icon" src="${imgSrc}" alt="${imgAlt}" />`;
export const Image = ({ imgSrc, imgAlt }) =>
  `<img class="image" src="${imgSrc}" alt="${imgAlt}" />`;
