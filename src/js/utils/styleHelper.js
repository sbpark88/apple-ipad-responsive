// @ts-check

/**
 * Add class name to the element.
 * @param $el {Window | Element}
 * @param className {string}
 * @returns {function(): void}
 */
const addClassName =
  ({ $el, className }) =>
  () =>
    $el.classList.add(className);

/**
 * Remove class name from the element.
 * @param $el {Window | Element}
 * @param className {string}
 * @returns {function(): void}
 */
const removeClassName =
  ({ $el, className }) =>
  () =>
    $el.classList.remove(className);

/**
 * Return class name toggle functions
 * @param $el {Window | Element}
 * @param className {string}
 * @returns [addClassName, removeClassName]
 */
export const toggleClassName = ({ $el, className }) => {
  return [
    addClassName({ $el, className }),
    removeClassName({ $el, className }),
  ];
};

/**
 * Prevent document scroll
 */
export const preventScroll = () =>
  document.documentElement.classList.add("fixed");

/**
 * Allow document scroll
 */
export const allowScroll = () =>
  document.documentElement.classList.remove("fixed");

/**
 * Prevent element click or touch
 * @param $el {Window | Element}
 */
export const preventClick = ($el) =>
  addClassName({ $el: $el, className: "disabled" })();

/**
 * Allow element click or touch
 * @param $el {Window | Element}
 */
export const allowClick = ($el) =>
  removeClassName({ $el, className: "disabled" })();
