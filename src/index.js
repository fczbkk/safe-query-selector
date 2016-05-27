function constructQueryFunction (method, default_value) {
  return function (selector, root = document) {
    try {
      return root[method](selector)
    } catch (error) {
      return default_value;
    }
  }
}


/**
 * Returns first matching element that is child of root node, or `null` if not found.
 * @name safeQuerySelector
 * @param {*} selector CSS selector. Should be string.
 * @param {*} [root=document] Node inside which the selector will be applied.
 * @returns {Element|null}
 */
export const safeQuerySelector = constructQueryFunction('querySelector', null);


/**
 * Returns collection of all matching elements that are children of root node, or an empty array if not found.
 * @name safeQuerySelectorAll
 * @param {*} selector CSS selector. Should be string.
 * @param {*} [root=document] Node inside which the selector will be applied.
 * @returns {Array}
 */
export const safeQuerySelectorAll = constructQueryFunction('querySelectorAll', []);
