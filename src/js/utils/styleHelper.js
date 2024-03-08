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
