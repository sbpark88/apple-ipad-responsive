// @ts-check

import { normalizeHTML } from "../utils/render";
import { LiLink } from "./Common";

/**
 * Navigation List Component
 * @param title {string}
 * @param links {{name: string, url: string}[]}
 * @returns {string}
 * @constructor
 */
export const NavigationList = ({ title, maps: links }) => `
<div class="map">
  <h3>
    <span class="text">${title}</span>
  </h3>
  <ul>
    ${normalizeHTML(
      links.map(({ url: href, name: text }) => LiLink({ href, text })),
    )}
  </ul>
</div>
`;
