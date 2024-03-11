// @ts-check

import { normalizeHTML } from "../utils/render";

export const Figures = ({ title, imgSrc, imgAlt, figcaptions }) => `
${checkTitle(title)}
<div class="figures">
  <figure>
    <img
      src="${imgSrc}"
      alt="${imgAlt}"
    />
    <figcaption class="bg-text">
      ${normalizeHTML(figcaptions)}
    </figcaption>
  </figure>
</div>
`;

const checkTitle = (title) =>
  title ? `<h1 class="bg-text">${title}</h1>` : "";

/**
 * Infos Component
 * @param infos { {icon: string, paragraph: string}[]}
 * @param position {string?} - optional, center or end
 * @returns {string}
 * @constructor
 */
export const Infos = (infos, position) => `
<div class="infos ${position ? `infos--${position}` : ``}">
  ${normalizeHTML(infos.map((info) => Info({ ...info })))}
</div>
`;

/**
 * Info Component
 * @param icon
 * @param paragraph
 * @returns {string}
 * @constructor
 */
const Info = ({ icon, paragraph }) => `
<div class="info">
  <div class="icon icon--${icon}"></div>
  <p>${paragraph}</p>
</div>
`;
