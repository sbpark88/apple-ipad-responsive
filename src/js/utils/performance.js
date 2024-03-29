// @ts-check

/**
 * Apply throttling to a function.
 * @param fn {Function} - A function to apply throttling.
 * @param delay {number} - milliseconds (default 500)
 * @returns {Function} - A function is applied throttling.
 */
export const throttle = (fn, delay = 500) => {
  let available = true;

  return (...args) => {
    if (available) {
      available = false;
      fn(...args);
      const timer = setTimeout(() => {
        available = true;
        clearTimeout(timer);
      }, delay);
    }
  };
};

/**
 * Apply debouncing to a function.
 * @param fn {Function} - A function to apply debouncing.
 * @param delay {number} - milliseconds (default 500)
 * @returns {Function} - A function is applied debouncing.
 */
export const debounce = (fn, delay = 500) => {
  let timer;

  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
      timer = undefined;
    }, delay);
  };
};
