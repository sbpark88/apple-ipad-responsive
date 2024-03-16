// @ts-check

import { Link } from "./Common";

/**
 * Info Component
 * @param imgSrc
 * @param imgAlt {string}
 * @param title {string}
 * @param paragraph {string}
 * @param href {string}
 * @returns {string}
 * @constructor
 */
export const Info = ({ imgSrc, imgAlt, title, paragraph, url: href }) => `
<div>
  <img class="icon" src="${imgSrc}" alt="${imgAlt}" />
  <h3>${title}</h3>
  <p>${paragraph}</p>
  ${Link({ href: href, text: "더 알아보기" })}
</div>
`;
