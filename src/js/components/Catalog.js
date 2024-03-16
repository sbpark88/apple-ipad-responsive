// @ts-check

import { normalizeHTML } from "../utils/render";
import { Link } from "./Common";

/**
 * Catalog Component
 * @param imgSrc
 * @param colors {string[]}
 * @param name {string}
 * @param tagline {string}
 * @param price {number}
 * @param href
 * @returns {string}
 * @constructor
 */
export const Catalog = ({
  thumbnail: imgSrc,
  colors,
  name,
  tagline,
  price,
  url: href,
}) => `
<div class="item">
  <div class="thumbnail">
    <img src="${imgSrc}" alt="${name}">
  </div>
  <ul class="colors">
    ${normalizeHTML(colors.map((color) => Color(color)))}
  </ul>
  <h3 class="name">${name}</h3>
  <p class="tagline">${tagline}</p>
  <p class="price">₩${price.toLocaleString("en-US")}부터</p>
  <button class="btn">구입하기</button>
  ${Link({ href: href, text: "더 알아보기" })}
</div>
`;

/**
 * Color li Component
 * @param color {string}
 * @returns {`<li style="background-color: ${string};"></li>`}
 * @constructor
 */
const Color = (color) => `<li style="background-color: ${color};"></li>`;
