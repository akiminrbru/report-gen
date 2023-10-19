export function debounce(fn, wait = 3000) {
    let debounced = false;
    let resetDebouncedTimeout = null;
    return function(...args) {
      if (!debounced) {
        debounced = true;
        fn(...args);
        resetDebouncedTimeout = setTimeout(() => {
          debounced = false;
        }, wait);
      } else {
        clearTimeout(resetDebouncedTimeout);
        resetDebouncedTimeout = setTimeout(() => {
          debounced = false;
          fn(...args);
        }, wait);
      }
    }
};