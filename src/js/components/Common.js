// @ts-check

/**
 * Link Component
 * @param href {string?}
 * @param text {string}
 * @returns {string}
 * @constructor
 */
export const Link = ({ href, text }) => `
<a href="${href ?? "javascript:void(0)"}" class="link">
  ${text}
</a>`;
