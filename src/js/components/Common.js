// @ts-check

/**
 * Block Link Component
 * @param href {string?}
 * @param text {string}
 * @returns {string}
 * @constructor
 */
export const BlockLink = ({ href, text }) => `
<a href="${href ?? "javascript:void(0)"}" class="link">
  ${text}
</a>`;

/**
 * Inline Link Component
 * @param href {string?}
 * @param text {string}
 * @returns {string}
 * @constructor
 */
export const InlineLink = ({ href, text }) => `
<a href="${href ?? "javascript:void(0)"}">
  ${text}
</a>`;

/**
 * Li Inline Link Component
 * @param href {string?}
 * @param text {string}
 * @returns {string}
 * @constructor
 */
export const LiLink = ({ href, text }) => `
<li>
  ${InlineLink({ href, text })}
</li>
`;
